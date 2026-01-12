import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Videos - Ushadow',
  description: 'Watch Ushadow tutorials, demos, and platform overviews. Learn how to orchestrate services, manage secrets, and deploy with Unodes.',
};

const videos = [
  {
    id: 'dx8RCVuj6-Q',
    title: 'Ushadow Platform Overview',
    description: 'A comprehensive introduction to Ushadow - learn about service orchestration, recording, secrets management, and the add-on wizard system.',
    featured: true,
  },
  // Add more videos here as they become available
];

export default function VideosPage() {
  return (
    <div className="bg-surface-900">
      {/* Hero */}
      <div className="relative py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Video Tutorials
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Watch demos, tutorials, and platform overviews to get the most out of Ushadow.
            </p>
            <div className="mt-8">
              <a
                href="https://www.youtube.com/channel/UCWnYiTB8UaoaKTzVMQvIr0A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-surface-900 bg-primary-400 hover:bg-primary-300 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Video */}
      {videos.filter(v => v.featured).map((video) => (
        <div key={video.id} className="py-16 bg-surface-800/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-sm font-medium border border-accent-500/20 mb-4">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  Featured
                </span>
                <h2 className="text-2xl font-bold text-text-primary mb-3">{video.title}</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">{video.description}</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-surface-500/30 bg-surface-900 shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* More Videos Coming Soon */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">More Videos Coming Soon</h2>
            <p className="text-text-secondary mb-8">
              We're constantly creating new tutorials and demos. Subscribe to our YouTube channel to stay updated.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/channel/UCWnYiTB8UaoaKTzVMQvIr0A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-text-primary border border-surface-500 hover:border-surface-400 hover:bg-surface-800 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                View Channel
              </a>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-surface-900 bg-primary-400 hover:bg-primary-300 transition-all"
              >
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
