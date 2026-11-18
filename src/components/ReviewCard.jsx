import React from 'react';

export default function ReviewCard({ review, isHindi }) {
  return (
    <article className="review-card">
      {/* Review Header: Author + Google Badge */}
      <div className="review-card-top">
        <div className="author-info">
          <div className="author-avatar" aria-hidden="true">
            {review.author.charAt(0)}
          </div>
          <div className="author-meta">
            <h4 className="author-name">{review.author}</h4>
            <div className="review-stars" aria-label="5 out of 5 stars">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="gold-star" aria-hidden="true">★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Google review label */}
        <div className="google-badge">
          <svg className="google-g-icon" width="14" height="14" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span>{review.source}</span>
        </div>
      </div>

      {/* Review Body */}
      <blockquote className="review-quote">
        <p className="review-text">{review.text}</p>
      </blockquote>

      {/* Owner Reply if present */}
      {review.ownerReply && (
        <div className="owner-reply-box">
          <div className="owner-reply-header">
            <span className="owner-reply-icon">↳</span>
            <strong>
              {isHindi ? review.ownerReply.hindiAuthor : review.ownerReply.author}
            </strong>
          </div>
          <p className="owner-reply-text">
            "{review.ownerReply.text}"
          </p>
        </div>
      )}

      <style>{`
        .review-card {
          background: #FFFFFF;
          border: 1px solid var(--color-card-border);
          border-radius: var(--radius-md);
          padding: 1.65rem 1.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .review-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .review-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1.15rem;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-oak) 0%, var(--color-walnut) 100%);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
          border: 1px solid var(--color-gold);
        }

        .author-meta {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--color-walnut);
          line-height: 1.25;
          margin-bottom: 3px;
        }

        .review-stars {
          display: flex;
          gap: 2px;
        }

        .gold-star {
          color: var(--color-star);
          font-size: 1rem;
          line-height: 1;
        }

        .google-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          padding: 3px 8px;
          border-radius: var(--radius-pill);
          font-size: 0.72rem;
          font-weight: 600;
          color: #5F6368;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .google-g-icon {
          flex-shrink: 0;
        }

        .review-quote {
          flex: 1;
          margin: 0;
        }

        .review-text {
          font-size: 0.94rem;
          line-height: 1.6;
          color: var(--color-text-primary);
          white-space: pre-line;
          word-break: break-word;
        }

        /* Owner Reply */
        .owner-reply-box {
          margin-top: 1.25rem;
          padding: 0.85rem 1rem;
          background: var(--color-cream);
          border-left: 3px solid var(--color-maroon);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .owner-reply-header {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--color-maroon);
          margin-bottom: 0.25rem;
        }

        .owner-reply-icon {
          font-size: 1rem;
          line-height: 1;
        }

        .owner-reply-text {
          font-size: 0.86rem;
          font-style: italic;
          line-height: 1.45;
          color: var(--color-text-secondary);
        }
      `}</style>
    </article>
  );
}
