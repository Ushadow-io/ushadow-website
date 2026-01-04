import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Ushadow',
  description: 'Terms of service for Ushadow, the AI orchestration platform.',
};

export default function Terms() {
  return (
    <div className="bg-surface-900 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary">Terms of Service</h1>
          <p className="mt-4 text-text-muted">Last updated: January 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Agreement to Terms</h2>
            <p className="text-text-secondary">
              By accessing or using Ushadow&apos;s website and software, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">License</h2>
            <p className="text-text-secondary">
              Ushadow is open source software licensed under the Apache License 2.0. You may use,
              modify, and distribute the software in accordance with the license terms. The full
              license text is available in our{' '}
              <a
                href="https://github.com/Ushadow-io/Ushadow/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:underline"
              >
                GitHub repository
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Use of Services</h2>
            <div className="space-y-4 text-text-secondary">
              <p>You agree to use Ushadow only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the service in any way that violates applicable laws or regulations</li>
                <li>Attempt to interfere with or disrupt the service or servers</li>
                <li>Use the service to transmit malware or malicious code</li>
                <li>Impersonate any person or entity</li>
                <li>Use the service to infringe on the rights of others</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Self-Hosted Software</h2>
            <p className="text-text-secondary">
              Ushadow is designed to be self-hosted on your own infrastructure. You are responsible
              for the security, maintenance, and compliance of your deployment. We do not have access
              to your self-hosted instances or the data processed by them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Third-Party Services</h2>
            <p className="text-text-secondary">
              Ushadow integrates with third-party services (such as Chronicle, Omi, and various AI providers).
              Your use of these services is subject to their respective terms of service and privacy policies.
              We are not responsible for third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Disclaimer of Warranties</h2>
            <p className="text-text-secondary">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM,
              DAMAGES OR OTHER LIABILITY ARISING FROM THE USE OF THE SOFTWARE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Limitation of Liability</h2>
            <p className="text-text-secondary">
              To the maximum extent permitted by law, Ushadow shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or
              revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill,
              or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Indemnification</h2>
            <p className="text-text-secondary">
              You agree to indemnify and hold harmless Ushadow and its contributors from any claims,
              damages, losses, and expenses arising from your use of the software or violation of
              these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Changes to Terms</h2>
            <p className="text-text-secondary">
              We may modify these Terms at any time. We will notify you of significant changes by
              posting the new Terms on this page. Your continued use of the service after changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Governing Law</h2>
            <p className="text-text-secondary">
              These Terms shall be governed by and construed in accordance with applicable laws,
              without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Contact</h2>
            <p className="text-text-secondary">
              Questions about these Terms? Contact us at{' '}
              <a href="mailto:legal@ushadow.io" className="text-primary-400 hover:underline">
                legal@ushadow.io
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-500/30">
          <Link href="/" className="text-primary-400 hover:underline text-sm">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
