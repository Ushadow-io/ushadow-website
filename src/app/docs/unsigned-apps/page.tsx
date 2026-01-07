import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Opening Unsigned Apps - Ushadow',
  description: 'How to open Ushadow on macOS and Windows when security warnings appear.',
};

export default function UnsignedAppsPage() {
  return (
    <div className="bg-surface-900">
      {/* Hero */}
      <div className="relative py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-6"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Docs
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Opening Unsigned Apps
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Ushadow is not yet signed with Apple or Microsoft certificates. Here&apos;s how to open it safely.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        {/* Why this happens */}
        <section className="mb-16">
          <div className="rounded-xl bg-surface-800 border border-amber-500/30 p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Why am I seeing a security warning?</h3>
                <p className="text-text-secondary text-sm">
                  macOS and Windows show warnings for apps that aren&apos;t signed with official developer certificates.
                  Code signing costs money and requires verification processes we haven&apos;t completed yet.
                  The app is safe to use &mdash; you can verify by checking our{' '}
                  <a
                    href="https://github.com/Ushadow-io/Ushadow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 underline"
                  >
                    open source code on GitHub
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* macOS Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-surface-800 border border-surface-500/30 flex items-center justify-center">
              <svg className="h-6 w-6 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-text-primary">macOS</h2>
          </div>

          <div className="space-y-8">
            {/* Method 1 */}
            <div className="rounded-xl bg-surface-800 border border-surface-500/30 p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-500 text-white text-sm flex items-center justify-center">1</span>
                Right-click method (try this first)
              </h3>
              <ol className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">1.</span>
                  <span>Open <strong className="text-text-primary">Finder</strong> and navigate to the <strong className="text-text-primary">Applications</strong> folder</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">2.</span>
                  <span><strong className="text-text-primary">Right-click</strong> (or Control-click) on <strong className="text-text-primary">Ushadow.app</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">3.</span>
                  <span>Select <strong className="text-text-primary">&quot;Open&quot;</strong> from the context menu</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">4.</span>
                  <span>In the dialog that appears, click <strong className="text-text-primary">&quot;Open&quot;</strong> again to confirm</span>
                </li>
              </ol>
              <p className="mt-4 text-sm text-text-muted">
                This only needs to be done once. After that, the app will open normally.
              </p>
            </div>

            {/* Method 2 */}
            <div className="rounded-xl bg-surface-800 border border-surface-500/30 p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-surface-600 text-text-secondary text-sm flex items-center justify-center">2</span>
                System Settings method (if right-click doesn&apos;t work)
              </h3>
              <ol className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">1.</span>
                  <span>Try to open Ushadow normally (double-click). It will be blocked.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">2.</span>
                  <span>Open <strong className="text-text-primary">System Settings</strong> (Apple menu → System Settings)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">3.</span>
                  <span>Go to <strong className="text-text-primary">Privacy &amp; Security</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">4.</span>
                  <span>Scroll down to the <strong className="text-text-primary">Security</strong> section</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">5.</span>
                  <span>You&apos;ll see a message about Ushadow being blocked. Click <strong className="text-text-primary">&quot;Open Anyway&quot;</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">6.</span>
                  <span>Enter your password if prompted, then click <strong className="text-text-primary">&quot;Open&quot;</strong> in the final dialog</span>
                </li>
              </ol>
            </div>

            {/* Terminal method */}
            <div className="rounded-xl bg-surface-800 border border-surface-500/30 p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-surface-600 text-text-secondary text-sm flex items-center justify-center">3</span>
                Terminal method (advanced)
              </h3>
              <p className="text-text-secondary mb-4">Remove the quarantine attribute using Terminal:</p>
              <div className="rounded-lg bg-surface-900 border border-surface-500/50 p-4">
                <pre className="text-sm text-primary-400 font-mono">xattr -d com.apple.quarantine /Applications/Ushadow.app</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Windows Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-surface-800 border border-surface-500/30 flex items-center justify-center">
              <svg className="h-6 w-6 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 12V6.75l6-1.32v6.48L3 12zm6.5-6.5l8.5-1.88v8.25l-8.5.12V5.5zm8.5 7.15V21l-8.5-1.17v-6.3l8.5.12zm-9 .15l-6 .09v-5.5l6-1.32v6.73z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Windows</h2>
          </div>

          <div className="space-y-8">
            {/* SmartScreen */}
            <div className="rounded-xl bg-surface-800 border border-surface-500/30 p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-500 text-white text-sm flex items-center justify-center">1</span>
                Windows SmartScreen bypass
              </h3>
              <p className="text-text-secondary mb-4">
                When you run the installer, Windows SmartScreen may show a blue warning screen.
              </p>
              <ol className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">1.</span>
                  <span>On the &quot;Windows protected your PC&quot; screen, click <strong className="text-text-primary">&quot;More info&quot;</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">2.</span>
                  <span>A <strong className="text-text-primary">&quot;Run anyway&quot;</strong> button will appear. Click it.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">3.</span>
                  <span>The installer will now run normally</span>
                </li>
              </ol>
            </div>

            {/* Windows Security Settings */}
            <div className="rounded-xl bg-surface-800 border border-surface-500/30 p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-surface-600 text-text-secondary text-sm flex items-center justify-center">2</span>
                Windows Security settings (if needed)
              </h3>
              <p className="text-text-secondary mb-4">
                If the app is still blocked, you may need to allow it in Windows Security:
              </p>
              <ol className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">1.</span>
                  <span>Open <strong className="text-text-primary">Windows Security</strong> (search for it in the Start menu)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">2.</span>
                  <span>Click <strong className="text-text-primary">&quot;App &amp; browser control&quot;</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">3.</span>
                  <span>Under &quot;Reputation-based protection&quot;, click <strong className="text-text-primary">&quot;Reputation-based protection settings&quot;</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-400 font-mono text-sm">4.</span>
                  <span>Scroll down to find recent blocks and allow Ushadow</span>
                </li>
              </ol>
            </div>

            {/* PowerShell method */}
            <div className="rounded-xl bg-surface-800 border border-surface-500/30 p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-surface-600 text-text-secondary text-sm flex items-center justify-center">3</span>
                PowerShell method (advanced)
              </h3>
              <p className="text-text-secondary mb-4">Unblock the file using PowerShell (Run as Administrator):</p>
              <div className="rounded-lg bg-surface-900 border border-surface-500/50 p-4">
                <pre className="text-sm text-primary-400 font-mono">Unblock-File -Path &quot;$env:USERPROFILE\Downloads\Ushadow_x64_en-US.msi&quot;</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Still having trouble */}
        <section>
          <div className="rounded-xl bg-surface-800 border border-primary-500/30 p-6">
            <h3 className="font-semibold text-text-primary mb-2">Still having trouble?</h3>
            <p className="text-text-secondary text-sm mb-4">
              If you&apos;re still unable to open Ushadow, try using the script installation method instead,
              or reach out for help.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
              >
                Try Script Install
              </Link>
              <a
                href="https://github.com/Ushadow-io/Ushadow/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-700 text-text-primary text-sm font-medium hover:bg-surface-600 transition-colors"
              >
                Get Help
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
