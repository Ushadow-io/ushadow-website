'use client';

import { useState, useEffect } from 'react';
import CopyButton from './CopyButton';

type OS = 'windows' | 'mac' | 'linux' | 'unknown';

interface Dependency {
  name: string;
  url: string;
  note?: string;
}

function detectOS(): OS {
  if (typeof window === 'undefined') return 'unknown';

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('mac')) return 'mac';
  if (userAgent.includes('linux')) return 'linux';

  return 'unknown';
}

const CopyIcon = () => (
  <svg className="inline h-3 w-3 align-baseline" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
  </svg>
);

const installCommands = {
  windows: {
    label: 'PowerShell (Run as Admin)',
    command: 'iex (irm https://ushadow.io/server-install.ps1)',
    instructions: [
      { text: 'Press copy button', icon: true },
      { text: 'Press Windows key' },
      { text: 'Type "PowerShell"' },
      { text: 'Right-click, select "Run as administrator"' },
      { text: 'Paste with Ctrl+V' },
    ],
  },
  mac: {
    label: 'Terminal',
    command: 'curl -fsSL https://ushadow.io/server-install.sh | bash',
    instructions: [
      { text: 'Press copy button', icon: true },
      { text: 'Press ⌘+Space' },
      { text: 'Type "Terminal", press Enter' },
      { text: 'Paste with ⌘+V' },
    ],
  },
  linux: {
    label: 'Terminal',
    command: 'curl -fsSL https://ushadow.io/server-install.sh | bash',
    instructions: [
      { text: 'Press copy button', icon: true },
      { text: 'Open terminal (Ctrl+Alt+T)' },
      { text: 'Paste with Ctrl+Shift+V' },
    ],
  },
  unknown: {
    label: 'Terminal',
    command: 'curl -fsSL https://ushadow.io/server-install.sh | bash',
    instructions: [
      { text: 'Press copy button', icon: true },
      { text: 'Open your terminal' },
      { text: 'Paste the command' },
    ],
  },
};

const dependencies: Record<OS, Dependency[]> = {
  windows: [
    { name: 'Docker Desktop', url: 'https://docs.docker.com/desktop/install/windows-install/', note: 'installed automatically' },
    { name: 'Git', url: 'https://git-scm.com/download/win', note: 'installed automatically' },
    { name: 'Python', url: 'https://python.org/downloads/', note: 'installed automatically' },
  ],
  mac: [
    { name: 'Git', url: 'https://git-scm.com/download/mac', note: 'installed automatically' },
    { name: 'Docker Desktop', url: 'https://docs.docker.com/desktop/install/mac-install/', note: 'installed automatically' },
    { name: 'Python', url: 'https://python.org/downloads/', note: 'installed automatically' },
  ],
  linux: [
    { name: 'Git', url: 'https://git-scm.com/download/linux', note: 'installed automatically' },
    { name: 'Docker', url: 'https://docs.docker.com/engine/install/', note: 'installed automatically' },
    { name: 'Python', url: 'https://python.org/downloads/', note: 'installed automatically' },
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
        <div className="relative">
          <div className="inline-flex items-center gap-3 bg-surface-800 rounded-lg px-4 py-3 border border-surface-500/50">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-text-muted">{currentInstall.label}</span>
              <code className="text-sm text-primary-400 font-mono">
                {currentInstall.command}
              </code>
            </div>
            <CopyButton text={currentInstall.command} />
          </div>

          {/* Instructions bubble - positioned to the right */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-purple-950/40 rounded-lg px-3 py-2 w-[280px] border border-purple-500/30">
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-950/40 border-l border-b border-purple-500/30 rotate-45" />
            <ol className="text-xs text-text-secondary space-y-1">
              {currentInstall.instructions.map((step, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-purple-400 font-medium">{i + 1}.</span>
                  <span>{step.text}{'icon' in step && step.icon && <> <CopyIcon /></>}</span>
                </li>
              ))}
            </ol>
          </div>
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
