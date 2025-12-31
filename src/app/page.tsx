import Image from 'next/image';
import Link from 'next/link';
import CopyButton from '@/components/CopyButton';

const features = [
  {
    name: 'Service Orchestration',
    description: 'Deploy and manage services across Unodes using Docker and Kubernetes. Scale from local development to production clusters.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    color: 'primary',
  },
  {
    name: 'Meeting & Conversation Recording',
    description: 'Record meetings on the web and capture conversations on-the-go with Omi wearable integration. Build searchable memories automatically.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    color: 'accent',
  },
  {
    name: 'Secret & Key Management',
    description: 'Securely share secrets and API keys across containers. Centralized credential management with automatic rotation support.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    color: 'primary',
  },
  {
    name: 'Service Add-on Wizard',
    description: 'Easily extend your platform with new services. Guided wizards walk you through configuration and deployment in minutes.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    color: 'accent',
  },
];

const stats = [
  { label: 'Deployment', value: 'Docker & K8s' },
  { label: 'Secrets', value: 'Encrypted' },
  { label: 'Open Source', value: 'Apache 2.0' },
  { label: 'Add-ons', value: 'Wizard Setup' },
];

export default function Home() {
  return (
    <div className="bg-surface-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Powered by Chronicle badge */}
            <a
              href="https://github.com/chronicler-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-900/30 border border-accent-500/30 text-accent-300 text-sm font-medium hover:bg-accent-900/50 transition-colors mb-8"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              </svg>
              Powered with Chronicle
            </a>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo/ushadow-logo-large.png"
                alt="Ushadow"
                width={500}
                height={500}
                className="h-56 sm:h-64 w-auto"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-text-primary">One Platform.</span>
              <br />
              <span className="gradient-text">All Your AI Services.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg leading-8 text-text-secondary max-w-2xl mx-auto">
              Orchestrate services across Unodes with Docker and Kubernetes. Record meetings, capture conversations
              with Omi, manage secrets securely, and extend with easy add-on wizards.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs"
                className="rounded-lg px-6 py-3 text-base font-semibold text-surface-900 bg-primary-400 hover:bg-primary-300 transition-all glow-green"
              >
                Get Started
              </Link>
              <a
                href="https://github.com/Ushadow-io/Ushadow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-text-primary border border-surface-500 hover:border-surface-400 hover:bg-surface-800 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Quick install */}
            <div className="mt-12">
              <p className="text-sm text-text-muted mb-3">Quick install</p>
              <div className="inline-flex items-center gap-3 bg-surface-800 rounded-lg px-4 py-3 border border-surface-500/50">
                <code className="text-sm text-primary-400 font-mono">
                  git clone https://github.com/Ushadow-io/Ushadow.git && cd Ushadow && ./go.sh
                </code>
                <CopyButton text="git clone https://github.com/Ushadow-io/Ushadow.git && cd Ushadow && ./go.sh" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-surface-800/50 border-y border-surface-500/30">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-sm text-text-muted">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-primary-400">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold text-primary-400">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Unified AI Orchestration
            </p>
            <p className="mt-6 text-lg text-text-secondary">
              Connect and manage all your AI services from a single, powerful interface.
              No more switching between tools.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={`relative rounded-2xl p-8 transition-all hover:scale-[1.02] ${
                    feature.color === 'primary'
                      ? 'bg-surface-800 border border-primary-500/20 hover:border-primary-500/40'
                      : 'bg-surface-800 border border-accent-500/20 hover:border-accent-500/40'
                  }`}
                  style={{
                    backgroundImage:
                      feature.color === 'primary'
                        ? 'radial-gradient(ellipse at top right, rgba(74, 222, 128, 0.08) 0%, transparent 50%)'
                        : 'radial-gradient(ellipse at top right, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
                  }}
                >
                  <div
                    className={`inline-flex items-center justify-center rounded-lg p-3 ${
                      feature.color === 'primary'
                        ? 'bg-primary-400/10 text-primary-400'
                        : 'bg-accent-500/10 text-accent-400'
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text-primary">{feature.name}</h3>
                  <p className="mt-2 text-text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Section */}
      <div className="py-24 sm:py-32 bg-surface-800/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold text-accent-400">Architecture</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Distributed Unodes
            </p>
            <p className="mt-6 text-lg text-text-secondary">
              Deploy services across distributed Unodes. Each node runs Docker or Kubernetes
              with shared secrets and centralized orchestration.
            </p>
          </div>

          {/* Architecture diagram */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-surface-800 border border-surface-500/30 p-8 font-mono text-sm overflow-x-auto">
              <pre className="text-text-secondary whitespace-pre">
{`┌─────────────────────────────────────────────────────┐
│              Ushadow Dashboard                      │
│   ┌───────────┬───────────┬───────────┬──────────┐  │
│   │ Services  │ Recording │  Secrets  │ Add-ons  │  │
│   └───────────┴───────────┴───────────┴──────────┘  │
└───────────────────────┬─────────────────────────────┘
                        │
┌───────────────────────┴─────────────────────────────┐
│              Orchestration Layer                    │
│   ┌───────────────────┬─────────────────────────┐   │
│   │  Secret Manager   │    Add-on Wizard        │   │
│   │  (Keys & Creds)   │    (Service Setup)      │   │
│   └───────────────────┴─────────────────────────┘   │
└───────────────────────┬─────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
   ┌─────────┐    ┌─────────┐    ┌─────────┐
   │ Unode 1 │    │ Unode 2 │    │ Unode N │
   │(Docker) │    │  (K8s)  │    │  (K8s)  │
   ├─────────┤    ├─────────┤    ├─────────┤
   │Chronicle│    │   Omi   │    │ Custom  │
   │Recorder │    │ Bridge  │    │ Service │
   └─────────┘    └─────────┘    └─────────┘`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Ready to orchestrate your AI?
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              Get started in minutes with our quickstart script. Deploy locally with Docker
              or scale to production with Kubernetes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs"
                className="rounded-lg px-8 py-4 text-lg font-semibold text-surface-900 glow-gradient transition-all hover:opacity-90"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #4ade80 0%, #a855f7 100%)',
                }}
              >
                Start Building
              </Link>
              <Link
                href="/features"
                className="rounded-lg px-8 py-4 text-lg font-semibold text-text-primary border border-surface-500 hover:border-surface-400 hover:bg-surface-800 transition-all"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
