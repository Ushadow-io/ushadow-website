import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact - Ushadow',
  description: 'Get in touch with the Ushadow team.',
};

export default function Contact() {
  return (
    <div className="bg-surface-900 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary">Contact Us</h1>
          <p className="mt-4 text-text-muted">Get in touch with the Ushadow team</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">General Inquiries</h2>
            <p className="text-text-secondary mb-4">
              For questions, feedback, or support, please reach out to us:
            </p>
            <a
              href="mailto:stu@ushadow.io"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              stu@ushadow.io
            </a>
          </section>

          <section className="pt-8 border-t border-surface-500/30">
            <h2 className="text-xl font-semibold text-text-primary mb-4">Other Ways to Connect</h2>
            <div className="space-y-4 text-text-secondary">
              <div>
                <h3 className="text-text-primary font-medium mb-2">GitHub Issues</h3>
                <p className="mb-2">
                  Report bugs, request features, or contribute to the project:
                </p>
                <a
                  href="https://github.com/ushadow-platform/ushadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline"
                >
                  github.com/ushadow-platform/ushadow
                </a>
              </div>

              <div>
                <h3 className="text-text-primary font-medium mb-2">GitHub Discussions</h3>
                <p className="mb-2">
                  Join the community discussion, ask questions, or share ideas:
                </p>
                <a
                  href="https://github.com/ushadow-platform/ushadow/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline"
                >
                  github.com/ushadow-platform/ushadow/discussions
                </a>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-surface-500/30">
            <h2 className="text-xl font-semibold text-text-primary mb-4">Stay Updated</h2>
            <p className="text-text-secondary mb-4">
              Subscribe to our newsletter for updates, tips, and announcements:
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-400 text-surface-900 font-medium rounded-lg hover:bg-primary-300 transition-colors"
            >
              Subscribe to Newsletter
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
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
