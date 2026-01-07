'use client';

import { useState, useEffect } from 'react';
import CopyButton from './CopyButton';

type OS = 'windows' | 'mac' | 'linux' | 'unknown';
type InstallMethod = 'installer' | 'script';

interface InstructionStep {
  text: string;
  icon?: boolean;
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

const DownloadIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const RELEASES_URL = 'https://github.com/Ushadow-io/Ushadow/releases/latest';

const installerConfig: Record<OS, { label: string; fileName: string; instructions: InstructionStep[] }> = {
  windows: {
    label: 'Windows Installer (.msi)',
    fileName: 'Ushadow_x64_en-US.msi',
    instructions: [
      { text: 'Download and run the .msi file' },
      { text: 'If SmartScreen appears, click "More info"' },
      { text: 'Then click "Run anyway"' },
      { text: 'Follow the installation wizard' },
    ],
  },
  mac: {
    label: 'macOS Installer (.dmg)',
    fileName: 'Ushadow.dmg',
    instructions: [
      { text: 'Download and open the .dmg file' },
      { text: 'Drag Ushadow to Applications' },
      { text: 'Right-click the app, select "Open"' },
      { text: 'Click "Open" in the dialog to bypass Gatekeeper' },
    ],
  },
  linux: {
    label: 'Linux (.deb / .AppImage)',
    fileName: 'Ushadow.deb',
    instructions: [
      { text: 'Download the .deb or .AppImage' },
      { text: 'For .deb: sudo dpkg -i Ushadow.deb' },
      { text: 'For .AppImage: chmod +x && run' },
    ],
  },
  unknown: {
    label: 'Download Installer',
    fileName: '',
    instructions: [
      { text: 'Download the installer for your OS' },
      { text: 'Follow the installation prompts' },
    ],
  },
};

const scriptConfig: Record<OS, { label: string; command: string; instructions: InstructionStep[] }> = {
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

export default function QuickInstall() {
  const [os, setOS] = useState<OS>('unknown');
  const [method, setMethod] = useState<InstallMethod>('installer');

  useEffect(() => {
    setOS(detectOS());
  }, []);

  const installer = installerConfig[os];
  const script = scriptConfig[os];
  const currentInstructions = method === 'installer' ? installer.instructions : script.instructions;

  return (
    <div className="mt-12">
      <p className="text-sm text-text-muted mb-3">Quick install</p>

      <div className="inline-flex items-stretch gap-0">
        {/* Method toggle - vertical */}
        <div className="flex flex-col rounded-l-lg bg-surface-800 border border-r-0 border-surface-500/50">
          <button
            onClick={() => setMethod('installer')}
            className={`px-4 py-3 text-sm transition-colors rounded-tl-lg ${
              method === 'installer'
                ? 'bg-primary-500 text-white'
                : 'text-text-muted hover:text-text-secondary hover:bg-surface-700'
            }`}
          >
            Installer
          </button>
          <button
            onClick={() => setMethod('script')}
            className={`px-4 py-3 text-sm transition-colors rounded-bl-lg ${
              method === 'script'
                ? 'bg-primary-500 text-white'
                : 'text-text-muted hover:text-text-secondary hover:bg-surface-700'
            }`}
          >
            Script
          </button>
        </div>

        {/* Install content - fixed width */}
        <div className="relative">
          <div className="w-[420px] h-full bg-surface-800 rounded-r-lg px-4 py-3 border border-surface-500/50 flex items-center">
            {method === 'installer' ? (
              /* Installer download button */
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-xs text-text-muted">{installer.label}</span>
                  <span className="text-sm text-primary-400 font-medium">
                    Download from GitHub Releases
                  </span>
                </div>
                <div className="flex-shrink-0 p-2 rounded-md bg-primary-500 text-white">
                  <DownloadIcon />
                </div>
              </a>
            ) : (
              /* Script command */
              <div className="flex items-center gap-3 w-full">
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-xs text-text-muted">{script.label}</span>
                  <code className="text-sm text-primary-400 font-mono">
                    {script.command}
                  </code>
                </div>
                <CopyButton text={script.command} />
              </div>
            )}
          </div>

          {/* Instructions bubble - positioned to the right */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-purple-950/40 rounded-lg px-3 py-2 w-[280px] border border-purple-500/30">
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-950/40 border-l border-b border-purple-500/30 rotate-45" />
            <ol className="text-xs text-text-secondary space-y-1">
              {currentInstructions.map((step, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-purple-400 font-medium">{i + 1}.</span>
                  <span>{step.text}{step.icon && <> <CopyIcon /></>}</span>
                </li>
              ))}
            </ol>
            {method === 'installer' && (
              <a
                href="/docs/unsigned-apps"
                className="block mt-2 pt-2 border-t border-purple-500/20 text-xs text-purple-400 hover:text-purple-300 transition-colors"
              >
                Having trouble opening the app?
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
