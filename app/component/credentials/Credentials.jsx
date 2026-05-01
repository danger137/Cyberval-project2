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
                <span className="highlight">Trusted Credentials</span> That <br />Validate Our Expertise
              </h2>
              <p className="credentials-subtitle">
                Our team has global certifications, guaranteeing top cybersecurity standards and excellent data protection.
              </p>
              <div className="company-cert-wrapper">
                <span className="company-cert-label">COMPANY CERTIFICATION</span>
                <div className="credentials-left-visual">
                  <img src="/images/pages/left-colun.svg" alt="Company Certifications" className="credentials-svg desktop-visual" />
                  <img src="/cards5.svg" alt="Company Certifications Mobile" className="credentials-svg mobile-visual" />
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
