import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const { t, isHindi } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: isHindi
        ? "डॉ. डोसी क्लीनिक मंदसौर में कहां स्थित है?"
        : "Where is Dr. Dosi Clinic located in Mandsaur?",
      a: isHindi
        ? "डॉ. डोसी क्लीनिक दोसी भवन, मनीष टेलीकॉम वाली गली, कंबल केंद्र रोड / दलोदा चौपाटी, नई आबादी, मंदसौर (मध्य प्रदेश) 458001 में मेहता नेत्रालय के पास स्थित है। गूगल मैप्स पर भी क्लीनिक का सीधा रास्ता उपलब्ध है।"
        : "Dr. Dosi Clinic is located at Dosi Bhawan, Manish Telecom Wali Gali, Kambal Kendra Road / Daloda Chopati, Nai Abaadi, Mandsaur, Madhya Pradesh 458001 (near Mehta Netralaya). Direct directions are also accessible via Google Maps."
    },
    {
      q: isHindi
        ? "डॉ. डोसी क्लीनिक में ओपीडी परामर्श का समय क्या है?"
        : "What are the OPD consultation timings at Dr. Dosi Clinic?",
      a: isHindi
        ? "डॉ. डोसी क्लीनिक में ओपीडी परामर्श का नियमित समय सोमवार से शनिवार, सुबह 10:30 बजे से शाम 5:30 बजे तक है। रविवार को क्लीनिक का साप्ताहिक अवकाश रहता है। डॉक्टर्स की उपलब्धता सुनिश्चित करने हेतु आने से पूर्व फोन करना श्रेयस्कर है।"
        : "Regular OPD consultation hours at Dr. Dosi Clinic are Monday through Saturday, 10:30 AM to 5:30 PM. The clinic is closed on Sundays. Calling in advance is recommended to confirm doctor availability."
    },
    {
      q: isHindi
        ? "डॉ. डोसी क्लीनिक में कौन से डॉक्टर्स परामर्श देते हैं?"
        : "Which doctors consult at Dr. Dosi's Clinic?",
      a: isHindi
        ? "डॉ. डोसी क्लीनिक में दो वरिष्ठ विशेषज्ञ सेवाएं देते हैं: डॉ. मनीषा डोसी (MBBS, DGO, महात्मा गांधी मेडिकल कॉलेज इंदौर) – स्त्री रोग विशेषज्ञ, मातृत्व, सुरक्षित प्रसव व सर्जरी विशेषज्ञ; तथा डॉ. जिनेश डोसी (MBBS, MS, गजरा राजा मेडिकल कॉलेज ग्वालियर) – वरिष्ठ सर्जन एवं एंडोस्कोपी विशेषज्ञ।"
        : "Two senior specialists consult at Dr. Dosi's Clinic: Dr. Manisha Dosi (MBBS, DGO, MGMMC Indore) specializing in gynecology, prenatal care, safe deliveries, and gynecological surgeries; and Dr. Jinesh Dosi (MBBS, MS, GRMC Gwalior) specializing in general surgery, endoscopy, and surgical care."
    },
    {
      q: isHindi
        ? "डॉ. डोसी क्लीनिक में अपॉइंटमेंट कैसे बुक करें?"
        : "How do I book an appointment at Dr. Dosi Clinic?",
      a: isHindi
        ? "परामर्श समय लेने अथवा जानकारी हेतु आप सीधे क्लीनिक मोबाइल +91 94258 57236 या लैंडलाइन +91 74223 16913 पर कॉल कर सकते हैं। आप +91 94258 57236 पर व्हाट्सएप संदेश भेजकर भी समय की पुष्टि कर सकते हैं।"
        : "To book an appointment or inquire about OPD consultations, call the clinic directly at +91 94258 57236 or landline +91 74223 16913. You can also connect via WhatsApp at +91 94258 57236."
    },
    {
      q: isHindi
        ? "क्या डॉ. डोसी सर्जरी एवं गायनेक क्लीनिक में इन-हाउस मेडिकल स्टोर उपलब्ध है?"
        : "Is there an in-house pharmacy at Dr. Dosi's Surgery & Gynec Clinic?",
      a: isHindi
        ? "हां, मरीजों की संपूर्ण सुविधा को ध्यान में रखते हुए क्लीनिक परिसर में ही 'डोसी मेडिकल स्टोर्स' (Dosi Medical Stores) संचालित है, जहां सभी आवश्यक दवाइयां, इंजेक्शन और सर्जिकल सामग्री उपलब्ध रहती हैं।"
        : "Yes, Dosi Medical Stores is an on-premises in-house pharmacy located right inside Dr. Dosi's Surgery & Gynec Clinic, dispensing prescribed medicines, injections, and surgical supplies for patient convenience."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section section-padding bg-cream-subtle">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            {isHindi ? "मरीजों के सामान्य प्रश्न" : "Patient Help & Guidance"}
          </span>
          <h2 className="section-title">
            {t('faqSectionTitle')}
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            {t('faqSectionSubtitle')}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="faq-callout">
          <p className="faq-callout-text">
            {isHindi
              ? "क्या आपके पास कोई अन्य सवाल है? सीधे हमारे क्लीनिक पर फोन करें:"
              : "Have another question? Call our clinic desk directly:"}
          </p>
          <a href="tel:+919425857236" className="faq-callout-link">
            📞 +91 94258 57236
          </a>
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: var(--color-cream-subtle);
          border-bottom: 1px solid var(--color-card-border);
        }

        .faq-container {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: #FFFFFF;
          border: 1px solid var(--color-card-border);
          border-left: 3px solid var(--color-card-border);
          border-radius: 0;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .faq-item-open {
          border-left: 3px solid var(--color-gold);
          box-shadow: var(--shadow-sm);
        }

        .faq-question-btn {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          font-family: var(--font-serif);
          font-size: 1.18rem;
          font-weight: 700;
          color: var(--color-walnut);
          line-height: 1.35;
          transition: color var(--transition-fast);
        }

        .faq-question-btn:hover {
          color: var(--color-maroon);
        }

        .faq-toggle-icon {
          font-size: 1.5rem;
          line-height: 1;
          color: var(--color-gold);
          font-weight: 400;
          flex-shrink: 0;
          transition: transform var(--transition-fast);
        }

        .faq-answer-wrapper {
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }

        .faq-answer-inner {
          padding: 0 1.5rem 1.35rem 1.5rem;
        }

        .faq-answer-text {
          font-size: 0.96rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin: 0;
        }

        .faq-callout {
          max-width: 860px;
          margin: 2rem auto 0 auto;
          padding: 1.25rem 1.5rem;
          background: #FFFFFF;
          border: 1px dashed rgba(201, 162, 75, 0.6);
          border-radius: 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .faq-callout-text {
          margin: 0;
          font-size: 0.95rem;
          color: var(--color-walnut);
          font-weight: 600;
        }

        .faq-callout-link {
          font-weight: 700;
          color: var(--color-gold-dark);
          text-decoration: none;
          font-size: 1.05rem;
          letter-spacing: 0.02em;
          transition: color var(--transition-fast);
        }

        .faq-callout-link:hover {
          color: var(--color-maroon);
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .faq-question-btn {
            font-size: 1.05rem;
            padding: 1.1rem 1.25rem;
          }
          .faq-answer-inner {
            padding: 0 1.25rem 1.2rem 1.25rem;
          }
          .faq-callout {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
