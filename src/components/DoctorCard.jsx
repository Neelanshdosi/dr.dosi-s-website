import React from 'react';

/**
 * DoctorCard Component
 * Displays individual doctor profile with qualifications, specialty, and focus areas.
 * Editorial, bespoke layout without initials avatars.
 */
export default function DoctorCard({ doctor, isHindi, t, onBookClick }) {
  const isQualificationsPending = doctor.degrees && doctor.degrees.includes('Add qualifications');

  const focusList = isHindi && doctor.hindiFocusAreas 
    ? doctor.hindiFocusAreas 
    : doctor.focusAreas;

  return (
    <article className="doctor-card">
      {/* Editorial Header Banner */}
      <div className="doctor-card-header">
        {doctor.photo && (
          <div className="doctor-photo-wrap">
            <img
              src={doctor.photo}
              alt={isHindi ? doctor.hindiName : doctor.name}
              className="doctor-photo-img"
              loading="lazy"
            />
          </div>
        )}

        <div className="doctor-header-content">
          <div className="doctor-role-eyebrow">
            <span className="caduceus-icon" aria-hidden="true">⚕</span>
            <span>{isHindi ? doctor.hindiSpecialty : doctor.specialty}</span>
          </div>

          <h3 className="doctor-name">
            {isHindi ? doctor.hindiName : doctor.name}
          </h3>

          <div className="doctor-degrees-row">
            {isQualificationsPending ? (
              <span className="badge-pending" title="TODO: Update qualifications in clinic.js">
                <span className="todo-indicator">TODO:</span> [Add qualifications]
              </span>
            ) : (
              <span className="badge-confirmed">{doctor.degrees}</span>
            )}
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="doctor-card-body">
        {/* Bio / Description */}
        <p className="doctor-bio">
          {isHindi ? doctor.hindiBio : doctor.bio}
        </p>

        {/* Specialized Areas */}
        <div className="doctor-focus-section">
          <h4 className="focus-heading">{t('doctorFocusAreasLabel')}</h4>
          <ul className="focus-list">
            {focusList.map((item, index) => (
              <li key={index} className="focus-item">
                <span className="focus-bullet" aria-hidden="true">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Consult CTA */}
        <div className="doctor-card-actions">
          <button
            type="button"
            onClick={onBookClick}
            className="btn btn-primary doctor-cta-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>
              {isHindi ? "परामर्श हेतु संपर्क करें" : "Book Consultation"}
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .doctor-card {
          background: #FFFFFF;
          border: 1px solid var(--color-card-border);
          border-top: 3px solid var(--color-gold);
          border-radius: 0;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .doctor-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(201, 162, 75, 0.45);
        }

        .doctor-card-header {
          background: var(--gradient-wood-header);
          color: #FAF5EC;
          padding: 2rem 2.25rem 1.75rem 2.25rem;
          border-bottom: 1px solid rgba(201, 162, 75, 0.3);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
          text-align: left;
        }

        .doctor-photo-wrap {
          margin-bottom: 0.75rem;
        }

        .doctor-photo-img {
          width: 80px;
          height: 80px;
          border-radius: 0;
          object-fit: cover;
          border: 2px solid var(--color-gold);
        }

        .doctor-role-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--color-text-muted-gold);
          font-weight: 600;
        }

        .caduceus-icon {
          font-size: 0.95rem;
          color: var(--color-gold);
        }

        .doctor-name {
          font-family: var(--font-serif);
          font-size: 2.15rem;
          line-height: 1.15;
          color: #FFFFFF;
          margin: 0;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .doctor-degrees-row {
          margin-top: 0.35rem;
        }

        .badge-confirmed {
          background: rgba(201, 162, 75, 0.18);
          color: #F7E7C4;
          border: 1px solid rgba(201, 162, 75, 0.5);
          padding: 0.25rem 0.85rem;
          border-radius: 0;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          display: inline-block;
        }

        .badge-pending {
          background: #FEF3C7;
          color: #92400E;
          border: 1px dashed #D97706;
          padding: 0.25rem 0.65rem;
          border-radius: 0;
          font-size: 0.82rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .todo-indicator {
          background: #B45309;
          color: #FFFFFF;
          padding: 1px 5px;
          border-radius: 0;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .doctor-card-body {
          padding: 2rem 2.25rem 2.25rem 2.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        @media (max-width: 480px) {
          .doctor-card-header {
            padding: 1.5rem 1.25rem;
          }
          .doctor-name {
            font-size: 1.75rem;
          }
          .doctor-card-body {
            padding: 1.5rem 1.25rem;
          }
        }

        .doctor-bio {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          text-align: left;
          margin-bottom: 1.5rem;
        }

        .doctor-focus-section {
          background: var(--color-cream);
          border: 1px solid rgba(201, 162, 75, 0.25);
          border-radius: 0;
          padding: 1.35rem 1.5rem;
          margin-bottom: 1.75rem;
          flex: 1;
        }

        .focus-heading {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-oak);
          margin-bottom: 0.85rem;
          font-family: var(--font-sans);
          font-weight: 700;
        }

        .focus-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .focus-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.92rem;
          line-height: 1.5;
          color: var(--color-text-primary);
        }

        .focus-bullet {
          color: var(--color-gold);
          font-size: 0.75rem;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .doctor-card-actions {
          margin-top: auto;
        }

        .doctor-cta-btn {
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </article>
  );
}
