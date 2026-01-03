'use client';

import { useState, useEffect } from 'react';
import CopyButton from './CopyButton';

type OS = 'windows' | 'mac' | 'linux' | 'unknown';

function detectOS(): OS {
  if (typeof window === 'undefined') return 'unknown';

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('mac')) return 'mac';
  if (userAgent.includes('linux')) return 'linux';

  return 'unknown';
}

const installCommands = {
  windows: {
    label: 'PowerShell (Run as Admin)',
    command: 'iex (irm https://ushadow.io/server-install.ps1)',
  },
  mac: {
    label: 'Terminal',
    command: 'git clone https://github.com/Ushadow-io/Ushadow.git && cd Ushadow && ./go.sh',
  },
  linux: {
    label: 'Terminal',
    command: 'git clone https://github.com/Ushadow-io/Ushadow.git && cd Ushadow && ./go.sh',
  },
  unknown: {
    label: 'Terminal',
    command: 'git clone https://github.com/Ushadow-io/Ushadow.git && cd Ushadow && ./go.sh',
  },
};

const dependencies = {
  windows: [
    { name: 'Git', url: 'https://git-scm.com/download/win' },
    { name: 'Docker Desktop', url: 'https://docs.docker.com/desktop/install/windows-install/' },
    { name: 'Tailscale', url: 'https://tailscale.com/download/windows' },
  ],
  mac: [
    { name: 'Git', url: 'https://git-scm.com/download/mac', note: 'or: brew install git' },
    { name: 'Docker Desktop', url: 'https://docs.docker.com/desktop/install/mac-install/' },
    { name: 'Tailscale', url: 'https://tailscale.com/download/mac' },
  ],
  linux: [
    { name: 'Git', url: 'https://git-scm.com/download/linux', note: 'apt install git' },
    { name: 'Docker', url: 'https://docs.docker.com/engine/install/', note: 'curl -fsSL https://get.docker.com | sh' },
    { name: 'Tailscale', url: 'https://tailscale.com/download/linux', note: 'curl -fsSL https://tailscale.com/install.sh | sh' },
  ],
  unknown: [
    { name: 'Git', url: 'https://git-scm.com/downloads' },
    { name: 'Docker', url: 'https://docs.docker.com/get-docker/' },
    { name: 'Tailscale', url: 'https://tailscale.com/download' },
  ],
};

export default function QuickInstall() {
  const [os, setOS] = useState<OS>('unknown');
  const [showManual, setShowManual] = useState(false);

  useEffect(() => {
    setOS(detectOS());
  }, []);

  const currentInstall = installCommands[os];
  const currentDeps = dependencies[os];

  return (
    <div className="mt-12">
      <p className="text-sm text-text-muted mb-3">Quick install</p>

      {/* Primary install command */}
      <div className="inline-flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-3 bg-surface-800 rounded-lg px-4 py-3 border border-surface-500/50">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-text-muted">{currentInstall.label}</span>
            <code className="text-sm text-primary-400 font-mono">
              {currentInstall.command}
            </code>
          </div>
          <CopyButton text={currentInstall.command} />
        </div>

        {/* Manual install toggle */}
        <button
          onClick={() => setShowManual(!showManual)}
          className="text-xs text-text-muted hover:text-text-secondary transition-colors"
        >
          {showManual ? 'Hide' : 'Prefer manual install?'}
        </button>

        {/* Manual install dependencies */}
        {showManual && (
          <div className="bg-surface-800/50 rounded-lg px-6 py-4 border border-surface-500/30 text-left max-w-md">
            <p className="text-xs text-text-muted mb-3">Install these dependencies first:</p>
            <ul className="space-y-2">
              {currentDeps.map((dep) => (
                <li key={dep.name} className="flex items-center gap-2 text-sm">
                  <span className="text-primary-400">•</span>
                  <a
                    href={dep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 underline"
                  >
                    {dep.name}
                  </a>
                  {dep.note && (
                    <span className="text-text-muted text-xs">({dep.note})</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-xs text-text-muted mt-4 mb-2">Then clone and run:</p>
            <div className="flex items-center gap-2 bg-surface-900/50 rounded px-3 py-2">
              <code className="text-xs text-text-secondary font-mono">
                git clone https://github.com/Ushadow-io/Ushadow.git && cd Ushadow && ./go.sh
              </code>
              <CopyButton text="git clone https://github.com/Ushadow-io/Ushadow.git && cd Ushadow && ./go.sh" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
