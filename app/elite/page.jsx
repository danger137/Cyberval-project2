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
                <span className="title-nowrap">Why Choose Cybervol?</span><br />
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
              {/* Desktop version still shows the SVG if preferred, or we can use cards for all */}
              <img src="/images/pages/elite/right-colun.svg" alt="Elite Security Features" className="features-svg" />

              {/* Mobile Features Cards (Visible on 480px and below) */}
              <div className="elite-features-mobile">
                {[
                  {
                    id: 1,
                    title: "Unrivaled Commitment",
                    desc: "Protecting your digital assets with relentless dedication and cutting-edge cybersecurity solutions."
                  },
                  {
                    id: 2,
                    title: "Strategic Partnership",
                    desc: "Acting as your trusted advisor, guiding your organization toward secure and sustainable growth."
                  },
                  {
                    id: 3,
                    title: "Tailored Solutions",
                    desc: "Customized cybersecurity strategies designed to meet your unique challenges and deliver measurable results."
                  },
                  {
                    id: 4,
                    title: "Trusted Expertise",
                    desc: "Years of experience and industry knowledge to safeguard your operations with confidence."
                  }
                ].map((feature) => (
                  <div key={feature.id} className="elite-feature-card">
                    <div className="feature-icon-num">{feature.id}</div>
                    <div className="feature-text">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-desc">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
