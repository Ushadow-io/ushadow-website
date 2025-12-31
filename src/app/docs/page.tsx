import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started - Ushadow',
  description: 'Learn how to install and configure Ushadow, the AI orchestration platform.',
};

const steps = [
  {
    number: '01',
    title: 'Clone the Repository',
    description: 'Start by cloning the Ushadow repository from GitHub.',
    code: 'git clone https://github.com/Ushadow-io/Ushadow.git\ncd Ushadow',
  },
  {
    number: '02',
    title: 'Run Quickstart',
    description: 'The quickstart script handles all configuration and starts the services.',
    code: './go.sh',
  },
  {
    number: '03',
    title: 'Access Dashboard',
    description: 'Open your browser and navigate to the Ushadow dashboard.',
    code: 'http://localhost:3000',
  },
];

const requirements = [
  { name: 'Docker', description: 'Container runtime for services', link: 'https://docs.docker.com/get-docker/' },
  { name: 'Docker Compose', description: 'Multi-container orchestration', link: 'https://docs.docker.com/compose/install/' },
  { name: 'Git', description: 'Version control', link: 'https://git-scm.com/downloads' },
];

const configSections = [
  {
    id: 'environment',
    title: 'Environment Variables',
    description: 'Configure your deployment with environment variables.',
    items: [
      { name: 'ADMIN_EMAIL', description: 'Admin user email address', default: 'admin@ushadow.local' },
      { name: 'ADMIN_PASSWORD', description: 'Admin user password', default: 'Generated on first run' },
      { name: 'MONGODB_URL', description: 'MongoDB connection string', default: 'mongodb://localhost:27017' },
      { name: 'REDIS_URL', description: 'Redis connection string', default: 'redis://localhost:6379' },
      { name: 'CHRONICLE_URL', description: 'Chronicle API endpoint', default: 'http://localhost:8000' },
    ],
  },
  {
    id: 'api-keys',
    title: 'API Keys',
    description: 'Optional API keys for enhanced functionality.',
    items: [
      { name: 'OPENAI_API_KEY', description: 'OpenAI API for memory extraction and chat', default: 'Optional' },
      { name: 'DEEPGRAM_API_KEY', description: 'Deepgram for audio transcription', default: 'Optional' },
      { name: 'ANTHROPIC_API_KEY', description: 'Anthropic for Claude models', default: 'Optional' },
    ],
  },
];

const serviceUrls = [
  { name: 'Ushadow Dashboard', url: 'http://localhost:3000', description: 'Main web interface' },
  { name: 'Ushadow API', url: 'http://localhost:8080', description: 'Backend REST API' },
  { name: 'API Documentation', url: 'http://localhost:8080/docs', description: 'Swagger/OpenAPI docs' },
  { name: 'Chronicle API', url: 'http://localhost:8000', description: 'Chronicle backend' },
];

export default function DocsPage() {
  return (
    <div className="bg-surface-900">
      {/* Hero */}
      <div className="relative py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Getting Started
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Get Ushadow up and running in minutes with our quickstart guide.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        {/* Prerequisites */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Prerequisites</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {requirements.map((req) => (
              <a
                key={req.name}
                href={req.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-surface-800 border border-surface-500/30 p-6 hover:border-primary-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-text-primary group-hover:text-primary-400 transition-colors">
                  {req.name}
                </h3>
                <p className="text-sm text-text-muted mt-1">{req.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Installation Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Installation</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-surface-500/50" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-400/10 border border-primary-400/30 flex items-center justify-center">
                    <span className="text-primary-400 font-bold text-sm">{step.number}</span>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
                    <p className="text-text-secondary mb-4">{step.description}</p>
                    <div className="rounded-lg bg-surface-800 border border-surface-500/50 p-4 overflow-x-auto">
                      <pre className="text-sm text-primary-400 font-mono whitespace-pre">{step.code}</pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Default Credentials */}
        <section className="mb-16">
          <div className="rounded-xl bg-accent-900/20 border border-accent-500/30 p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-accent-300 mb-2">Default Credentials</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Unless changed during setup, use these credentials to log in:
                </p>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex gap-4">
                    <span className="text-text-muted">Email:</span>
                    <span className="text-text-primary">admin@ushadow.local</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-text-muted">Password:</span>
                    <span className="text-text-primary">ushadow-123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service URLs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Service URLs</h2>
          <div className="rounded-xl bg-surface-800 border border-surface-500/30 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-surface-500/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">URL</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary hidden sm:table-cell">Description</th>
                </tr>
              </thead>
              <tbody>
                {serviceUrls.map((service, index) => (
                  <tr key={service.name} className={index < serviceUrls.length - 1 ? 'border-b border-surface-500/20' : ''}>
                    <td className="px-6 py-4 text-sm text-text-primary">{service.name}</td>
                    <td className="px-6 py-4">
                      <code className="text-sm text-primary-400 font-mono">{service.url}</code>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted hidden sm:table-cell">{service.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Configuration</h2>
          <p className="text-text-secondary mb-8">
            Ushadow can be configured using environment variables. Copy <code className="text-primary-400">.env.template</code> to <code className="text-primary-400">.env</code> and customize as needed.
          </p>

          <div className="space-y-8">
            {configSections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h3 className="text-lg font-semibold text-text-primary mb-2">{section.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{section.description}</p>

                <div className="rounded-xl bg-surface-800 border border-surface-500/30 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-surface-500/30">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Variable</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider hidden md:table-cell">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Default</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.items.map((item, index) => (
                        <tr key={item.name} className={index < section.items.length - 1 ? 'border-b border-surface-500/20' : ''}>
                          <td className="px-6 py-4">
                            <code className="text-sm text-accent-400 font-mono">{item.name}</code>
                          </td>
                          <td className="px-6 py-4 text-sm text-text-secondary hidden md:table-cell">{item.description}</td>
                          <td className="px-6 py-4 text-sm text-text-muted">{item.default}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Docker Commands */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Common Commands</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Start Services</h3>
              <div className="rounded-lg bg-surface-800 border border-surface-500/50 p-4">
                <pre className="text-sm text-primary-400 font-mono">./go.sh</pre>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Stop Services</h3>
              <div className="rounded-lg bg-surface-800 border border-surface-500/50 p-4">
                <pre className="text-sm text-primary-400 font-mono">docker compose down</pre>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">View Logs</h3>
              <div className="rounded-lg bg-surface-800 border border-surface-500/50 p-4">
                <pre className="text-sm text-primary-400 font-mono">docker compose logs -f</pre>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Rebuild After Changes</h3>
              <div className="rounded-lg bg-surface-800 border border-surface-500/50 p-4">
                <pre className="text-sm text-primary-400 font-mono">docker compose up -d --build</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-6">Next Steps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/features"
              className="rounded-xl bg-surface-800 border border-surface-500/30 p-6 hover:border-primary-500/30 transition-colors group"
            >
              <h3 className="font-semibold text-text-primary group-hover:text-primary-400 transition-colors flex items-center gap-2">
                Explore Features
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </h3>
              <p className="text-sm text-text-muted mt-1">Learn about Chronicle, MCP, and other integrations.</p>
            </Link>
            <a
              href="https://github.com/Ushadow-io/Ushadow/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-surface-800 border border-surface-500/30 p-6 hover:border-accent-500/30 transition-colors group"
            >
              <h3 className="font-semibold text-text-primary group-hover:text-accent-400 transition-colors flex items-center gap-2">
                Join Discussions
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </h3>
              <p className="text-sm text-text-muted mt-1">Get help and connect with the community.</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
