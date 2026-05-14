"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import "./Credentials.css";

const certifications = [
  {
    id: 1,
    title: <><strong>NDPA</strong> Trust Mark Verification</>,
    subtitle: "Scan to verify our NDPA compliance",
    logo: "/ndpc-logo.png",
    qr: "/ndpc-qr-code.png",
    link: "#",
    label: "NDPA CERTIFIED"
  },
  {
    id: 2,
    title: <><strong>ISO 27001</strong> Information Security</>,
    subtitle: "Verified security management standards",
    logo: "/ndpc-logo.png", // Using same logo as placeholder if specific ISO logo not available
    qr: "/ndpc-qr-code.png",
    link: "#",
    label: "ISO CERTIFIED"
  },
  {
    id: 3,
    title: <><strong>GDPR</strong> Compliance Standards</>,
    subtitle: "Global data protection excellence",
    logo: "/ndpc-logo.png", // Using same logo as placeholder
    qr: "/ndpc-qr-code.png",
    link: "#",
    label: "GDPR COMPLIANT"
  }
];

export default function Credentials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const currentCert = certifications[currentIndex];

  return (
    <section className="credentials-section">
      <div className="credentials-container">
        <ScrollReveal direction="up">
          <div className="credentials-content-grid">
            <div className="credentials-left-column">
              <div className="credentials-badge-wrapper">
                <span className="credentials-badge">CERTIFIED EXCELLENCE</span>
              </div>
              <h2 className="credentials-title">
                <span className="highlight">Trusted Credentials</span> That <br className="desktop-br" />Validate Our Expertise
              </h2>
              <p className="credentials-subtitle">
                Our team has global certifications, guaranteeing top cybersecurity standards and excellent data protection.
              </p>
              <div className="company-cert-wrapper">
                <div className="company-cert-header">
                  <span className="company-cert-label">COMPANY CERTIFICATION</span>
                  <div className="slider-controls">
                    <button onClick={prevSlide} className="slider-arrow" aria-label="Previous certification">
                      <ChevronLeft size={20} />
                    </button>
                    <div className="slider-dots">
                      {certifications.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                          onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                          }}
                        />
                      ))}
                    </div>
                    <button onClick={nextSlide} className="slider-arrow" aria-label="Next certification">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="credentials-left-visual">
                  <div className="ndpa-trust-card">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                        className="ndpa-trust-card-content"
                      >
                        <div className="ndpa-trust-card__info">
                          <div className="ndpa-trust-card__top">
                            <img
                              src={currentCert.logo}
                              alt={currentCert.label}
                              className="ndpa-trust-card__logo"
                            />
                          </div>
                          <div className="ndpa-trust-card__body">
                            <h3 className="ndpa-trust-card__title">
                              {currentCert.title}
                            </h3>
                            <p className="ndpa-trust-card__subtitle">
                              {currentCert.subtitle}
                            </p>
                            <a href={currentCert.link} className="ndpa-trust-card__link">
                              Or click to verify
                            </a>
                          </div>
                        </div>
                        <div className="ndpa-trust-card__qr-wrapper">
                          <div className="ndpa-trust-card__qr">
                            <img
                              src={currentCert.qr}
                              alt={`${currentCert.label} QR Code`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            <div className="credentials-right-column">
              <div className="credentials-right-visual">
                <img src="/images/pages/right-colun.svg" alt="Global Certification Badges" className="credentials-svg" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
