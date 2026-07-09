'use client';

import { useEffect, useState } from 'react';
import ClientHead from './ClientHead';
import Header from './components/Header';
import FeatureGrid from './components/FeatureGrid';
import StatusPanel from './components/StatusPanel';

export default function SpaPage() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/healthz')
      .then((res) => {
        if (!res.ok) throw new Error('Health check failed');
        return res.json();
      })
      .then((data) => {
        setHealth(data);
        setError(false);
      })
      .catch(() => {
        setHealth(null);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app">
      <ClientHead
        title="Nexus — CSR Platform"
        description="A sleek Next.js client-side SPA with custom server deployment."
      />

      <div className="app__bg" aria-hidden="true" />
      <div className="app__grid" aria-hidden="true" />

      <div className="app__content">
        <Header isLive={!loading && !error} />

        <main>
          <section className="hero">
            <div className="container">
              <div className="hero__badge">
                <span className="hero__badge-dot" />
                Next.js · Cloudways · CSR SPA
              </div>

              <h1 className="hero__title">
                Deploy faster with a{' '}
                <span className="hero__title-accent">client-first</span> app
              </h1>

              <p className="hero__subtitle">
                A polished single-page application with zero server-side rendering. Static export,
                custom server entry, and live health monitoring — ready for production on Cloudways.
              </p>

              <div className="hero__actions">
                <a className="btn btn--primary" href="#status">
                  View live status
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a className="btn btn--ghost" href="#architecture">
                  See architecture
                </a>
              </div>

              <div className="stats">
                <div className="stat">
                  <span className="stat__value">0ms</span>
                  <span className="stat__label">SSR on page load</span>
                </div>
                <div className="stat">
                  <span className="stat__value">100%</span>
                  <span className="stat__label">Client-rendered UI</span>
                </div>
                <div className="stat">
                  <span className="stat__value">/healthz</span>
                  <span className="stat__label">Custom server route</span>
                </div>
              </div>
            </div>
          </section>

          <FeatureGrid />

          <section className="section">
            <div className="container">
              <div className="section__header">
                <p className="section__eyebrow">Monitoring</p>
                <h2 className="section__title">Live system overview</h2>
                <p className="section__desc">
                  Pulled from the custom server health endpoint — updated on every page load.
                </p>
              </div>
              <StatusPanel health={health} loading={loading} error={error} />
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer__inner">
            <p className="footer__copy">© {new Date().getFullYear()} Nexus · Next.js CSR SPA</p>
            <div className="footer__links">
              <a className="footer__link" href="#features">
                Features
              </a>
              <a className="footer__link" href="#status">
                Status
              </a>
              <a className="footer__link" href="https://nextjs.org" target="_blank" rel="noreferrer">
                Next.js
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
