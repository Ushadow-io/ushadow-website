import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'News - Ushadow',
  description: 'Latest news and updates from Ushadow. Discover new features in Release 1 including dual-stream recording, mobile app, unified login, and more.',
};

const releaseFeatures = [
  {
    id: 'dual-stream-audio',
    title: 'Record Desktop Audio in Dual Stream',
    tagline: 'Capture Everything',
    description: 'Record from web meetings, YouTube, and whatever you choose. Web-only recording (not apps) with dual-stream capability for comprehensive audio capture.',
    videoId: '0gYFVbQFVQ4',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    id: 'service-deploys',
    title: 'Easy Service Deploys & Config',
    tagline: 'Tidier Service Screen',
    description: 'A streamlined service management interface that makes deploying and configuring your services simpler and more intuitive.',
    videoId: 'hvnk0Y9dKUI',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    id: 'mobile-app',
    title: 'Fully Featured Mobile App',
    tagline: 'Complete Mobile Experience',
    description: 'Stream to Chronicle + Mycelia, view your conversations and memories, chat using memories, and access your session log - all from your mobile device.',
    videoId: 'B_dNncvqbVE',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    id: 'keycloak-sso',
    title: 'Unified Login with Keycloak',
    tagline: 'Secure SSO Integration',
    description: 'Use a dedicated SSO server for login. Streamlined authentication across all Ushadow services with enterprise-grade security.',
    videoId: 'unxkYoE3Ho8',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    id: 'memories',
    title: 'Memories',
    tagline: 'Linked Memories & Graph Mode',
    description: 'Explore linked memories with graph visualization mode and navigate connected conversations. See how your memories relate to each other in an interactive knowledge graph.',
    videoId: 'iMjgxN476lo',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    id: 'github-docker-import',
    title: 'Github/Docker Hub Service Import',
    tagline: 'Import Compose from Anywhere',
    description: 'Import a docker compose file directly from GitHub or Docker Hub and set it up as an MCP service. Streamlined service integration from your favorite repositories.',
    videoId: '7xAR8hjKFpU',
    status: 'WIP',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    id: 'kubernetes-deploy',
    title: 'Kubernetes Install from Docker Compose',
    tagline: 'One-Click K8s Deployment',
    description: 'Using a docker compose file, deploy directly on Kubernetes! Seamlessly transition from local development to production-ready Kubernetes deployments.',
    videoId: '2paX8UEJI4I',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>
    ),
  },
  {
    id: 'sharing',
    title: 'Sharing',
    tagline: 'Work in Progress',
    description: 'Share your conversations, memories, and insights with your team. Collaboration features coming soon.',
    videoId: 'EbOT8NgWCDo',
    status: 'WIP',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
];

export default function NewsPage() {
  return (
    <div className="bg-surface-900">
      {/* Hero */}
      <div className="relative py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-sm font-medium border border-accent-500/20 mb-6">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
              </svg>
              Release 1 Updates
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-6xl mb-6">
              News from Ushadow!
            </h1>
            <p className="text-xl text-text-secondary">
              I thought it was time to share some of my progress.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Announcement - Mycelia AND Chronicle */}
      <div className="relative py-24 sm:py-32 bg-gradient-to-b from-surface-900 via-primary-400/5 to-surface-900">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-400/20 text-primary-400 mb-8">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6">
              Use Both Mycelia <span className="text-primary-400">AND</span> Chronicle
            </h2>

            <p className="text-2xl sm:text-3xl font-semibold text-primary-400 mb-8">
              No More Choosing
            </p>

            <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              If you've wondered about which one to use - mycelia or chronicle - with Ushadow you can use <span className="text-text-primary font-semibold">BOTH</span>. At the same time!
            </p>

            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent-500/20 text-accent-400 mb-3">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    {/* Toadstool cap */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 11c0-4.5 3.5-8 8-8s8 3.5 8 8c0 1.5-0.5 2.5-1.5 3.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 14.5C4.5 13.5 4 12.5 4 11" />
                    {/* Stem */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14.5c0-0.5 0.9-1 2-1s2 0.5 2 1v6.5c0 0.5-0.9 1-2 1s-2-0.5-2-1z" />
                    {/* Spots on cap */}
                    <circle cx="9" cy="8" r="0.8" fill="currentColor" />
                    <circle cx="15" cy="7" r="0.8" fill="currentColor" />
                    <circle cx="12" cy="6" r="0.8" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-text-muted">Mycelia</p>
              </div>

              <div className="text-primary-400 text-3xl font-bold">+</div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent-500/20 text-accent-400 mb-3">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-text-muted">Chronicle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-surface-800/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {releaseFeatures.map((feature, index) => (
              <div
                key={feature.id}
                id={feature.id}
                className="scroll-mt-24"
              >
                {/* Feature with Video */}
                {feature.videoId ? (
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 text-primary-400">
                          {feature.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-text-primary">{feature.title}</h2>
                        {feature.status && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-500/10 text-accent-400 border border-accent-500/30">
                            {feature.status}
                          </span>
                        )}
                      </div>
                      <p className="text-primary-400 font-medium mb-4">{feature.tagline}</p>
                      <p className="text-lg text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Video */}
                    <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <div className="relative rounded-2xl overflow-hidden border border-surface-500/30 bg-surface-900 shadow-xl">
                        <div className="aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${feature.videoId}`}
                            title={feature.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Feature without Video */
                  <div className="mx-auto max-w-3xl">
                    <div className="rounded-2xl bg-gradient-to-br from-primary-400/10 to-accent-500/10 border border-primary-400/20 p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 text-primary-400 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-text-primary mb-2">{feature.title}</h2>
                          <p className="text-primary-400 font-medium mb-3">{feature.tagline}</p>
                          <p className="text-text-secondary leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* YouTube Playlist CTA */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-6">
              Watch the Full Playlist
            </h2>
            <p className="text-lg text-text-secondary mb-10">
              See all Release 1 features in action on our YouTube playlist. Subscribe to stay updated with the latest releases and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/playlist?list=PL6ZMNKgKPwLUabBxvYmc5-OhI4xMR0P1U"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-surface-900 bg-primary-400 hover:bg-primary-300 transition-all glow-green"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                View Release 1 Playlist
              </a>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-text-primary border border-surface-500 hover:border-surface-400 hover:bg-surface-800 transition-all"
              >
                Explore All Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
