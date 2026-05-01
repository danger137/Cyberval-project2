import ScrollReveal from "../ScrollReveal";
import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-container">
          <ScrollReveal direction="left" style={{ flex: "0 0 auto" }}>
            <div className="about-hero-left">
              <div className="radar-wrapper">
                <span className="about-badge">ABOUT US</span>
                <img src="/images/radar-graphic.svg" alt="Security Radar" className="radar-image" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15} style={{ flex: 1, maxWidth: "710px", paddingTop: "20px" }}>
            <div className="about-hero-right">
              <h2 className="about-title">
                Empowering Your <span className="hero-title-blue">Cyber</span> <br />
                Defense Strategy
              </h2>
              <p className="about-description">
                At Cybervol, we go beyond standard security. We provide elite cybersecurity solutions 
                designed to protect your most critical assets. Our expert team leverages advanced 
                intelligence and cutting-edge technology to stay ahead of emerging threats.
              </p>
              
              <div className="mission-block">
                <h3 className="mission-heading">Our Mission</h3>
                <p className="mission-subheading">Securing Your Future In The Digital Landscape</p>
                <p className="mission-description">
                  Our mission is to provide businesses with the peace of mind they need to thrive 
                  securely in an increasingly complex digital world. We believe that security is 
                  not just a service—it's a foundation for innovation and growth.
                </p>
              </div>
              
              <button className="btn-read-more">Read More</button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal direction="up">
        <section className="stats-section">
          <div className="stats-outer-container">
            <div className="stats-container">
              <div className="stat-box">
                <div className="stat-value">
                  10<span className="stat-plus">+</span>
                  <span className="stat-unit">Years</span>
                </div>
                <p className="stat-label">Of Proven Experience</p>
              </div>
              
              <div className="stat-divider"></div>
              
              <div className="stat-box">
                <div className="stat-value">
                  200<span className="stat-plus">+</span>
                </div>
                <p className="stat-label">Successful Projects</p>
              </div>
              
              <div className="stat-divider"></div>
              
              <div className="stat-box">
                <div className="stat-value">
                  100<span className="stat-plus">%</span>
                </div>
                <p className="stat-label">Client Satisfaction</p>
              </div>
              
              <div className="stat-divider"></div>
              
              <div className="stat-box">
                <div className="stat-value">
                  24<span className="stat-plus">/</span>7
                </div>
                <p className="stat-label">Expert Support</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="commitment-section">
        <ScrollReveal direction="up">
          <div className="commitment-container">
            <span className="commitment-label">OUR COMMITMENT</span>
            <h2 className="commitment-heading">
              Built on Trust. Driven by<span className="blue-text"> Security.</span>
            </h2>
            <p className="commitment-subtext">
              We are dedicated to maintaining the highest levels of security, 
              transparency, and excellence in everything we do.
            </p>

            <div className="commitment-cards-container">
              <ScrollReveal direction="up" delay={0}>
                <div className="commitment-card first">
                  <div className="card-icon-wrapper">
                    <img src="/group1.svg" alt="Elite Security" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Elite Security Experts</h3>
                    <p className="card-desc">Our team consists of industry veterans and certified security researchers.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.15}>
                <div className="commitment-card central">
                  <div className="card-icon-wrapper">
                    <img src="/group2.svg" alt="Advanced Defense" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Advanced Defense Tech</h3>
                    <p className="card-desc">We utilize the latest AI-driven platforms and proprietary tools to ensure 24/7 protection.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="commitment-card third">
                  <div className="card-icon-wrapper">
                    <img src="/group3.svg" alt="Compliance Ready" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Compliance Ready</h3>
                    <p className="card-desc">We help your business meet global data protection and regulatory standards effortlessly.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
