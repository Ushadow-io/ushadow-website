#!/bin/bash
# =============================================================================
# Ushadow UNode Bootstrap Script
# =============================================================================
# This script prepares a machine to join a Ushadow cluster by installing:
#   - Docker (container runtime)
#   - Tailscale (secure networking)
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/ushadow-io/unode-bootstrap/main/bootstrap.sh | bash
#
# After running this script, use the join command from your Ushadow dashboard
# to connect this node to your cluster.
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[OK]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Detect OS
detect_os() {
    if [ -f /etc/os-release ]; then
        . /etc/os-release
        OS=$ID
        VERSION=$VERSION_ID
    elif [ -f /etc/debian_version ]; then
        OS="debian"
    elif [ -f /etc/redhat-release ]; then
        OS="rhel"
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        OS="macos"
    else
        OS="unknown"
    fi
    echo "$OS"
}

# Check if running as root or with sudo
check_sudo() {
    if [ "$EUID" -ne 0 ]; then
        if command -v sudo &> /dev/null; then
            SUDO="sudo"
        else
            log_error "This script requires root privileges. Please run as root or install sudo."
            exit 1
        fi
    else
        SUDO=""
    fi
}

# Install Docker
install_docker() {
    log_info "Checking Docker installation..."

    if command -v docker &> /dev/null; then
        DOCKER_VERSION=$(docker --version 2>/dev/null | cut -d' ' -f3 | cut -d',' -f1)
        log_success "Docker already installed (version $DOCKER_VERSION)"
        return 0
    fi

    log_info "Installing Docker..."

    OS=$(detect_os)

    case $OS in
        ubuntu|debian|raspbian)
            # Remove old versions
            $SUDO apt-get remove -y docker docker-engine docker.io containerd runc 2>/dev/null || true

            # Install prerequisites
            $SUDO apt-get update
            $SUDO apt-get install -y ca-certificates curl gnupg lsb-release

            # Add Docker's official GPG key
            $SUDO install -m 0755 -d /etc/apt/keyrings
            curl -fsSL https://download.docker.com/linux/$OS/gpg | $SUDO gpg --dearmor -o /etc/apt/keyrings/docker.gpg
            $SUDO chmod a+r /etc/apt/keyrings/docker.gpg

            # Set up repository
            echo \
                "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/$OS \
                $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
                $SUDO tee /etc/apt/sources.list.d/docker.list > /dev/null

            # Install Docker
            $SUDO apt-get update
            $SUDO apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
            ;;

        centos|rhel|fedora|rocky|almalinux)
            # Remove old versions
            $SUDO yum remove -y docker docker-client docker-client-latest docker-common \
                docker-latest docker-latest-logrotate docker-logrotate docker-engine 2>/dev/null || true

            # Install prerequisites
            $SUDO yum install -y yum-utils

            # Add Docker repo
            $SUDO yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

            # Install Docker
            $SUDO yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
            ;;

        macos)
            if command -v brew &> /dev/null; then
                brew install --cask docker
                log_warn "Docker Desktop installed. Please start Docker Desktop manually."
            else
                log_error "Please install Docker Desktop from https://docker.com/products/docker-desktop"
                exit 1
            fi
            ;;

        *)
            log_warn "Unknown OS. Attempting generic Docker install..."
            curl -fsSL https://get.docker.com | $SUDO sh
            ;;
    esac

    # Start and enable Docker
    if [ "$OS" != "macos" ]; then
        $SUDO systemctl start docker 2>/dev/null || true
        $SUDO systemctl enable docker 2>/dev/null || true

        # Add current user to docker group
        if [ -n "$SUDO_USER" ]; then
            $SUDO usermod -aG docker "$SUDO_USER"
            log_info "Added $SUDO_USER to docker group (re-login required)"
        elif [ -n "$USER" ] && [ "$USER" != "root" ]; then
            $SUDO usermod -aG docker "$USER"
            log_info "Added $USER to docker group (re-login required)"
        fi
    fi

    log_success "Docker installed successfully"
}

# Install Tailscale
install_tailscale() {
    log_info "Checking Tailscale installation..."

    if command -v tailscale &> /dev/null; then
        TS_VERSION=$(tailscale version 2>/dev/null | head -1)
        log_success "Tailscale already installed (version $TS_VERSION)"
        return 0
    fi

    log_info "Installing Tailscale..."

    OS=$(detect_os)

    case $OS in
        macos)
            if command -v brew &> /dev/null; then
                brew install tailscale
            else
                log_error "Please install Tailscale from https://tailscale.com/download/mac"
                exit 1
            fi
            ;;

        *)
            # Use Tailscale's universal installer
            curl -fsSL https://tailscale.com/install.sh | $SUDO sh
            ;;
    esac

    log_success "Tailscale installed successfully"
}

# Start Tailscale and authenticate
setup_tailscale() {
    log_info "Setting up Tailscale..."

    OS=$(detect_os)

    if [ "$OS" != "macos" ]; then
        # Start tailscaled
        $SUDO systemctl start tailscaled 2>/dev/null || true
        $SUDO systemctl enable tailscaled 2>/dev/null || true
    fi

    # Check if already authenticated
    STATUS=$($SUDO tailscale status 2>&1 || true)

    if echo "$STATUS" | grep -q "Logged out" || echo "$STATUS" | grep -q "not logged in"; then
        log_info "Starting Tailscale authentication..."
        echo ""
        echo "=========================================="
        echo "  Tailscale Authentication Required"
        echo "=========================================="
        echo ""
        echo "A browser window will open for authentication."
        echo "If it doesn't open, follow the URL printed below."
        echo ""

        $SUDO tailscale up

        log_success "Tailscale connected!"
    else
        log_success "Tailscale already authenticated"
    fi

    # Show Tailscale IP
    TS_IP=$($SUDO tailscale ip -4 2>/dev/null || echo "unknown")
    log_info "Tailscale IP: $TS_IP"
}

# Main
main() {
    echo ""
    echo "=========================================="
    echo "  Ushadow UNode Bootstrap"
    echo "=========================================="
    echo ""

    check_sudo

    log_info "Detected OS: $(detect_os)"
    echo ""

    # Step 1: Install Docker
    echo "--- Step 1/3: Docker ---"
    install_docker
    echo ""

    # Step 2: Install Tailscale
    echo "--- Step 2/3: Tailscale ---"
    install_tailscale
    echo ""

    # Step 3: Setup Tailscale
    echo "--- Step 3/3: Connect Tailscale ---"
    setup_tailscale
    echo ""

    echo "=========================================="
    echo "  Bootstrap Complete!"
    echo "=========================================="
    echo ""
    echo "This machine is now ready to join a Ushadow cluster."
    echo ""
    echo "Next steps:"
    echo "  1. Go to your Ushadow dashboard"
    echo "  2. Navigate to Cluster > Generate Join Token"
    echo "  3. Copy the join command and run it on this machine"
    echo ""

    # Show system info
    TS_IP=$($SUDO tailscale ip -4 2>/dev/null || echo "unknown")
    HOSTNAME=$(hostname)
    echo "System Info:"
    echo "  Hostname:     $HOSTNAME"
    echo "  Tailscale IP: $TS_IP"
    echo "  Docker:       $(docker --version 2>/dev/null | cut -d' ' -f3 | cut -d',' -f1 || echo 'not running')"
    echo ""
}

main "$@"
