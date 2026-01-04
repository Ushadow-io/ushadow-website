# =============================================================================
# Ushadow Server Install Script (Windows)
# =============================================================================
# This script sets up a Ushadow server on Windows by:
#   - Installing Git
#   - Installing Docker Desktop
#   - Cloning the Ushadow repository
#   - Running setup via WSL
#
# Tailscale is configured later via the setup wizard.
#
# Usage:
#   iex (irm https://ushadow.io/server-install.ps1)
# =============================================================================

$Version = "1.0.0"

$ErrorActionPreference = "Continue"

function Write-Step { param($num, $total, $msg) Write-Host "`n[$num/$total] $msg" -ForegroundColor Cyan }
function Write-Ok { param($msg) Write-Host "  [OK] $msg" -ForegroundColor Green }
function Write-Warn { param($msg) Write-Host "  [WARN] $msg" -ForegroundColor Yellow }
function Write-Err { param($msg) Write-Host "  [ERROR] $msg" -ForegroundColor Red }

function Refresh-Path {
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
    # Also add common install locations
    $extraPaths = @(
        "$env:LOCALAPPDATA\Programs\Python\Python312",
        "$env:LOCALAPPDATA\Programs\Python\Python312\Scripts",
        "$env:ProgramFiles\Git\bin",
        "$env:ProgramFiles\Git\cmd"
    )
    foreach ($p in $extraPaths) {
        if ((Test-Path $p) -and ($env:Path -notlike "*$p*")) {
            $env:Path = "$p;$env:Path"
        }
    }
}

$repoUrl = "https://github.com/Ushadow-io/Ushadow.git"
$installDir = "$env:USERPROFILE\ushadow"

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "  Ushadow Server Install (Windows) v$Version" -ForegroundColor Cyan
Write-Host "==========================================`n" -ForegroundColor Cyan

# Check if running as admin
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Warn "Not running as Administrator. Some operations may require elevation."
}

# Check winget is available
if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
    Write-Err "winget not available. Please install it from the Microsoft Store (App Installer)."
    Write-Host "  https://aka.ms/getwinget" -ForegroundColor White
    exit 1
}

# Step 1: Install Git
Write-Step 1 4 "Checking Git installation..."

if (Get-Command git -ErrorAction SilentlyContinue) {
    $gitVersion = git --version 2>$null
    Write-Ok "Git already installed ($gitVersion)"
} else {
    Write-Host "  Installing Git (this may take a few minutes)..." -ForegroundColor Yellow
    winget install -e --id Git.Git --accept-source-agreements --accept-package-agreements

    Refresh-Path

    if (Get-Command git -ErrorAction SilentlyContinue) {
        Write-Ok "Git installed"
    } else {
        Write-Warn "Git installed but not in PATH. Please restart PowerShell after setup."
    }
}

# Step 2: Install Docker Desktop
Write-Step 2 4 "Checking Docker installation..."

if (Get-Command docker -ErrorAction SilentlyContinue) {
    $dockerVersion = docker --version 2>$null
    Write-Ok "Docker already installed ($dockerVersion)"
} else {
    Write-Host "  Installing Docker Desktop (this may take several minutes)..." -ForegroundColor Yellow
    winget install -e --id Docker.DockerDesktop --accept-source-agreements --accept-package-agreements
    Write-Ok "Docker Desktop installed"
    Write-Warn "You'll need to start Docker Desktop and complete initial setup."
}

# Step 3: Clone repository
Write-Step 3 4 "Setting up Ushadow repository..."

Refresh-Path

if (Test-Path $installDir) {
    Write-Host "  Directory exists, pulling latest..." -ForegroundColor Yellow
    Push-Location $installDir
    try {
        git pull
        Write-Ok "Repository updated"
    } catch {
        Write-Warn "Could not update repository"
    }
    Pop-Location
} else {
    Write-Host "  Cloning repository to $installDir..." -ForegroundColor Yellow
    try {
        # Clone with LF line endings (not CRLF) so scripts work in WSL
        git clone -c core.autocrlf=false $repoUrl $installDir
        Write-Ok "Repository cloned"
    } catch {
        Write-Err "Failed to clone repository"
        exit 1
    }
}

# Step 4: Setup complete
Write-Step 4 4 "Setup complete!"

Write-Host "`n==========================================" -ForegroundColor Green
Write-Host "  Installation Complete!" -ForegroundColor Green
Write-Host "==========================================`n" -ForegroundColor Green

Write-Host "Starting setup wizard..." -ForegroundColor White
Write-Host ""

Set-Location $installDir

# Check for WSL with a distro installed
$wslReady = $false
try {
    $distros = wsl -l -q 2>&1
    if ($LASTEXITCODE -eq 0 -and $distros -and $distros.Length -gt 0) {
        $wslReady = $true
    }
} catch {}

# Convert Windows path to WSL path (C:\Users\... -> /mnt/c/Users/...)
$drive = $installDir.Substring(0,1).ToLower()
$rest = $installDir.Substring(2) -replace '\\','/'
$wslPath = "/mnt/$drive$rest"

if ($wslReady) {
    Write-Host ""
    Write-Host "Running setup in WSL..." -ForegroundColor Yellow

    # Use bash -c to run commands in WSL (per Microsoft docs)
    wsl bash -c "cd '$wslPath' && ./go.sh"
} else {
    Write-Host ""
    Write-Warn "WSL (Windows Subsystem for Linux) is required."
    Write-Host ""
    Write-Host "  1. Install WSL:  wsl --install" -ForegroundColor White
    Write-Host "  2. Restart your computer" -ForegroundColor White
    Write-Host "  3. Open Ubuntu and run:" -ForegroundColor White
    Write-Host "     cd $wslPath && ./go.sh" -ForegroundColor Yellow
    Write-Host ""
}
