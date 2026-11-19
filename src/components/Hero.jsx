import React from 'react';
import { CLINIC_INFO } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, isHindi } = useLanguage();
  const primaryPhone = CLINIC_INFO.phones[0];
  const drJinesh = CLINIC_INFO.doctors.find(d => d.id === 'dr-jinesh-dosi') || CLINIC_INFO.doctors[1];
  const drManisha = CLINIC_INFO.doctors.find(d => d.id === 'dr-manisha-dosi') || CLINIC_INFO.doctors[0];

  return (
    <section id="home" className="hero-section">
      <div className="hero-backdrop-pattern" aria-hidden="true" />
      
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <h1 className="hero-heading">
              {t('heroHeading')}
            </h1>

            <div className="hero-gold-rule" />

            <p className="hero-subheading">
              {t('heroSubheading')}
            </p>

            {/* Doctor Cards: Left-aligned with 2px gold left line, equal height */}
            <div className="hero-doctors-grid">
              {/* Dr. Jinesh Dosi (Surgeon) on the left */}
              <div className="hero-doc-card">
                {drJinesh.photo && (
                  <img
                    src={drJinesh.photo}
                    alt={drJinesh.name}
                    className="hero-doc-photo"
                    width="72"
                    height="72"
                  />
                )}
                <div className="hero-doc-body">
                  <span className="hero-doc-role">
                    {isHindi ? "सर्जन" : "SURGEON"}
                  </span>
                  <h3 className="hero-doc-name">
                    {isHindi ? drJinesh.hindiName : drJinesh.name}
                  </h3>
                  <span className="hero-doc-degrees">
                    {drJinesh.degrees}
                  </span>
                  <a href="#doctors" className="hero-doc-link">
                    {isHindi ? "प्रोफ़ाइल देखें →" : "View profile →"}
                  </a>
                </div>
              </div>

              {/* Dr. Manisha Dosi (Gynecologist) on the right */}
              <div className="hero-doc-card">
                {drManisha.photo && (
                  <img
                    src={drManisha.photo}
                    alt={drManisha.name}
                    className="hero-doc-photo"
                    width="72"
                    height="72"
                  />
                )}
                <div className="hero-doc-body">
                  <span className="hero-doc-role">
                    {isHindi ? "स्त्री रोग विशेषज्ञ" : "GYNECOLOGIST"}
                  </span>
                  <h3 className="hero-doc-name">
                    {isHindi ? drManisha.hindiName : drManisha.name}
                  </h3>
                  <span className="hero-doc-degrees">
                    {drManisha.degrees}
                  </span>
                  <a href="#doctors" className="hero-doc-link">
                    {isHindi ? "प्रोफ़ाइल देखें →" : "View profile →"}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <a
                href={`tel:${primaryPhone.tel}`}
                className="btn btn-primary hero-btn"
                aria-label={`Call to book consultation: ${primaryPhone.display}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{t('callToBook')}</span>
              </a>

              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary hero-btn"
                aria-label="Get directions to clinic on Google Maps"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>{t('getDirections')}</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="hero-trust-list">
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{isHindi ? "25+ वर्षों का विश्वास" : "25+ years of trust"}</span>
              </div>
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{isHindi ? "गूगल पर 4.6 रेटिंग" : "4.6 rating on Google"}</span>
              </div>
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{isHindi ? "सहानुभूतिपूर्ण देखभाल" : "Gentle patient care"}</span>
              </div>
            </div>
          </div>

          {/* Hero Right Framed Image - Full Image Fully Visible */}
          <div className="hero-visual">
            <div className="framed-exterior-card">
              <div className="card-outer-frame">
                <div className="exterior-image-wrapper">
                  <img
                    src="/assets/exterior.jpg"
                    alt="Dr. Dosi's Surgery & Gynec Clinic Exterior in Mandsaur"
                    className="hero-exterior-img"
                    loading="eager"
                  />
                </div>
                {/* Clinic Name beneath photo so the full image is 100% visible */}
                <div className="exterior-caption-bar">
                  <strong className="caption-clinic-name">
                    {isHindi ? CLINIC_INFO.hindiName : CLINIC_INFO.name}
                  </strong>
                  <span className="caption-clinic-loc">
                    {isHindi ? "कंबल केंद्र रोड, नई आबादी, मंदसौर" : "Kambal Kendra Road, Nai Abaadi, Mandsaur"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background: var(--gradient-wood-header);
          color: #FAF5EC;
          padding: 4.5rem 0 5rem 0;
          overflow: hidden;
          border-bottom: 2px solid rgba(201, 162, 75, 0.3);
        }

        .hero-backdrop-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(#C9A24B 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 4rem;
          }
        }

        .hero-heading {
          font-size: 2.75rem;
          line-height: 1.18;
          color: #FFFFFF;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
        }

        @media (max-width: 640px) {
          .hero-heading {
            font-size: 2.15rem;
          }
        }

        @media (max-width: 380px) {
          .hero-heading {
            font-size: 1.82rem;
          }
        }

        .hero-gold-rule {
          width: 80px;
          height: 3px;
          background: var(--gradient-gold-line);
          margin-bottom: 1.25rem;
          border-radius: 2px;
        }

        .hero-subheading {
          font-size: 1.15rem;
          line-height: 1.65;
          color: #E6D7C8;
          margin-bottom: 2rem;
          max-width: 600px;
        }

        /* Doctor Cards Grid */
        .hero-doctors-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 2.25rem;
          align-items: stretch;
        }

        @media (min-width: 640px) {
          .hero-doctors-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
          }
        }

        .hero-doc-card {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 24px;
          background: rgba(42, 26, 16, 0.45);
          border-left: 2px solid var(--color-gold);
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-radius: 0;
          height: 100%;
          box-sizing: border-box;
          backdrop-filter: blur(4px);
          transition: background var(--transition-fast);
        }

        .hero-doc-card:hover {
          background: rgba(59, 36, 22, 0.65);
        }

        .hero-doc-photo {
          width: 72px;
          height: 72px;
          object-fit: cover;
          border-radius: 0;
          border: 1px solid rgba(201, 162, 75, 0.35);
          flex-shrink: 0;
        }

        .hero-doc-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          height: 100%;
          width: 100%;
        }

        .hero-doc-role {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-text-muted-gold);
          font-weight: 600;
          margin-bottom: 6px;
          display: block;
        }

        .hero-doc-name {
          font-family: var(--font-serif);
          font-size: 28px;
          line-height: 1.15;
          color: #FAF5EC;
          font-weight: 600;
          margin: 0 0 4px 0;
        }

        @media (max-width: 480px) {
          .hero-doc-name {
            font-size: 24px;
          }
        }

        .hero-doc-degrees,
        .hero-doc-hiname {
          font-size: 0.88rem;
          color: #D4C3B3;
          font-weight: 500;
          letter-spacing: 0.03em;
          margin-bottom: 12px;
          display: block;
        }

        .hero-doc-link {
          margin-top: auto;
          padding-top: 8px;
          font-size: 0.85rem;
          color: var(--color-gold);
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color var(--transition-fast);
        }

        .hero-doc-link:hover {
          color: #FAF5EC;
          text-decoration: underline;
        }

        /* CTA buttons */
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 0;
        }

        .hero-btn {
          flex: 1 1 200px;
          max-width: 260px;
        }

        @media (max-width: 480px) {
          .hero-btn {
            max-width: 100%;
            flex: 1 1 100%;
          }
        }

        /* Trust list */
        .hero-trust-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          padding-top: 1.25rem;
          margin-top: 1.75rem;
          border-top: 1px solid rgba(201, 162, 75, 0.2);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          color: #E2D2C3;
          font-size: 0.88rem;
          font-weight: 500;
        }

        /* Visual Framed Card - Full Aspect Ratio 1024x922 Display */
        .hero-visual {
          display: flex;
          justify-content: center;
        }

        .framed-exterior-card {
          position: relative;
          padding: 8px;
          background: linear-gradient(145deg, #4A2E1A 0%, #2A170C 100%);
          border: 1px solid rgba(201, 162, 75, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
          width: 100%;
          max-width: 520px;
        }

        .card-outer-frame {
          overflow: hidden;
          position: relative;
          background: #1C1008;
          border: 1px solid rgba(201, 162, 75, 0.3);
        }

        .exterior-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1024 / 922;
          overflow: hidden;
          background: #170E07;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-exterior-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          transition: transform 0.4s ease;
        }

        .framed-exterior-card:hover .hero-exterior-img {
          transform: scale(1.02);
        }

        .exterior-caption-bar {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 0.85rem 1rem;
          background: #24140B;
          border-top: 1px solid rgba(201, 162, 75, 0.3);
          text-align: center;
        }

        .caption-clinic-name {
          font-family: var(--font-serif);
          font-size: 1.18rem;
          color: #FFFFFF;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .caption-clinic-loc {
          font-size: 0.8rem;
          color: var(--color-text-muted-gold);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
