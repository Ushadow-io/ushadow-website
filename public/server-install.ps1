# =============================================================================
# Ushadow Server Install Script (Windows)
# =============================================================================
# This script sets up a Ushadow server on Windows by:
#   - Installing Git
#   - Installing Python
#   - Installing Docker Desktop
#   - Cloning the Ushadow repository
#
# Tailscale is configured later via the setup wizard.
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

# Step 2: Install Python
Write-Step 2 5 "Checking Python installation..."

if (Get-Command python -ErrorAction SilentlyContinue) {
    $pyVersion = python --version 2>$null
    Write-Ok "Python already installed ($pyVersion)"
} else {
    Write-Host "  Installing Python..." -ForegroundColor Yellow
    winget install -e --id Python.Python.3.12 --accept-source-agreements --accept-package-agreements | Out-Null

    # Refresh PATH
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

    if (Get-Command python -ErrorAction SilentlyContinue) {
        Write-Ok "Python installed"
    } else {
        Write-Warn "Python installed but not in PATH. Please restart PowerShell after setup."
    }
}

# Step 3: Install Docker Desktop
Write-Step 3 5 "Checking Docker installation..."

if (Get-Command docker -ErrorAction SilentlyContinue) {
    $dockerVersion = docker --version 2>$null
    Write-Ok "Docker already installed ($dockerVersion)"
} else {
    Write-Host "  Installing Docker Desktop..." -ForegroundColor Yellow
    winget install -e --id Docker.DockerDesktop --accept-source-agreements --accept-package-agreements | Out-Null
    Write-Ok "Docker Desktop installed"
    Write-Warn "You'll need to start Docker Desktop and complete initial setup."
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

Write-Host "Starting setup wizard..." -ForegroundColor White
Write-Host ""

Set-Location $installDir

# Try to run go.sh with bash (Git Bash)
$bashPath = "$env:ProgramFiles\Git\bin\bash.exe"
if (-not (Test-Path $bashPath)) {
    $bashPath = "${env:ProgramFiles(x86)}\Git\bin\bash.exe"
}

if (Test-Path $bashPath) {
    Write-Host "Running setup with Git Bash..." -ForegroundColor Yellow
    & $bashPath -c "./go.sh"
} else {
    Write-Warn "Git Bash not found. Please run manually:"
    Write-Host "  cd $installDir" -ForegroundColor Yellow
    Write-Host "  bash go.sh" -ForegroundColor Yellow
}
