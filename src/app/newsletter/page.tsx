import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter - Ushadow',
  description: 'Subscribe to the Ushadow newsletter for updates, tips, and announcements.',
};

export default function Newsletter() {
  return (
    <div className="bg-surface-900 min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Stay in the Loop
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            Get updates on new features, releases, and tips for getting the most out of Ushadow.
            No spam, unsubscribe anytime.
          </p>
        </div>

        <div className="rounded-2xl bg-surface-800 border border-surface-500/30 p-8">
          <form
            action="https://buttondown.com/api/emails/embed-subscribe/thestumonkey"
            method="post"
            target="popupwindow"
            className="space-y-6"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg bg-surface-700 border border-surface-500/50 px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Name <span className="text-text-muted">(optional)</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="w-full rounded-lg bg-surface-700 border border-surface-500/50 px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              />
            </div>

            <input type="hidden" name="embed" value="1" />

            <button
              type="submit"
              className="w-full rounded-lg px-6 py-3 text-base font-semibold text-surface-900 transition-all hover:opacity-90"
              style={{
                backgroundImage: 'linear-gradient(135deg, #4ade80 0%, #a855f7 100%)',
              }}
            >
              Subscribe
            </button>

            <p className="text-xs text-text-muted text-center">
              By subscribing, you agree to our{' '}
              <Link href="/privacy" className="text-primary-400 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-lg font-semibold text-text-primary mb-4">What to expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="p-4 rounded-lg bg-surface-800/50">
              <div className="text-primary-400 font-medium mb-1">Monthly Updates</div>
              <div className="text-text-muted">New features and improvements</div>
            </div>
            <div className="p-4 rounded-lg bg-surface-800/50">
              <div className="text-accent-400 font-medium mb-1">Tips & Guides</div>
              <div className="text-text-muted">Get more from Ushadow</div>
            </div>
            <div className="p-4 rounded-lg bg-surface-800/50">
              <div className="text-primary-400 font-medium mb-1">Early Access</div>
              <div className="text-text-muted">Be first to try new add-ons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
