import React from 'react';
import { CLINIC_INFO } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingCallButton() {
  const { t } = useLanguage();
  const primaryPhone = CLINIC_INFO.phones[0];

  return (
    <a
      href={`tel:${primaryPhone.tel}`}
      className="floating-call-btn"
      aria-label={`Call Dr. Dosi's Clinic now at ${primaryPhone.display}`}
    >
      <span className="floating-pulse-ring" aria-hidden="true" />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <span className="floating-btn-text">{t('callNow')}</span>

      <style>{`
        .floating-pulse-ring {
          position: absolute;
          inset: -4px;
          border-radius: var(--radius-pill);
          border: 2px solid rgba(201, 162, 75, 0.6);
          animation: pulseGlow 2.2s infinite cubic-bezier(0.24, 0, 0.38, 1);
          pointer-events: none;
        }

        @keyframes pulseGlow {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.15);
            opacity: 0;
          }
          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        .floating-btn-text {
          font-weight: 700;
          letter-spacing: 0.03em;
        }
      `}</style>
    </a>
  );
}
