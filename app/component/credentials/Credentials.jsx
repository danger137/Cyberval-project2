"use client";
import ScrollReveal from "../ScrollReveal";
import "./Credentials.css";

export default function Credentials() {
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
                      <div className="ndpa-trust-card__qr">
                        <img
                          src="/ndpc-qr-code.png"
                          alt="NDPA Trust Mark QR Code"
                        />
                      </div>
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
