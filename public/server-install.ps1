# =============================================================================
# Ushadow Server Install Script (Windows)
# =============================================================================
# This script sets up a Ushadow server on Windows by:
#   - Installing Docker Desktop
#   - Setting up WSL (Windows Subsystem for Linux)
#   - Cloning and running setup in WSL
#
# Tailscale is configured later via the setup wizard.
#
# Usage:
#   iex (irm https://ushadow.io/server-install.ps1)
# =============================================================================

$Version = "1.0.2"

$ErrorActionPreference = "Continue"

function Write-Step { param($num, $total, $msg) Write-Host "`n[$num/$total] $msg" -ForegroundColor Cyan }
function Write-Ok { param($msg) Write-Host "  [OK] $msg" -ForegroundColor Green }
function Write-Warn { param($msg) Write-Host "  [WARN] $msg" -ForegroundColor Yellow }
function Write-Err { param($msg) Write-Host "  [ERROR] $msg" -ForegroundColor Red }

$repoUrl = "https://github.com/Ushadow-io/Ushadow.git"
$wslInstallDir = "~/ushadow"

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

# Step 1: Install Docker Desktop
Write-Step 1 2 "Checking Docker installation..."

if (Get-Command docker -ErrorAction SilentlyContinue) {
    $dockerVersion = docker --version 2>$null
    Write-Ok "Docker already installed ($dockerVersion)"
} else {
    Write-Host "  Installing Docker Desktop (this may take several minutes)..." -ForegroundColor Yellow
    winget install -e --id Docker.DockerDesktop --accept-source-agreements --accept-package-agreements
    Write-Ok "Docker Desktop installed"
    Write-Warn "You'll need to start Docker Desktop and complete initial setup."
}

# Step 2: Check WSL and run setup
Write-Step 2 2 "Setting up WSL..."

# Check for WSL with a distro installed
$wslReady = $false
try {
    $distros = wsl -l -q 2>&1
    if ($LASTEXITCODE -eq 0 -and $distros -and $distros.Trim().Length -gt 0) {
        # Filter out empty lines and check if we have real distros
        $distroList = $distros -split "`n" | Where-Object { $_.Trim() -ne "" }
        if ($distroList.Count -gt 0) {
            $wslReady = $true
            Write-Ok "WSL is ready with distro(s): $($distroList -join ', ')"
        }
    }
} catch {}

if ($wslReady) {
    Write-Host ""
    Write-Host "  Cloning and running setup in WSL..." -ForegroundColor Yellow
    Write-Host ""

    # Install git if needed, then clone (or update) and run setup in WSL
    wsl bash -c "
        # Ensure git is installed
        if ! command -v git &> /dev/null; then
            echo 'Installing git...'
            sudo apt-get update && sudo apt-get install -y git
        fi

        if [ -d ~/ushadow ]; then
            echo 'Updating existing installation...'
            cd ~/ushadow && git pull
        else
            echo 'Cloning Ushadow...'
            git clone $repoUrl ~/ushadow
        fi
        cd ~/ushadow && ./go.sh
    "
} else {
    Write-Host ""
    Write-Warn "WSL (Windows Subsystem for Linux) is not set up."
    Write-Host ""
    Write-Host "  To install WSL with Ubuntu:" -ForegroundColor White
    Write-Host ""
    Write-Host "    1. Run:  wsl --install" -ForegroundColor Yellow
    Write-Host "    2. Restart your computer" -ForegroundColor White
    Write-Host "    3. Open Ubuntu from Start Menu (create username/password)" -ForegroundColor White
    Write-Host "    4. In Ubuntu, run:" -ForegroundColor White
    Write-Host ""
    Write-Host "       sudo apt install -y git && git clone $repoUrl ~/ushadow && cd ~/ushadow && ./go.sh" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "`n==========================================" -ForegroundColor Green
Write-Host "  Done!" -ForegroundColor Green
Write-Host "==========================================`n" -ForegroundColor Green
