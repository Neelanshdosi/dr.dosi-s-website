import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t, isHindi } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const navLinks = [
    { href: '#home', label: t('navHome') },
    { href: '#doctors', label: t('navDoctors') },
    { href: '#services', label: t('navServices') },
    { href: '#gallery', label: t('navGallery') },
    { href: '#reviews', label: t('navReviews') },
    { href: '#contact', label: t('navContact') }
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const primaryPhone = CLINIC_INFO.phones[0];

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand / Logo */}
        <a href="#home" className="brand-link" aria-label={CLINIC_INFO.name}>
          <div className="brand-emblem">
            <img
              src="/assets/logo.jpg"
              alt="Dr. Dosi's Clinic Logo"
              className="brand-logo-img"
              width="42"
              height="42"
            />
          </div>
          <div className="brand-text-block">
            <span className="brand-title">
              {isHindi ? CLINIC_INFO.hindiName : CLINIC_INFO.name}
            </span>
            <span className="brand-sub">
              {isHindi ? "सर्जरी एवं गायनेक क्लीनिक • मंदसौर" : "Surgery & Gynec Clinic • Mandsaur"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-item">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Cluster */}
        <div className="header-actions">
          <LanguageToggle />
          
          <a
            href={`tel:${primaryPhone.tel}`}
            className="btn-header-call desktop-call-btn"
            title={`Call ${primaryPhone.display}`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: 'inline-block', verticalAlign: 'middle', marginTop: '-1px' }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '6px' }}>
              {t('callNow')}
            </span>
          </a>

          {/* Hamburger Button for Mobile */}
          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? t('menuClose') : t('menuOpen')}
          >
            <span className={`burger-bar ${menuOpen ? 'bar-top' : ''}`} />
            <span className={`burger-bar ${menuOpen ? 'bar-mid' : ''}`} />
            <span className={`burger-bar ${menuOpen ? 'bar-bot' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {menuOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${menuOpen ? 'drawer-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="drawer-header">
          <div className="drawer-brand-wrap">
            <img
              src="/assets/logo.jpg"
              alt="Dr. Dosi Logo"
              className="drawer-logo-img"
              width="36"
              height="36"
            />
            <div className="drawer-title">
              {isHindi ? CLINIC_INFO.hindiName : CLINIC_INFO.name}
            </div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label={t('menuClose')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="mobile-nav-list" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="mobile-nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="drawer-footer">
          <div className="drawer-hours-note">
            <span className="dot" />
            <span>{CLINIC_INFO.hours.days}: {CLINIC_INFO.hours.timings}</span>
          </div>
          <a
            href={`tel:${primaryPhone.tel}`}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{t('callToBook')}</span>
          </a>
        </div>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--gradient-wood-header);
          border-bottom: 1px solid rgba(201, 162, 75, 0.35);
          transition: box-shadow var(--transition-normal);
        }
        .header-scrolled {
          box-shadow: 0 4px 20px rgba(20, 10, 5, 0.35);
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
          gap: 1rem;
        }
        .brand-link {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
          color: var(--color-text-light);
          flex-shrink: 0;
        }
        .brand-emblem {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #3B2416;
          border: 1.5px solid var(--color-gold);
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          transition: transform var(--transition-fast);
        }
        .brand-link:hover .brand-emblem {
          transform: scale(1.04);
        }
        .brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .brand-text-block {
          display: flex;
          flex-direction: column;
        }
        .brand-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 700;
          color: #FAF5EC;
          letter-spacing: 0.02em;
          line-height: 1.15;
          white-space: nowrap;
          transition: color var(--transition-fast);
        }
        .brand-link:hover .brand-title {
          color: #FFFFFF;
        }
        .brand-sub {
          font-size: 0.78rem;
          color: var(--color-text-muted-gold);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        @media (min-width: 1280px) {
          .brand-title {
            font-size: 1.65rem;
          }
          .brand-sub {
            font-size: 0.82rem;
          }
          .brand-emblem {
            width: 52px;
            height: 52px;
          }
        }

        @media (max-width: 1024px) {
          .brand-title {
            font-size: 1.32rem;
          }
        }

        @media (max-width: 640px) {
          .brand-title {
            font-size: 1.2rem;
          }
          .brand-sub {
            font-size: 0.72rem;
          }
          .brand-emblem {
            width: 42px;
            height: 42px;
          }
        }

        @media (max-width: 420px) {
          .brand-title {
            font-size: 1.08rem;
          }
          .brand-sub {
            font-size: 0.68rem;
          }
          .brand-emblem {
            width: 36px;
            height: 36px;
          }
          .header-container {
            gap: 0.5rem;
          }
          .header-actions {
            gap: 0.4rem;
          }
        }

        @media (max-width: 360px) {
          .brand-title {
            font-size: 0.98rem;
          }
          .brand-sub {
            display: none;
          }
        }

        /* Desktop Nav */
        .desktop-nav {
          display: none;
        }
        .nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 1.5rem;
        }
        .nav-item {
          color: #EBDCCB;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color var(--transition-fast);
          position: relative;
          padding: 0.35rem 0;
        }
        .nav-item:hover,
        .nav-item:focus-visible {
          color: #FFFFFF;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-gold);
          transition: width var(--transition-fast);
        }
        .nav-item:hover::after {
          width: 100%;
        }

        /* Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .desktop-call-btn {
          display: none;
        }

        /* Hamburger button */
        .hamburger-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          padding: 8px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(201, 162, 75, 0.3);
          color: #FAF5EC;
          cursor: pointer;
        }
        .burger-bar {
          width: 22px;
          height: 2px;
          background-color: #FAF5EC;
          border-radius: 2px;
          transition: transform var(--transition-fast), opacity var(--transition-fast);
        }
        .bar-top {
          transform: translateY(7px) rotate(45deg);
        }
        .bar-mid {
          opacity: 0;
        }
        .bar-bot {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Responsive Breakpoints */
        @media (min-width: 900px) {
          .desktop-nav {
            display: block;
          }
          .desktop-call-btn {
            display: inline-flex;
          }
          .hamburger-btn {
            display: none;
          }
        }

        /* Mobile Drawer */
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(20, 10, 5, 0.65);
          backdrop-filter: blur(4px);
          z-index: 1100;
        }
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 82%;
          max-width: 340px;
          background: var(--gradient-wood-header);
          border-left: 1px solid var(--color-gold);
          z-index: 1200;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform var(--transition-slow);
          padding: 1.5rem;
          box-shadow: -8px 0 30px rgba(0, 0, 0, 0.5);
        }
        .drawer-open {
          transform: translateX(0);
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(201, 162, 75, 0.25);
          margin-bottom: 1.5rem;
        }
        .drawer-brand-wrap {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .drawer-logo-img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid var(--color-gold);
          object-fit: cover;
          flex-shrink: 0;
        }
        .drawer-title {
          font-family: var(--font-serif);
          color: #FAF5EC;
          font-weight: 700;
          font-size: 1.25rem;
          line-height: 1.2;
        }
        .drawer-close-btn {
          color: #FAF5EC;
          padding: 6px;
          border-radius: var(--radius-sm);
        }
        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          flex: 1;
        }
        .mobile-nav-link {
          color: #F0E2D5;
          font-size: 1.15rem;
          padding: 0.75rem 0.5rem;
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast), color var(--transition-fast);
          display: block;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          background: rgba(201, 162, 75, 0.15);
          color: var(--color-gold);
        }
        .drawer-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(201, 162, 75, 0.25);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .drawer-hours-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--color-text-muted-gold);
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ADE80;
        }
      `}</style>
    </header>
  );
}
