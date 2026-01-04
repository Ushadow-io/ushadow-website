import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - Ushadow',
  description: 'Explore Ushadow features: service orchestration with Unodes, meeting recording, secret management, and easy add-on wizards.',
};

const coreFeatures = [
  {
    id: 'orchestration',
    name: 'Service Orchestration',
    tagline: 'Unodes with Docker & Kubernetes',
    description: 'Deploy and manage distributed services across Unodes. Each Unode runs containerized workloads with Docker for development or Kubernetes for production scale.',
    features: [
      'Distributed Unode architecture',
      'Docker Compose for local development',
      'Kubernetes manifests for production',
      'Service health monitoring and auto-restart',
      'Cross-node communication and discovery',
    ],
    status: 'Core',
    statusColor: 'primary',
    link: '/docs',
    screenshot: '/screenshots/cluster.png',
  },
  {
    id: 'recording',
    name: 'Meeting & Conversation Recording',
    tagline: 'Chronicle + Omi Wearable',
    description: 'Record meetings directly from your browser using Chronicle and capture conversations on-the-go with the Omi wearable necklace. All audio is transcribed and turned into searchable memories.',
    features: [
      'Chronicle for browser-based meeting recording',
      'Omi necklace integration for mobile capture',
      'Real-time transcription with Deepgram/Whisper',
      'AI-powered memory extraction and tagging',
      'Searchable conversation history',
    ],
    status: 'Core',
    statusColor: 'accent',
    link: 'https://github.com/chronicler-ai',
    screenshot: '/screenshots/record.png',
    badge: { text: 'Powered by Chronicle', href: 'https://github.com/chronicler-ai' },
  },
  {
    id: 'secrets',
    name: 'Secret & Key Management',
    tagline: 'Centralized Credential Security',
    description: 'Securely share API keys, credentials, and secrets across all your containers and Unodes. Centralized management with automatic rotation support.',
    features: [
      'Centralized secret storage',
      'Cross-container secret sharing',
      'API key management dashboard',
      'Automatic rotation policies',
      'Audit logging for compliance',
    ],
    status: 'Core',
    statusColor: 'primary',
    link: '/docs#secrets',
    screenshot: '/screenshots/keys.png',
  },
  {
    id: 'addons',
    name: 'Service Add-on Wizard',
    tagline: 'Extend Your Platform Easily',
    description: 'Add new services to your Ushadow deployment with guided wizards. No complex configuration files—just answer a few questions and deploy in minutes.',
    features: [
      'Step-by-step service configuration',
      'Pre-built templates for common services',
      'Automatic dependency resolution',
      'One-click deployment to Unodes',
      'Rollback and version management',
    ],
    status: 'Core',
    statusColor: 'accent',
    link: '/docs#addons',
    screenshot: '/screenshots/wizard.png',
  },
];

const deploymentOptions = [
  {
    name: 'Docker Compose',
    description: 'Single-command deployment for local Unodes and development.',
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
      </svg>
    ),
  },
  {
    name: 'Kubernetes',
    description: 'Production-ready Unode clusters with auto-scaling.',
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 01-2.075-2.597l2.578-.437.004.005a.44.44 0 01.485.606zm-.833-2.129a.44.44 0 00.173-.756l.002-.011L7.585 9.7a5.143 5.143 0 00-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 00.699-.337l-.01-.002.3-2.556a5.273 5.273 0 00-2.883 1.665l2.484 1.114-.006.006.416.11zm2.836 1.12l-.006-.01.009.007a.44.44 0 00.699.337l2.001-1.115a5.272 5.272 0 00-2.883-1.665l.18 2.446zm1.677 1.073a.44.44 0 00.173.756l-.01.01 2.513.725a5.143 5.143 0 00-.73-3.255l-1.961 1.753.015.011zm-.986 2.065a.44.44 0 00.485-.606l.004-.005 2.578.437a5.171 5.171 0 01-2.075 2.597l-.999-2.412.007-.01zm-3.007.584a.44.44 0 00-.44.44l.002.01-.002 2.64a5.245 5.245 0 002.883-1.665l-2.443-1.425zm-.89-.222l-.002-.002a.44.44 0 00-.44-.44l-2.443 1.426a5.245 5.245 0 002.883 1.664l.002-2.638v-.01zm6.855-3.216l.006-.022a.44.44 0 00-.485-.607l-.006.01-2.578.437.009.02a5.171 5.171 0 012.075 2.598l.979-2.436zm-6.855-3.216l.002-.002 2.443-1.425a5.245 5.245 0 00-2.883-1.665l-.002 2.638v.01a.44.44 0 00.44.444zm-1.104 1.96l.002.002a.44.44 0 00.173.756l2.001 1.115a5.272 5.272 0 00-2.883-1.665l.707-.208zm-.173 4.05a.44.44 0 00-.485.606l-.004.005 2.578-.437a5.171 5.171 0 01-2.075 2.597l-.014-2.771zm-1.677-1.073a.44.44 0 00-.173-.756l2.513.725a5.143 5.143 0 00.73-3.255l-1.961 1.753-.015.011-.006-.01-.009.007a.44.44 0 00-.699.337l-.38-.812zm.986-2.065a.44.44 0 00-.485.606l-.004.005-2.578-.437a5.171 5.171 0 012.075-2.597l.992 2.423zm1.104-1.96l-.002-.002-2.443 1.425a5.245 5.245 0 012.883-1.665l.002 2.638v.01a.44.44 0 01-.44.444l-.002-.85z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.5c-5.247 0-9.5-4.253-9.5-9.5S6.753 2.5 12 2.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5z"/>
      </svg>
    ),
  },
  {
    name: 'Distributed Unodes',
    description: 'Deploy across multiple machines with centralized orchestration.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'primary':
      return 'bg-primary-400/10 text-primary-400 border-primary-400/30';
    case 'accent':
      return 'bg-accent-500/10 text-accent-400 border-accent-500/30';
    default:
      return 'bg-surface-600/50 text-text-muted border-surface-500/30';
  }
}

