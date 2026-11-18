import React from 'react';
import { CLINIC_SERVICES } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from './ServiceCard';

export default function Services() {
  const { t, isHindi } = useLanguage();

  return (
    <section id="services" className="services-section section-padding bg-cream-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            {isHindi ? "विशिष्ट चिकित्सा" : "Areas of Practice"}
          </span>
          <h2 className="section-title">
            {t('servicesSectionTitle')}
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            {t('servicesSectionSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {CLINIC_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isHindi={isHindi}
            />
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: var(--color-cream-subtle);
          border-bottom: 1px solid var(--color-card-border);
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 600px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
