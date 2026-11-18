import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="lang-toggle-btn"
      aria-label={`Switch language to ${language === 'en' ? 'Hindi' : 'English'}`}
      title={language === 'en' ? 'हिंदी में देखें' : 'View in English'}
    >
      <span className={`lang-chip ${language === 'en' ? 'active' : ''}`}>EN</span>
      <span className="lang-sep">/</span>
      <span className={`lang-chip ${language === 'hi' ? 'active' : ''}`}>हिंदी</span>
      <style>{`
        .lang-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid var(--color-gold);
          border-radius: var(--radius-pill);
          padding: 0.35rem 0.75rem;
          color: var(--color-text-light);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .lang-toggle-btn:hover {
          background: rgba(201, 162, 75, 0.25);
          border-color: #E7CB87;
        }
        .lang-chip {
          transition: color var(--transition-fast), transform var(--transition-fast);
          opacity: 0.7;
        }
        .lang-chip.active {
          color: var(--color-gold);
          opacity: 1;
          font-weight: 700;
        }
        .lang-sep {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.75rem;
        }
      `}</style>
    </button>
  );
}
