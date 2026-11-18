import React from 'react';

export default function ServiceCard({ service, isHindi }) {
  const renderIcon = (type) => {
    switch (type) {
      case 'consultation':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
            <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
            <circle cx="20" cy="10" r="2" />
          </svg>
        );
      case 'prenatal':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'delivery':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a8.38 8.38 0 0 1 .5-2 8 8 0 0 1 12 0 8.38 8.38 0 0 1 .5 2" />
            <path d="M18 10a4 4 0 0 1 4 4v1" />
          </svg>
        );
      case 'gynec-surgery':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <line x1="12" y1="8" x2="12" y2="14" />
            <line x1="9" y1="11" x2="15" y2="11" />
          </svg>
        );
      case 'surgery':
      default:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="15" x2="15" y2="15" />
            <line x1="12" y1="12" x2="12" y2="18" />
          </svg>
        );
    }
  };

  return (
    <div className="service-card">
      <div className="service-icon-box">
        {renderIcon(service.icon)}
      </div>

      <h3 className="service-title">
        {isHindi ? service.hindiTitle : service.title}
      </h3>

      <div className="service-divider" />

      <p className="service-desc">
        {isHindi ? service.hindiDescription : service.description}
      </p>

      <style>{`
        .service-card {
          background: #FFFFFF;
          border: 1px solid var(--color-card-border);
          border-radius: var(--radius-md);
          padding: 2rem 1.75rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(201, 162, 75, 0.45);
        }

        .service-icon-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: var(--radius-sm);
          background: rgba(201, 162, 75, 0.12);
          border: 1px solid var(--color-gold);
          color: var(--color-maroon);
          margin-bottom: 1.25rem;
          transition: background var(--transition-fast), color var(--transition-fast);
        }

        .service-card:hover .service-icon-box {
          background: var(--color-maroon);
          color: #FAF5EC;
          border-color: var(--color-maroon);
        }

        .service-title {
          font-size: 1.35rem;
          color: var(--color-walnut);
          margin-bottom: 0.5rem;
          font-family: var(--font-serif);
          font-weight: 700;
        }

        .service-divider {
          width: 36px;
          height: 2px;
          background: var(--color-gold);
          margin-bottom: 0.85rem;
          border-radius: 1px;
        }

        .service-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
}
