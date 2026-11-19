import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';
import Lightbox from './Lightbox';

export default function Gallery() {
  const { t, isHindi } = useLanguage();
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => 
      prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1
    );
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => 
      prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="gallery-section section-padding bg-cream-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            {isHindi ? "परिसर दर्शन" : "Clinical Facilities"}
          </span>
          <h2 className="section-title">
            {t('gallerySectionTitle')}
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            {t('gallerySectionSubtitle')}
          </p>
        </div>

        {/* Gallery Grid: 3 clinic photos */}
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`${t('clickToEnlarge')}: ${isHindi ? item.hindiCaption : item.caption}`}
            >
              <div className="gallery-img-container">
                <img
                  src={item.src}
                  alt={isHindi ? item.hindiAlt : item.alt}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="zoom-icon-circle">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                  <span className="view-text">{t('clickToEnlarge')}</span>
                </div>
              </div>

              <div className="gallery-caption-bar">
                <h3 className="gallery-item-title">
                  {isHindi ? item.hindiCaption : item.caption}
                </h3>
                <span className="gallery-subtext">
                  {isHindi ? item.hindiAlt : item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <Lightbox
          images={GALLERY_ITEMS}
          activeIndex={activePhotoIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}

      <style>{`
        .gallery-section {
          background-color: var(--color-cream-subtle);
          border-bottom: 1px solid var(--color-card-border);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 600px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (min-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.75rem;
          }
        }

        .gallery-card {
          background: #FFFFFF;
          border-radius: 0;
          overflow: hidden;
          border: 1px solid var(--color-card-border);
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
          outline: none;
        }

        .gallery-card:hover,
        .gallery-card:focus-visible {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-gold);
        }

        .gallery-img-container {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #2D1A10;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(43, 23, 13, 0.65);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .gallery-card:hover .gallery-overlay,
        .gallery-card:focus-visible .gallery-overlay {
          opacity: 1;
        }

        .zoom-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-maroon);
          border: 1px solid var(--color-gold);
          color: #FAF5EC;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .view-text {
          font-size: 0.82rem;
          color: #FAF5EC;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .gallery-caption-bar {
          padding: 1.15rem 1.25rem;
          background: #FFFFFF;
        }

        .gallery-item-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--color-walnut);
          margin-bottom: 0.25rem;
        }

        .gallery-subtext {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
