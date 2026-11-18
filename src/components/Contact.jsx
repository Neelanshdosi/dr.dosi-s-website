import React from 'react';
import { CLINIC_INFO } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';
import HoursTable from './HoursTable';

export default function Contact() {
  const { t, isHindi } = useLanguage();

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            {isHindi ? "सीधा संपर्क" : "Find & Visit Us"}
          </span>
          <h2 className="section-title">
            {t('contactSectionTitle')}
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            {t('contactSectionSubtitle')}
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-main-grid">
          {/* Left Column: Address, Phones & Hours */}
          <div className="contact-info-col">
            {/* Address Card */}
            <div className="contact-card address-card">
              <div className="contact-icon-bubble">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <div className="contact-card-content">
                <h3 className="contact-card-title">{t('addressTitle')}</h3>
                <address className="clinic-address-text">
                  <strong>Dosi Bhawan</strong><br />
                  Manish Telecom Wali Gali<br />
                  Kambal Kendra Road / Daloda Chopati, Nai Abaadi<br />
                  <span className="landmark-badge">
                    {isHindi ? "लैंडमार्क: मेहता नेत्रालय के पास" : "Landmark: Near Mehta Netralaya"}
                  </span><br />
                  Mandsaur, Madhya Pradesh 458001
                </address>

                <div className="address-actions">
                  <a
                    href={CLINIC_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary-light btn-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                    <span>{t('openInGoogleMaps')}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div className="contact-card phones-card">
              <div className="contact-icon-bubble">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <div className="contact-card-content">
                <h3 className="contact-card-title">{t('phonesTitle')}</h3>
                <p className="contact-card-sub">
                  {isHindi ? "परामर्श समय की पुष्टि अथवा सामान्य पूछताछ हेतु सीधे फोन करें:" : "Call directly to confirm doctor availability or consultations:"}
                </p>

                <div className="phone-links-list">
                  {CLINIC_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.tel}`}
                      className="phone-link-pill"
                      aria-label={`Call ${phone.label || ''} ${phone.display}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <div className="phone-pill-text">
                        {phone.label && <span className="phone-pill-label">{phone.label}:</span>}
                        <strong>{phone.display}</strong>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Hours Table */}
            <HoursTable />
          </div>

          {/* Right Column: Google Maps Location Embed */}
          <div className="contact-map-col">
            <div className="map-frame-card">
              <div className="map-card-header">
                <div className="map-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                    <line x1="8" y1="2" x2="8" y2="18" />
                    <line x1="16" y1="6" x2="16" y2="22" />
                  </svg>
                  <span>Google Maps Navigation</span>
                </div>
                <span className="map-coord-text">Nai Abaadi, Mandsaur</span>
              </div>

              <div className="map-iframe-container">
                <iframe
                  title={t('mapAriaLabel')}
                  src={CLINIC_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label={t('mapAriaLabel')}
                />
              </div>

              <div className="map-footer-bar">
                <div className="map-footer-info">
                  <strong>Dr. Dosi's Surgery and Gynec Clinic</strong>
                  <span>Kambal Kendra Road / Daloda Chopati, Nai Abaadi</span>
                </div>
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <span>{t('getDirections')}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--color-cream);
          border-bottom: 1px solid var(--color-card-border);
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
        }

        @media (min-width: 992px) {
          .contact-main-grid {
            grid-template-columns: 1.05fr 0.95fr;
            gap: 2.75rem;
          }
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-card {
          background: #FFFFFF;
          border: 1px solid var(--color-card-border);
          border-radius: var(--radius-md);
          padding: 1.65rem 1.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        @media (max-width: 440px) {
          .contact-card {
            padding: 1.25rem 1rem;
            gap: 0.85rem;
          }
          .contact-icon-bubble {
            width: 42px;
            height: 42px;
          }
          .phone-link-pill {
            width: 100%;
            justify-content: center;
          }
        }

        .contact-icon-bubble {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(201, 162, 75, 0.15);
          border: 1.5px solid var(--color-gold);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-card-content {
          flex: 1;
        }

        .contact-card-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: var(--color-walnut);
          margin-bottom: 0.5rem;
        }

        .contact-card-sub {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          margin-bottom: 1rem;
        }

        .clinic-address-text {
          font-style: normal;
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-primary);
          margin-bottom: 1rem;
        }

        .landmark-badge {
          display: inline-block;
          background: rgba(139, 90, 43, 0.09);
          color: var(--color-oak);
          font-weight: 600;
          font-size: 0.82rem;
          padding: 1px 7px;
          border-radius: 4px;
          margin-top: 3px;
        }

        .address-actions {
          margin-top: 0.5rem;
        }

        .phone-links-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .phone-link-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-cream);
          border: 1px solid rgba(201, 162, 75, 0.35);
          color: var(--color-walnut);
          padding: 0.6rem 1rem;
          border-radius: var(--radius-pill);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .phone-pill-text {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .phone-pill-label {
          font-size: 0.8rem;
          color: var(--color-oak);
          font-weight: 600;
        }

        .phone-link-pill:hover .phone-pill-label {
          color: #FAF5EC;
        }

        .phone-link-pill:hover {
          background: var(--color-maroon);
          color: #FFFFFF;
          border-color: var(--color-maroon);
        }

        .phone-link-pill svg {
          color: var(--color-maroon);
        }

        .phone-link-pill:hover svg {
          color: #FFFFFF;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.88rem;
          min-height: 38px;
        }

        /* Map Frame Card */
        .map-frame-card {
          background: #FFFFFF;
          border: 1px solid var(--color-card-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          height: 100%;
          min-height: 480px;
          display: flex;
          flex-direction: column;
        }

        .map-card-header {
          background: var(--gradient-wood-header);
          color: #FAF5EC;
          padding: 1rem 1.4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px solid var(--color-gold);
        }

        .map-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--color-gold);
          font-weight: 600;
          font-size: 0.88rem;
        }

        .map-coord-text {
          font-size: 0.78rem;
          color: var(--color-text-muted-gold);
        }

        .map-iframe-container {
          flex: 1;
          min-height: 380px;
          position: relative;
          background: #E5E7EB;
        }

        .map-iframe-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .map-footer-bar {
          background: #FFFFFF;
          padding: 1.15rem 1.4rem;
          border-top: 1px solid var(--color-card-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .map-footer-info {
          display: flex;
          flex-direction: column;
        }

        .map-footer-info strong {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          color: var(--color-walnut);
        }

        .map-footer-info span {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        @media (max-width: 600px) {
          .map-footer-bar {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
