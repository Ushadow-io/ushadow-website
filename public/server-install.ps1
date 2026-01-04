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
    Write-Host "  Installing Git (this may take a few minutes)..." -ForegroundColor Yellow
    winget install -e --id Git.Git --accept-source-agreements --accept-package-agreements

    Refresh-Path

    if (Get-Command git -ErrorAction SilentlyContinue) {
        Write-Ok "Git installed"
    } else {
        Write-Warn "Git installed but not in PATH. Please restart PowerShell after setup."
    }
}

# Step 2: Install Python
Write-Step 2 5 "Checking Python installation..."

# Check if real Python is installed (not Windows Store alias)
$pythonInstalled = $false
$pythonCmd = $null

# Check common Python locations first
$pythonPaths = @(
    "$env:LOCALAPPDATA\Programs\Python\Python312\python.exe",
    "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe",
    "$env:LOCALAPPDATA\Programs\Python\Python310\python.exe",
    "$env:ProgramFiles\Python312\python.exe",
    "$env:ProgramFiles\Python311\python.exe"
)

foreach ($pp in $pythonPaths) {
    if (Test-Path $pp) {
        $pythonCmd = $pp
        break
    }
}

if ($pythonCmd) {
    $pyVersion = & $pythonCmd --version 2>&1
    $pythonInstalled = $true
    Write-Ok "Python already installed ($pyVersion)"
} else {
    # Try command in PATH
    try {
        $pyVersion = python --version 2>&1
        if ($LASTEXITCODE -eq 0 -and $pyVersion -match "Python \d") {
            $pythonInstalled = $true
            Write-Ok "Python already installed ($pyVersion)"
        }
    } catch {}
}

if (-not $pythonInstalled) {
    Write-Host "  Installing Python (this may take a few minutes)..." -ForegroundColor Yellow
    winget install -e --id Python.Python.3.12 --accept-source-agreements --accept-package-agreements

    Refresh-Path

    # Check if Python is now available
    $pythonCmd = "$env:LOCALAPPDATA\Programs\Python\Python312\python.exe"
    if (Test-Path $pythonCmd) {
        $pyVersion = & $pythonCmd --version 2>&1
        Write-Ok "Python installed ($pyVersion)"
    } else {
        Write-Warn "Python installed but may need a restart to be available."
    }
}

# Step 3: Install Docker Desktop
Write-Step 3 5 "Checking Docker installation..."

if (Get-Command docker -ErrorAction SilentlyContinue) {
    $dockerVersion = docker --version 2>$null
    Write-Ok "Docker already installed ($dockerVersion)"
} else {
    Write-Host "  Installing Docker Desktop (this may take several minutes)..." -ForegroundColor Yellow
    winget install -e --id Docker.DockerDesktop --accept-source-agreements --accept-package-agreements
    Write-Ok "Docker Desktop installed"
    Write-Warn "You'll need to start Docker Desktop and complete initial setup."
}

# Step 4: Clone repository
Write-Step 4 5 "Setting up Ushadow repository..."

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
        git clone $repoUrl $installDir
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

    # Build PATH with Python location for Git Bash
    $pythonDir = "$env:LOCALAPPDATA\Programs\Python\Python312"
    $pythonScripts = "$env:LOCALAPPDATA\Programs\Python\Python312\Scripts"
    $gitBin = "$env:ProgramFiles\Git\bin"

    # Convert Windows paths to Unix-style for Git Bash
    $unixPythonDir = $pythonDir -replace '\\','/' -replace '^([A-Za-z]):','/$1'
    $unixPythonScripts = $pythonScripts -replace '\\','/' -replace '^([A-Za-z]):','/$1'

    # Run with PATH prepended
    $env:PATH = "$pythonDir;$pythonScripts;$env:PATH"
    & $bashPath -c "export PATH='$unixPythonDir:$unixPythonScripts:$PATH'; ./go.sh"
} else {
    Write-Warn "Git Bash not found. Please run manually:"
    Write-Host "  cd $installDir" -ForegroundColor Yellow
    Write-Host "  bash go.sh" -ForegroundColor Yellow
}
