"use client";

import './elite.css';

export default function ElitePage() {
  return (
    <div className="elite-page-wrapper">
      <section className="elite-section">
        <div className="elite-container">
          
          <div className="elite-content">
            {/* Left Column */}
            <div className="elite-left">
              <span className="elite-badge">ELITE SECURITY</span>
              <h2 className="elite-title">
                Why Choose Cybervol?<br />
                Trusted Cybersecurity
              </h2>
              <p className="elite-description">
                We transform risk into resilience, delivering comprehensive cybersecurity that empowers and protects your organization.
              </p>
              
              <div className="elite-logo-wrapper">
                <img src="/images/pages/elite/logo.svg" alt="Cybervol Elite Logo" className="elite-logo" />
              </div>
            </div>

            {/* Right Column */}
            <div className="elite-right">
              <img src="/images/pages/elite/right-colun.svg" alt="Elite Security Features" className="features-svg" />
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
