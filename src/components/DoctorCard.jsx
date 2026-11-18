import React from 'react';

/**
 * DoctorCard Component
 * Displays individual doctor profile with qualifications, specialty, and focus areas.
 */
export default function DoctorCard({ doctor, isHindi, t, onBookClick }) {
  const isQualificationsPending = doctor.degrees && doctor.degrees.includes('Add qualifications');

  const focusList = isHindi && doctor.hindiFocusAreas 
    ? doctor.hindiFocusAreas 
    : doctor.focusAreas;

  return (
    <article className="doctor-card">
      {/* Top Banner / Avatar Header */}
      <div className="card-header-wood">
        <div className="avatar-wrapper">
          {doctor.photo ? (
            <img
              src={doctor.photo}
              alt={isHindi ? doctor.hindiName : doctor.name}
              className="doctor-photo-img"
              loading="lazy"
            />
          ) : (
            // Elegant Initials Avatar with Clinic Logo Seal
            <div className="doctor-initials-avatar" aria-label={`Initials avatar for ${doctor.name}`}>
              <span className="initials-letters">{doctor.initials}</span>
              <span className="caduceus-icon" aria-hidden="true">⚕</span>
              <img
                src="/assets/logo.jpg"
                alt="Clinic Emblem"
                className="avatar-clinic-seal"
                width="30"
                height="30"
              />
            </div>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="doctor-card-body">
        <div className="doctor-identity">
          <h3 className="doctor-name">
            {isHindi ? doctor.hindiName : doctor.name}
          </h3>

          <div className="doctor-degrees-badge">
            {isQualificationsPending ? (
              <span className="badge-pending" title="TODO: Update qualifications in clinic.js">
                <span className="todo-indicator">TODO:</span> [Add qualifications]
              </span>
            ) : (
              <span className="badge-confirmed">{doctor.degrees}</span>
            )}
          </div>

          <p className="doctor-specialty">
            {isHindi ? doctor.hindiSpecialty : doctor.specialty}
          </p>
        </div>

        <div className="doctor-gold-divider" />

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
            className="btn btn-primary"
            style={{ width: '100%' }}
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
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .doctor-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .card-header-wood {
          background: var(--gradient-wood-header);
          height: 110px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          border-bottom: 2px solid var(--color-gold);
        }

        .avatar-wrapper {
          transform: translateY(50%);
        }

        .doctor-initials-avatar {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: linear-gradient(145deg, #4F2E1B 0%, #2E180E 100%);
          border: 3.5px solid var(--color-gold);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--color-gold);
          position: relative;
        }

        .initials-letters {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.05em;
          color: #FAF5EC;
        }

        .caduceus-icon {
          font-size: 0.85rem;
          color: var(--color-gold);
          margin-top: 2px;
        }

        .avatar-clinic-seal {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid var(--color-gold);
          background: #3B2416;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
          object-fit: cover;
        }

        .doctor-photo-img {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          border: 3.5px solid var(--color-gold);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
        }

        .doctor-card-body {
          padding: 4rem 1.75rem 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        @media (max-width: 420px) {
          .doctor-card-body {
            padding: 3.75rem 1.15rem 1.5rem 1.15rem;
          }
          .doctor-name {
            font-size: 1.55rem;
          }
        }

        .doctor-identity {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .doctor-name {
          font-size: 1.85rem;
          color: var(--color-walnut);
          margin-bottom: 0.35rem;
        }

        .doctor-degrees-badge {
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .badge-confirmed {
          background: rgba(139, 90, 43, 0.1);
          color: var(--color-oak);
          border: 1px solid rgba(139, 90, 43, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .badge-pending {
          background: #FEF3C7;
          color: #92400E;
          border: 1px dashed #D97706;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-pill);
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
          border-radius: 4px;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .doctor-specialty {
          font-size: 1.05rem;
          color: var(--color-maroon);
          font-weight: 600;
        }

        .doctor-gold-divider {
          width: 50px;
          height: 2px;
          background: var(--gradient-gold-line);
          margin: 0.75rem auto 1.25rem auto;
        }

        .doctor-bio {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .doctor-focus-section {
          background: var(--color-cream);
          border: 1px solid rgba(201, 162, 75, 0.25);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          margin-bottom: 1.75rem;
          flex: 1;
        }

        .focus-heading {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-oak);
          margin-bottom: 0.75rem;
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
          gap: 0.6rem;
          font-size: 0.9rem;
          line-height: 1.45;
          color: var(--color-text-primary);
        }

        .focus-bullet {
          color: var(--color-gold);
          font-size: 0.75rem;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .doctor-card-actions {
          margin-top: auto;
        }
      `}</style>
    </article>
  );
}
