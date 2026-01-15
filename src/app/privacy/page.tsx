import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Ushadow',
  description: 'Privacy policy for Ushadow, the AI orchestration platform.',
};

export default function Privacy() {
  return (
    <div className="bg-surface-900 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary">Privacy Policy</h1>
          <p className="mt-4 text-text-muted">Last updated: January 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Overview</h2>
            <p className="text-text-secondary">
              Ushadow (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This policy explains how we collect, use, and protect information when you use our website
              and services.
            </p>
          </section>

          <section className="bg-primary-500/10 border border-primary-500/30 rounded-lg px-6 py-5">
            <h2 className="text-xl font-semibold text-primary-400 mb-4">Local Data Storage - Your Privacy First</h2>
            <div className="space-y-3 text-text-secondary">
              <p className="text-text-primary font-medium">
                <strong>All data is stored locally on your device.</strong> No recordings, workflows, secrets,
                or any other data you create within Ushadow is ever transmitted to our servers or any third party.
              </p>

              <p><strong className="text-text-primary">Anonymous Install Tracking:</strong> The only data we collect
              is a single anonymous tracking request when you install Ushadow. This request includes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>A hash of your machine identifier (anonymized, non-reversible)</li>
                <li>Your operating system type and version</li>
                <li>Ushadow version installed</li>
              </ul>

              <p className="mt-3">
                <strong className="text-text-primary">No personal information is transmitted.</strong> We cannot
                identify individual users, track usage patterns, or access any of your data. This minimal tracking
                helps us understand adoption and prioritize platform support.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Website Information Collection</h2>
            <div className="space-y-4 text-text-secondary">
              <p><strong className="text-text-primary">Website Analytics:</strong> We collect anonymous usage data
              including pages visited, time spent, and general location (country level) to improve our website.</p>

              <p><strong className="text-text-primary">Newsletter:</strong> If you subscribe to our newsletter,
              we collect your email address and optionally your name. This is processed by Buttondown.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">How We Use Information</h2>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>To send newsletter updates (if subscribed)</li>
              <li>To improve our website and documentation</li>
              <li>To respond to support inquiries</li>
              <li>To detect and prevent abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Data Sharing</h2>
            <p className="text-text-secondary">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mt-2">
              <li>Service providers who assist in operating our website (hosting, analytics)</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Cookies</h2>
            <p className="text-text-secondary">
              We use minimal cookies for essential website functionality and analytics.
              You can disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Your Rights</h2>
            <p className="text-text-secondary">
              You have the right to access, correct, or delete your personal information.
              To unsubscribe from our newsletter, use the unsubscribe link in any email.
              For other requests, contact us at privacy@ushadow.io.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Data Security</h2>
            <p className="text-text-secondary">
              We implement appropriate security measures to protect your information.
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Changes to This Policy</h2>
            <p className="text-text-secondary">
              We may update this policy from time to time. We will notify you of significant changes
              by posting the new policy on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">Contact</h2>
            <p className="text-text-secondary">
              Questions about this policy? Contact us at{' '}
              <a href="mailto:stu@ushadow.io" className="text-primary-400 hover:underline">
                stu@ushadow.io
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
