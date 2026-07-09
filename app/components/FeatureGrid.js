const features = [
  {
    title: 'Client-side rendering',
    description:
      'Every view renders in the browser. No server-side HTML generation at request time — fast, cacheable, and CDN-friendly.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Static export',
    description:
      'output: export produces a fully static bundle. Ship to any host without a Node runtime — or pair with a custom server.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.3 7 12 12l8.7-5M12 22V12" />
      </svg>
    ),
  },
  {
    title: 'Custom server',
    description:
      'server.js wraps Next in dev and serves the exported SPA in production, with custom routes like /healthz built in.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 6h.01M6 18h.01" />
      </svg>
    ),
  },
];

export default function FeatureGrid() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Capabilities</p>
          <h2 className="section__title">Built for modern deployment</h2>
          <p className="section__desc">
            A production-ready single-page app pattern — static where it counts, flexible where you
            need it.
          </p>
        </div>

        <div className="features">
          {features.map((feature) => (
            <article key={feature.title} className="feature">
              <div className="feature__icon">{feature.icon}</div>
              <h3 className="feature__title">{feature.title}</h3>
              <p className="feature__desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
