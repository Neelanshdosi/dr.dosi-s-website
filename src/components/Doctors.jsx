import React from 'react';
import { CLINIC_INFO } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';
import DoctorCard from './DoctorCard';

export default function Doctors() {
  const { t, isHindi } = useLanguage();
  const primaryPhone = CLINIC_INFO.phones[0];

  const handleBookClick = () => {
    window.location.href = `tel:${primaryPhone.tel}`;
  };

  return (
    <section id="doctors" className="doctors-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            {isHindi ? "अनुभवी परामर्श" : "Expert Medical Team"}
          </span>
          <h2 className="section-title">
            {t('doctorsSectionTitle')}
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            {t('doctorsSectionSubtitle')}
          </p>
        </div>

        {/* Doctors Grid: Two cards side by side on desktop, stacked on mobile */}
        <div className="doctors-grid">
          {CLINIC_INFO.doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              isHindi={isHindi}
              t={t}
              onBookClick={handleBookClick}
            />
          ))}
        </div>

        {/* Timings Reminder Note */}
        <div className="doctors-callout">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>
            {isHindi 
              ? `${CLINIC_INFO.hours.hindiNote} (${CLINIC_INFO.hours.hindiDays}: ${CLINIC_INFO.hours.hindiTimings})` 
              : `${CLINIC_INFO.hours.note} (${CLINIC_INFO.hours.days}: ${CLINIC_INFO.hours.timings})`}
          </span>
        </div>
      </div>

      <style>{`
        .doctors-section {
          background-color: var(--color-cream);
          border-bottom: 1px solid var(--color-card-border);
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
          max-width: 1100px;
          margin: 0 auto 3rem auto;
        }

        @media (min-width: 768px) {
          .doctors-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (min-width: 1400px) {
          .doctors-grid {
            max-width: 1240px;
            gap: 3rem;
          }
        }

        .doctors-callout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: #FFFFFF;
          border: 1px solid rgba(201, 162, 75, 0.35);
          border-radius: var(--radius-pill);
          padding: 0.85rem 1.5rem;
          max-width: 760px;
          margin: 0 auto;
          color: var(--color-walnut);
          font-size: 0.92rem;
          font-weight: 500;
          box-shadow: var(--shadow-sm);
          text-align: center;
        }

        .doctors-callout svg {
          color: var(--color-oak);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
