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

export default function QuickInstall() {
  const [os, setOS] = useState<OS>('unknown');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setOS(detectOS());
  }, []);

  const currentInstall = installCommands[os];

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

        {/* Show other OS options */}
        {os === 'windows' && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            {showAll ? 'Hide' : 'Show'} Mac/Linux command
          </button>
        )}
        {os !== 'windows' && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            {showAll ? 'Hide' : 'Show'} Windows command
          </button>
        )}

        {showAll && (
          <div className="inline-flex items-center gap-3 bg-surface-800/50 rounded-lg px-4 py-3 border border-surface-500/30">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-text-muted">
                {os === 'windows' ? 'Mac/Linux Terminal' : 'Windows PowerShell'}
              </span>
              <code className="text-sm text-text-secondary font-mono">
                {os === 'windows' ? installCommands.mac.command : installCommands.windows.command}
              </code>
            </div>
            <CopyButton text={os === 'windows' ? installCommands.mac.command : installCommands.windows.command} />
          </div>
        )}
      </div>
    </div>
  );
}
