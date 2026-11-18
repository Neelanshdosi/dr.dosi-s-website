import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, isHindi } = useLanguage();

  const highlights = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
        </svg>
      ),
      title: t('aboutHighlight1Title'),
      desc: t('aboutHighlight1Desc')
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: t('aboutHighlight2Title'),
      desc: t('aboutHighlight2Desc')
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: t('aboutHighlight3Title'),
      desc: t('aboutHighlight3Desc')
    }
  ];

  return (
    <section className="about-section section-padding bg-cream-subtle">
      <div className="container">
        <div className="about-card">
          <div className="about-header">
            <span className="section-tag">{isHindi ? "हमारा दृष्टिकोण" : "Our Healthcare Philosophy"}</span>
            <h2 className="about-heading">{t('aboutHeading')}</h2>
            <div className="gold-divider" />
            <p className="about-text">{t('aboutText')}</p>
          </div>

          <div className="about-highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="about-highlight-box">
                <div className="highlight-icon">{item.icon}</div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--color-cream);
          border-bottom: 1px solid var(--color-card-border);
        }
        .about-card {
          background: #FFFFFF;
          border: 1px solid var(--color-card-border);
          border-radius: var(--radius-lg);
          padding: 3rem 2.5rem;
          box-shadow: var(--shadow-md);
          position: relative;
        }
        @media (max-width: 640px) {
          .about-card {
            padding: 2rem 1.25rem;
          }
        }
        @media (max-width: 380px) {
          .about-card {
            padding: 1.5rem 0.85rem;
          }
        }
        .about-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 2.5rem auto;
        }
        .about-heading {
          font-size: 2.15rem;
          color: var(--color-walnut);
          margin-top: 0.25rem;
        }
        @media (max-width: 640px) {
          .about-heading {
            font-size: 1.75rem;
          }
        }
        .about-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--color-text-secondary);
        }
        .about-highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .about-highlights-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .about-highlight-box {
          background: var(--color-cream);
          border: 1px solid rgba(201, 162, 75, 0.25);
          border-radius: var(--radius-md);
          padding: 1.75rem 1.5rem;
          text-align: center;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .about-highlight-box:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-sm);
        }
        .highlight-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(201, 162, 75, 0.15);
          border: 1px solid var(--color-gold);
          color: var(--color-maroon);
          margin-bottom: 1rem;
        }
        .highlight-title {
          font-size: 1.2rem;
          color: var(--color-walnut);
          margin-bottom: 0.5rem;
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .highlight-desc {
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--color-text-secondary);
        }
      `}</style>
    </section>
  );
}
