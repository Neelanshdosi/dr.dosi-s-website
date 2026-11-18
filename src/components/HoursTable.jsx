import React from 'react';
import { CLINIC_INFO } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';

export default function HoursTable() {
  const { t, isHindi } = useLanguage();

  const scheduleRows = [
    {
      day: isHindi ? "सोमवार (Monday)" : "Monday",
      hours: "10:30 AM – 5:30 PM",
      status: "open"
    },
    {
      day: isHindi ? "मंगलवार (Tuesday)" : "Tuesday",
      hours: "10:30 AM – 5:30 PM",
      status: "open"
    },
    {
      day: isHindi ? "बुधवार (Wednesday)" : "Wednesday",
      hours: "10:30 AM – 5:30 PM",
      status: "open"
    },
    {
      day: isHindi ? "गुरुवार (Thursday)" : "Thursday",
      hours: "10:30 AM – 5:30 PM",
      status: "open"
    },
    {
      day: isHindi ? "शुक्रवार (Friday)" : "Friday",
      hours: "10:30 AM – 5:30 PM",
      status: "open"
    },
    {
      day: isHindi ? "शनिवार (Saturday)" : "Saturday",
      hours: "10:30 AM – 5:30 PM",
      status: "open"
    },
    {
      day: isHindi ? "रविवार (Sunday)" : "Sunday",
      hours: isHindi ? CLINIC_INFO.hours.hindiSunday : CLINIC_INFO.hours.sunday,
      status: "closed"
    }
  ];

  return (
    <div className="hours-table-card">
      <div className="hours-card-header">
        <div className="hours-title-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <h3 className="hours-header-title">{t('hoursTitle')}</h3>
        </div>
        <div className="today-badge">
          <span className="live-dot" />
          <span>{isHindi ? "नियमित परामर्श" : "Consultation Schedule"}</span>
        </div>
      </div>

      <table className="schedule-table">
        <tbody>
          {scheduleRows.map((item, idx) => (
            <tr key={idx} className={`schedule-row ${item.status === 'closed' ? 'row-closed' : ''}`}>
              <td className="day-cell">{item.day}</td>
              <td className="time-cell">
                <span className={`status-tag ${item.status}`}>
                  {item.hours}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Note: Please call ahead to confirm timings */}
      <div className="hours-notice-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p className="notice-text">
          {isHindi ? CLINIC_INFO.hours.hindiNote : CLINIC_INFO.hours.note}
        </p>
      </div>

      <style>{`
        .hours-table-card {
          background: #FFFFFF;
          border: 1px solid var(--color-card-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .hours-card-header {
          background: var(--gradient-wood-header);
          color: #FAF5EC;
          padding: 1.15rem 1.4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px solid var(--color-gold);
        }

        .hours-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .hours-title-wrap svg {
          color: var(--color-gold);
        }

        .hours-header-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: #FAF5EC;
          margin: 0;
        }

        .today-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.12);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          color: var(--color-text-muted-gold);
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34D399;
        }

        .schedule-table {
          width: 100%;
          border-collapse: collapse;
        }

        .schedule-row {
          border-bottom: 1px solid rgba(139, 90, 43, 0.08);
          transition: background var(--transition-fast);
        }

        .schedule-row:hover {
          background: rgba(250, 245, 236, 0.6);
        }

        .row-closed {
          background: rgba(122, 31, 43, 0.03);
        }

        .day-cell {
          padding: 0.75rem 1.4rem;
          font-size: 0.92rem;
          color: var(--color-text-primary);
          font-weight: 500;
        }

        .time-cell {
          padding: 0.75rem 1.4rem;
          text-align: right;
        }

        @media (max-width: 440px) {
          .day-cell, .time-cell {
            padding: 0.65rem 0.75rem;
            font-size: 0.85rem;
          }
          .hours-card-header {
            padding: 0.9rem 1rem;
          }
          .hours-notice-box {
            padding: 0.75rem 1rem;
          }
        }

        .status-tag {
          font-size: 0.86rem;
          font-weight: 600;
        }

        .status-tag.open {
          color: var(--color-walnut);
        }

        .status-tag.closed {
          color: var(--color-maroon);
          background: rgba(122, 31, 43, 0.08);
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          display: inline-block;
        }

        .hours-notice-box {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.9rem 1.4rem;
          background: var(--color-cream);
          border-top: 1px solid rgba(201, 162, 75, 0.25);
          color: var(--color-walnut);
        }

        .hours-notice-box svg {
          color: var(--color-maroon);
          flex-shrink: 0;
        }

        .notice-text {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-walnut);
          margin: 0;
        }
      `}</style>
    </div>
  );
}
