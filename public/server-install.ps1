# =============================================================================
# Ushadow Server Install Script (Windows)
# =============================================================================
# This script sets up a Ushadow server on Windows by:
#   - Installing Git
#   - Cloning the Ushadow repository
#   - Installing Docker Desktop
#   - Running the setup script
#
# Usage:
#   iex (irm https://ushadow.io/server-install.ps1)
# =============================================================================

$ErrorActionPreference = "Continue"

function Write-Step { param($num, $total, $msg) Write-Host "`n[$num/$total] $msg" -ForegroundColor Cyan }
function Write-Ok { param($msg) Write-Host "  [OK] $msg" -ForegroundColor Green }
function Write-Warn { param($msg) Write-Host "  [WARN] $msg" -ForegroundColor Yellow }
function Write-Err { param($msg) Write-Host "  [ERROR] $msg" -ForegroundColor Red }

$repoUrl = "https://github.com/Ushadow-io/Ushadow.git"
$installDir = "$env:USERPROFILE\ushadow"

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "  Ushadow Server Install (Windows)" -ForegroundColor Cyan
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
Write-Step 1 5 "Checking Git installation..."

if (Get-Command git -ErrorAction SilentlyContinue) {
    $gitVersion = git --version 2>$null
    Write-Ok "Git already installed ($gitVersion)"
} else {
    Write-Host "  Installing Git..." -ForegroundColor Yellow
    winget install -e --id Git.Git --accept-source-agreements --accept-package-agreements | Out-Null

    # Refresh PATH
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

    if (Get-Command git -ErrorAction SilentlyContinue) {
        Write-Ok "Git installed"
    } else {
        Write-Warn "Git installed but not in PATH. Please restart PowerShell after setup."
    }
}

# Step 2: Install Docker Desktop
Write-Step 2 5 "Checking Docker installation..."

if (Get-Command docker -ErrorAction SilentlyContinue) {
    $dockerVersion = docker --version 2>$null
    Write-Ok "Docker already installed ($dockerVersion)"
} else {
    Write-Host "  Installing Docker Desktop..." -ForegroundColor Yellow
    winget install -e --id Docker.DockerDesktop --accept-source-agreements --accept-package-agreements | Out-Null
    Write-Ok "Docker Desktop installed"
    Write-Warn "You'll need to start Docker Desktop and complete initial setup."
}

# Step 3: Install Tailscale
Write-Step 3 5 "Checking Tailscale installation..."

$tsPath = "$env:ProgramFiles\Tailscale\tailscale.exe"
if (-not (Test-Path $tsPath)) {
    $tsInPath = Get-Command tailscale -ErrorAction SilentlyContinue
    if ($tsInPath) { $tsPath = $tsInPath.Source }
}

if (Test-Path $tsPath) {
    try {
        $tsVersion = & $tsPath version 2>$null | Select-Object -First 1
        Write-Ok "Tailscale already installed ($tsVersion)"
    } catch {
        Write-Ok "Tailscale already installed"
    }
} else {
    Write-Host "  Installing Tailscale..." -ForegroundColor Yellow
    winget install -e --id Tailscale.Tailscale --accept-source-agreements --accept-package-agreements | Out-Null
    Write-Ok "Tailscale installed"
}

# Step 4: Clone repository
Write-Step 4 5 "Setting up Ushadow repository..."

if (Test-Path $installDir) {
    Write-Host "  Directory exists, pulling latest..." -ForegroundColor Yellow
    Push-Location $installDir
    try {
        git pull 2>&1 | Out-Null
        Write-Ok "Repository updated"
    } catch {
        Write-Warn "Could not update repository"
    }
    Pop-Location
} else {
    Write-Host "  Cloning repository to $installDir..." -ForegroundColor Yellow
    try {
        git clone $repoUrl $installDir 2>&1 | Out-Null
        Write-Ok "Repository cloned"
    } catch {
        Write-Err "Failed to clone repository"
        exit 1
    }
}

# Step 5: Setup instructions
Write-Step 5 5 "Setup complete!"

Write-Host "`n==========================================" -ForegroundColor Green
Write-Host "  Installation Complete!" -ForegroundColor Green
Write-Host "==========================================`n" -ForegroundColor Green

Write-Host "Next steps:" -ForegroundColor White
Write-Host ""
Write-Host "  1. Start Docker Desktop and wait for it to be ready" -ForegroundColor White
Write-Host ""
Write-Host "  2. Connect to Tailscale (if not already connected)" -ForegroundColor White
Write-Host ""
Write-Host "  3. Run the setup script:" -ForegroundColor White
Write-Host "     cd $installDir" -ForegroundColor Yellow
Write-Host "     ./go.sh" -ForegroundColor Yellow
Write-Host ""
Write-Host "  Note: If go.sh doesn't work on Windows, use:" -ForegroundColor Gray
Write-Host "     bash go.sh  (if Git Bash is available)" -ForegroundColor Yellow
Write-Host "     or run in WSL" -ForegroundColor Gray
Write-Host ""
