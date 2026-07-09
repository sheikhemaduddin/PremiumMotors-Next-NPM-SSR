'use client';

import { useEffect, useState } from 'react';

export default function Header({ isLive }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="brand">
          <span className="brand__mark">N</span>
          <span className="brand__text">
            <span className="brand__name">Nexus</span>
            <span className="brand__tag">CSR Platform</span>
          </span>
        </a>

        <nav className="nav" aria-label="Main">
          <a className="nav__link" href="#features">
            Features
          </a>
          <a className="nav__link" href="#status">
            Status
          </a>
          <a className="nav__link" href="#architecture">
            Architecture
          </a>
        </nav>

        <div className="header__status">
          <span className={`status-dot ${isLive ? 'status-dot--live' : ''}`} />
          <span>{isLive ? 'All systems operational' : 'Checking…'}</span>
        </div>
      </div>
    </header>
  );
}
