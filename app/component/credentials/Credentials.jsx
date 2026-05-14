"use client";
import { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Credentials.css";

export default function Credentials() {
  const [activeQr, setActiveQr] = useState(0);
  const qrCodes = [
    { src: "/ndpc-qr-code.png", alt: "NDPA Trust Mark QR Code 1" },
    { src: "/ndpc-qr-code.png", alt: "NDPA Trust Mark QR Code 2" },
    { src: "/ndpc-qr-code.png", alt: "NDPA Trust Mark QR Code 3" },
  ];

  const handlePrev = (e) => {
    e.preventDefault();
    setActiveQr((prev) => (prev === 0 ? qrCodes.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setActiveQr((prev) => (prev === qrCodes.length - 1 ? 0 : prev + 1));
  };
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
                <span className="company-cert-label">COMPANY CERTIFICATION</span>
                <div className="credentials-left-visual">
                  <div className="ndpa-trust-card">
                    <div className="ndpa-trust-card__info">
                      <div className="ndpa-trust-card__top">
                        <img
                          src="/ndpc-logo.png"
                          alt="NDPC - Nigeria Data Protection Commission"
                          className="ndpa-trust-card__logo"
                        />
                      </div>
                      <div className="ndpa-trust-card__body">
                        <h3 className="ndpa-trust-card__title">
                          <strong>NDPA</strong> Trust Mark Verification
                        </h3>
                        <p className="ndpa-trust-card__subtitle">
                          Scan to verify our NDPA compliance
                        </p>
                        <a href="#" className="ndpa-trust-card__link">
                          Or click to verify
                        </a>
                      </div>
                    </div>
                    <div className="ndpa-trust-card__qr-wrapper">
                      <button onClick={handlePrev} className="qr-nav-btn qr-prev" aria-label="Previous QR code">
                        <ChevronLeft size={20} strokeWidth={2.5} />
                      </button>
                      
                      <div className="ndpa-trust-card__qr-carousel">
                        <div className="ndpa-trust-card__qr" key={activeQr}>
                          <img
                            src={qrCodes[activeQr].src}
                            alt={qrCodes[activeQr].alt}
                          />
                        </div>
                      </div>

                      <button onClick={handleNext} className="qr-nav-btn qr-next" aria-label="Next QR code">
                        <ChevronRight size={20} strokeWidth={2.5} />
                      </button>
                    </div>
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
