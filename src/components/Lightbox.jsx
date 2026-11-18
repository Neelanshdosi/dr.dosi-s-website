import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  const { t, isHindi } = useLanguage();
  const currentImage = images[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!currentImage) return null;

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged photo viewer"
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="lightbox-top-bar">
          <span className="lightbox-counter">
            {activeIndex + 1} / {images.length}
          </span>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label={t('closeLightbox')}
            title={t('closeLightbox')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Main Image Frame */}
        <div className="lightbox-stage">
          <button
            type="button"
            className="lightbox-nav-btn prev-btn"
            onClick={onPrev}
            aria-label={t('previousImage')}
            title={t('previousImage')}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="lightbox-image-box">
            <img
              src={currentImage.src}
              alt={isHindi ? currentImage.hindiAlt : currentImage.alt}
              className="lightbox-image"
            />
          </div>

          <button
            type="button"
            className="lightbox-nav-btn next-btn"
            onClick={onNext}
            aria-label={t('nextImage')}
            title={t('nextImage')}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Caption */}
        <div className="lightbox-caption">
          <h3>{isHindi ? currentImage.hindiCaption : currentImage.caption}</h3>
          <p>{isHindi ? currentImage.hindiAlt : currentImage.alt}</p>
        </div>
      </div>

      <style>{`
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(20, 10, 5, 0.92);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-content {
          position: relative;
          max-width: 960px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lightbox-top-bar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          color: #FAF5EC;
        }

        .lightbox-counter {
          font-size: 0.9rem;
          color: var(--color-gold);
          font-weight: 600;
        }

        .lightbox-close-btn {
          color: #FAF5EC;
          padding: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(201, 162, 75, 0.3);
          cursor: pointer;
          transition: background var(--transition-fast), color var(--transition-fast);
        }

        .lightbox-close-btn:hover {
          background: var(--color-maroon);
          color: #FFFFFF;
        }

        .lightbox-stage {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-image-box {
          max-height: 75vh;
          overflow: hidden;
          border-radius: var(--radius-md);
          border: 2px solid var(--color-gold);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
          background: #111;
        }

        .lightbox-image {
          max-height: 75vh;
          max-width: 100%;
          object-fit: contain;
          display: block;
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(38, 22, 13, 0.85);
          border: 1px solid var(--color-gold);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          z-index: 10;
        }

        .prev-btn { left: 10px; }
        .next-btn { right: 10px; }

        .lightbox-nav-btn:hover {
          background: var(--color-maroon);
          color: #FFFFFF;
          border-color: var(--color-maroon);
        }

        @media (max-width: 600px) {
          .lightbox-nav-btn {
            width: 38px;
            height: 38px;
          }
          .prev-btn { left: 4px; }
          .next-btn { right: 4px; }
        }

        .lightbox-caption {
          margin-top: 1rem;
          text-align: center;
          color: #FAF5EC;
          max-width: 700px;
        }

        .lightbox-caption h3 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--color-gold);
          margin-bottom: 0.25rem;
        }

        .lightbox-caption p {
          font-size: 0.88rem;
          color: #D6C7B7;
        }
      `}</style>
    </div>
  );
}
