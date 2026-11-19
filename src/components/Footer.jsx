import React from 'react';
import { CLINIC_INFO } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, isHindi } = useLanguage();

  const navLinks = [
    { href: '#home', label: t('navHome') },
    { href: '#doctors', label: t('navDoctors') },
    { href: '#services', label: t('navServices') },
    { href: '#gallery', label: t('navGallery') },
    { href: '#reviews', label: t('navReviews') },
    { href: '#contact', label: t('navContact') }
  ];

  return (
    <footer className="site-footer bg-wood-footer">
      <div className="container">
        {/* Top Row */}
        <div className="footer-top-grid">
          {/* Clinic Branding */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-brand-icon">
                <img
                  src="/assets/logo.jpg"
                  alt="Dr. Dosi's Clinic Logo"
                  className="footer-logo-img"
                  width="40"
                  height="40"
                />
              </div>
              <h2 className="footer-clinic-name">
                {isHindi ? CLINIC_INFO.hindiName : CLINIC_INFO.name}
              </h2>
            </div>

            <p className="footer-tagline">
              {isHindi ? CLINIC_INFO.hindiTagline : CLINIC_INFO.tagline}
            </p>

            <address className="footer-short-address">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                {isHindi
                  ? "दोसी भवन, मनीष टेलीकॉम वाली गली, कंबल केंद्र रोड, नई आबादी, मंदसौर (म.प्र.) 458001"
                  : "Dosi Bhawan, Manish Telecom Wali Gali, Kambal Kendra Road, Nai Abaadi, Mandsaur (M.P.) 458001"}
              </span>
            </address>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">{t('quickLinks')}</h3>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Doctors & Timings Summary */}
          <div className="footer-summary-col">
            <h3 className="footer-col-title">{t('hoursTitle')}</h3>
            <div className="footer-hours-box">
              <div className="footer-hours-row">
                <span>{CLINIC_INFO.hours.days}:</span>
                <strong>{CLINIC_INFO.hours.timings}</strong>
              </div>
              <div className="footer-hours-row closed-row">
                <span>{CLINIC_INFO.hours.sunday}:</span>
                <strong>{isHindi ? CLINIC_INFO.hours.hindiSunday : CLINIC_INFO.hours.sunday}</strong>
              </div>
            </div>
            <p className="footer-notice-note">
              {t('consultationNotice')}
            </p>
          </div>
        </div>

        {/* Thin Gold Divider */}
        <div className="footer-gold-divider" />

        {/* Bottom Bar: Copyright & Emergency Note */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2017 Dr. Dosi's Surgery &amp; Gynec Clinic. {t('allRightsReserved')}
          </p>
          <p className="footer-disclaimer">
            {t('emergencyDisclaimer')}
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          position: relative;
          background: var(--gradient-wood-footer);
          color: #FAF5EC;
          padding: 4.5rem 0 2.5rem 0;
          border-top: 2px solid var(--color-gold);
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .footer-top-grid {
            grid-template-columns: 1.5fr 0.8fr 1.2fr;
            gap: 2.5rem;
          }
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .footer-brand-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #3B2416;
          border: 1.5px solid var(--color-gold);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
        }

        .footer-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .footer-clinic-name {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: #FAF5EC;
          margin: 0;
        }

        .footer-tagline {
          font-size: 0.92rem;
          color: #D6C7B7;
          line-height: 1.55;
          margin-bottom: 1.25rem;
          max-width: 440px;
        }

        .footer-short-address {
          font-style: normal;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.86rem;
          color: var(--color-text-muted-gold);
          line-height: 1.5;
        }

        .footer-short-address svg {
          color: var(--color-gold);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .footer-col-title {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-gold);
          font-weight: 700;
          margin-bottom: 1.15rem;
        }

        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-nav-link {
          color: #E2D2C3;
          font-size: 0.92rem;
          transition: color var(--transition-fast), transform var(--transition-fast);
          display: inline-block;
        }

        .footer-nav-link:hover {
          color: #FFFFFF;
          transform: translateX(3px);
        }

        .footer-hours-box {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(201, 162, 75, 0.25);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          margin-bottom: 0.85rem;
        }

        .footer-hours-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.86rem;
          color: #FAF5EC;
          padding: 2px 0;
        }

        .footer-hours-row.closed-row {
          color: #E7A6AE;
        }

        .footer-notice-note {
          font-size: 0.78rem;
          color: #C4B5A5;
          line-height: 1.45;
        }

        .footer-gold-divider {
          width: 100%;
          height: 1px;
          background: var(--gradient-gold-line);
          margin-bottom: 1.75rem;
        }

        .footer-bottom-bar {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
          text-align: center;
          font-size: 0.82rem;
          color: #B8A899;
        }

        @media (min-width: 768px) {
          .footer-bottom-bar {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .footer-disclaimer {
          font-size: 0.76rem;
          color: #9E8E80;
          max-width: 500px;
        }
      `}</style>
    </footer>
  );
}
