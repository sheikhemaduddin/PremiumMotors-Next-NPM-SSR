'use client';

export default function StatusPanel({ health, loading, error }) {
  return (
    <div className="dashboard" id="status">
      <div className="panel">
        <div className="panel__header">
          <h3 className="panel__title">Runtime status</h3>
          <span className={`panel__pill ${loading ? 'panel__pill--loading' : 'panel__pill--ok'}`}>
            {loading ? 'Syncing' : error ? 'Degraded' : 'Healthy'}
          </span>
        </div>
        <div className="panel__body">
          <div className="metric-list">
            <div className="metric">
              <span className="metric__label">Mode</span>
              <span className="metric__value">{health?.mode ?? '—'}</span>
            </div>
            <div className="metric">
              <span className="metric__label">Runtime</span>
              <span className="metric__value">{health?.runtime ?? '—'}</span>
            </div>
            <div className="metric">
              <span className="metric__label">Rendering</span>
              <span className="metric__value">Client-side only</span>
            </div>
            <div className="metric">
              <span className="metric__label">Health endpoint</span>
              <span className="metric__value">GET /healthz</span>
            </div>
          </div>
        </div>
      </div>

      <div className="panel" id="architecture">
        <div className="panel__header">
          <h3 className="panel__title">Deploy config</h3>
          <span className="panel__pill panel__pill--ok">Cloudways</span>
        </div>
        <div className="panel__body">
          <pre className="code-block">
            <span className="cm">{'// Cloudways launch config'}</span>
            {'\n'}
            <span className="kw">entryFile</span>: <span className="str">'server.js'</span>
            {'\n'}
            <span className="kw">output</span>: <span className="str">'out/'</span>
            {'\n'}
            <span className="kw">build</span>: <span className="str">'npm run build'</span>
            {'\n'}
            <span className="kw">start</span>: <span className="str">'npm start'</span>
          </pre>
          <div className="arch-list">
            <div className="arch-item">
              <span className="arch-item__num">1</span>
              <span>Next.js builds a static CSR bundle into the out/ directory.</span>
            </div>
            <div className="arch-item">
              <span className="arch-item__num">2</span>
              <span>server.js serves static assets in production with SPA fallback.</span>
            </div>
            <div className="arch-item">
              <span className="arch-item__num">3</span>
              <span>/healthz is handled outside Next for platform health checks.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