export default function FeaturesPage() {
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
              Core Features
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Everything you need to orchestrate services, capture conversations,
              manage secrets, and extend your platform.
            </p>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {coreFeatures.map((coreFeature, index) => (
              <div
                key={coreFeature.id}
                id={coreFeature.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold text-text-primary">{coreFeature.name}</h2>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(coreFeature.statusColor)}`}>
                        {coreFeature.status}
                      </span>
                    </div>
                    <p className="text-primary-400 font-medium mb-4">{coreFeature.tagline}</p>
                    {'badge' in coreFeature && coreFeature.badge && (
                      <a
                        href={coreFeature.badge.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20 hover:bg-accent-500/20 transition-colors mb-4"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                        </svg>
                        {coreFeature.badge.text}
                      </a>
                    )}
                    <p className="text-text-secondary mb-6">{coreFeature.description}</p>

                    <ul className="space-y-3 mb-8">
                      {coreFeature.features.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className="text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {coreFeature.link.startsWith('http') ? (
                      <a
                        href={coreFeature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium"
                      >
                        Learn more
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={coreFeature.link}
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium"
                      >
                        View documentation
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    )}
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    {'screenshot' in coreFeature && coreFeature.screenshot ? (
                      <div className="rounded-2xl overflow-hidden border border-surface-500/30">
                        <Image
                          src={coreFeature.screenshot}
                          alt={coreFeature.name}
                          width={800}
                          height={500}
                          className="w-full h-auto"
                        />
                      </div>
                    ) : (
                      <div
                        className="rounded-2xl p-8 border"
                        style={{
                          backgroundColor: 'var(--surface-800)',
                          borderColor: coreFeature.statusColor === 'primary'
                            ? 'rgba(74, 222, 128, 0.2)'
                            : coreFeature.statusColor === 'accent'
                            ? 'rgba(168, 85, 247, 0.2)'
                            : 'var(--surface-500)',
                          backgroundImage: coreFeature.statusColor === 'primary'
                            ? 'radial-gradient(ellipse at center, rgba(74, 222, 128, 0.05) 0%, transparent 70%)'
                            : coreFeature.statusColor === 'accent'
                            ? 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%)'
                            : 'none',
                        }}
                      >
                        <div className="aspect-video flex items-center justify-center">
                          <div className="text-center">
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                              coreFeature.statusColor === 'primary'
                                ? 'bg-primary-400/20 text-primary-400'
                                : coreFeature.statusColor === 'accent'
                                ? 'bg-accent-500/20 text-accent-400'
                                : 'bg-surface-600 text-text-muted'
                            }`}>
                              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                              </svg>
                            </div>
                            <p className="text-text-muted text-sm">
                              {coreFeature.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deployment Options */}
      <div className="py-24 bg-surface-800/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold text-accent-400">Deployment</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Deploy Your Way
            </p>
            <p className="mt-6 text-lg text-text-secondary">
              Whether you&apos;re running locally or scaling to production, Ushadow has you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option) => (
              <div
                key={option.name}
                className="rounded-2xl bg-surface-800 border border-surface-500/30 p-8 text-center hover:border-surface-400/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center text-primary-400 mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{option.name}</h3>
                <p className="text-text-secondary text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              Follow our quickstart guide to have Ushadow running in minutes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs"
                className="rounded-lg px-8 py-4 text-lg font-semibold text-surface-900 bg-primary-400 hover:bg-primary-300 transition-all glow-green"
              >
                View Documentation
              </Link>
              <a
                href="https://github.com/Ushadow-io/Ushadow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-text-primary border border-surface-500 hover:border-surface-400 hover:bg-surface-800 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
