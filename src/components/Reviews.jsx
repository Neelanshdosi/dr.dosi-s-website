import React, { useRef } from 'react';
import { GOOGLE_REVIEWS } from '../data/reviews';
import { CLINIC_INFO } from '../data/clinic';
import { useLanguage } from '../context/LanguageContext';
import ReviewCard from './ReviewCard';

export default function Reviews() {
  const { t, isHindi } = useLanguage();
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="reviews-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="rating-pill">
            <span className="rating-number">4.6</span>
            <div className="pill-stars">
              <span className="gold-star">★</span>
              <span className="gold-star">★</span>
              <span className="gold-star">★</span>
              <span className="gold-star">★</span>
              <span className="gold-star" style={{ opacity: 0.75 }}>★</span>
            </div>
            <span className="pill-source">Google Reviews</span>
          </div>

          <h2 className="section-title">
            {t('reviewsSectionTitle')}
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            {t('reviewsSectionSubtitle')}
          </p>
        </div>

        {/* Carousel Navigation Controls (Desktop/Tablet) */}
        <div className="carousel-controls-bar">
          <div className="swipe-hint-text">
            <span>{t('swipeHint')}</span>
          </div>
          <div className="carousel-nav-arrows">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={scrollLeft}
              aria-label="Previous reviews"
              title="Previous reviews"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={scrollRight}
              aria-label="Next reviews"
              title="Next reviews"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll-Snap Carousel Container */}
        <div className="reviews-carousel-wrapper" ref={carouselRef} role="region" aria-label="Patient Reviews Carousel">
          {GOOGLE_REVIEWS.map((review) => (
            <div key={review.id} className="review-carousel-item">
              <ReviewCard review={review} isHindi={isHindi} />
            </div>
          ))}
        </div>

        {/* Action Button: Read more reviews on Google */}
        <div className="reviews-footer-action">
          <a
            href={CLINIC_INFO.googleListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary-light"
            aria-label="Read more patient reviews on Google"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>{t('readMoreOnGoogle')}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .reviews-section {
          background-color: var(--color-cream);
          border-bottom: 1px solid var(--color-card-border);
        }

        .rating-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFFFFF;
          border: 1px solid rgba(201, 162, 75, 0.4);
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-pill);
          box-shadow: var(--shadow-sm);
          margin-bottom: 1rem;
        }

        .rating-number {
          font-weight: 700;
          color: var(--color-walnut);
          font-size: 1rem;
        }

        .pill-stars {
          display: flex;
          gap: 2px;
        }

        .pill-source {
          font-size: 0.8rem;
          color: var(--color-oak);
          font-weight: 600;
          border-left: 1px solid #E5E7EB;
          padding-left: 0.5rem;
        }

        .carousel-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        @media (max-width: 480px) {
          .carousel-controls-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .swipe-hint-text {
            font-size: 0.8rem;
          }
        }

        .swipe-hint-text {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          font-style: italic;
        }

        .carousel-nav-arrows {
          display: flex;
          gap: 0.5rem;
        }

        .carousel-arrow-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid var(--color-card-border);
          color: var(--color-walnut);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .carousel-arrow-btn:hover {
          background: var(--color-maroon);
          color: #FFFFFF;
          border-color: var(--color-maroon);
        }

        /* Horizontal Carousel with CSS Scroll-Snap */
        .reviews-carousel-wrapper {
          display: flex;
          gap: 1.25rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 0.5rem 0.25rem 1.75rem 0.25rem;
          scrollbar-width: thin;
          scrollbar-color: var(--color-gold) transparent;
        }

        .reviews-carousel-wrapper::-webkit-scrollbar {
          height: 6px;
        }

        .reviews-carousel-wrapper::-webkit-scrollbar-track {
          background: rgba(139, 90, 43, 0.08);
          border-radius: 3px;
        }

        .reviews-carousel-wrapper::-webkit-scrollbar-thumb {
          background-color: var(--color-gold);
          border-radius: 3px;
        }

        .review-carousel-item {
          scroll-snap-align: start;
          flex: 0 0 86%;
          max-width: 380px;
        }

        @media (min-width: 640px) {
          .review-carousel-item {
            flex: 0 0 47%;
          }
        }

        @media (min-width: 992px) {
          .review-carousel-item {
            flex: 0 0 31.8%;
            max-width: 440px;
          }
        }

        .reviews-footer-action {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
        }
      `}</style>
    </section>
  );
}
