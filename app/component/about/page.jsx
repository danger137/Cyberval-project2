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
            <h1 className="about-title">
              Protecting What Matters,<br />
              <span className="hero-title-blue">Advancing What&apos;s Next.</span>
            </h1>
            <p className="about-description">
              At Cyberval, we don&apos;t just secure; we innovate. Our unique approach blends
              cutting-edge cybersecurity solutions with a forward-thinking mindset.
            </p>
            <div className="mission-block">
              <h2 className="mission-heading">Our Mission</h2>
              <h3 className="mission-subheading">Fortifying Excellence through Advanced Cybersecurity Solutions</h3>
              <p className="mission-description">
                At the crux of our mission is a dedication to empowering organizations with
                transformative solutions, enhancing performance, optimizing operations, and
                fortifying the security of their digital assets.
              </p>
            </div>
            <Link href="/About2"><button className="btn-read-more">Read More</button></Link>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal direction="up">
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-value">10<span className="stat-plus">+</span> <span className="stat-unit">Years</span></div>
              <div className="stat-label">Professional Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box">
              <div className="stat-value">25<span className="stat-plus">+</span></div>
              <div className="stat-label">Enterprise Clients</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box">
              <div className="stat-value">99.9<span className="stat-plus">%</span></div>
              <div className="stat-label">Threat Detection Accuracy</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-box">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Security Monitoring</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="commitment-section">
        <ScrollReveal direction="up">
          <span className="commitment-label">OUR COMMITMENT</span>
          <h2 className="commitment-heading">Built on Trust. Driven by <span className="blue-text">Security.</span></h2>
          <p className="commitment-subtext">Delivering secure, innovative, and trusted cybersecurity solutions you can rely on.</p>
        </ScrollReveal>

        <div className="commitment-cards-container">
          <ScrollReveal direction="up" delay={0}>
            <div className="commitment-card first">
              <div className="card-icon-wrapper"><img src="/group1.svg" alt="Needs" /></div>
              <div className="card-content">
                <h4 className="card-title">Security First</h4>
                <p className="card-desc">Ensuring unwavering security at every level for robust digital asset protection.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <div className="commitment-card central">
              <div className="card-icon-wrapper"><img src="/group2.svg" alt="Precision" /></div>
              <div className="card-content">
                <h4 className="card-title">Client Confidentiality</h4>
                <p className="card-desc">Upholding strict confidentiality standards for trusted cybersecurity services.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="commitment-card third">
              <div className="card-icon-wrapper"><img src="/group3.svg" alt="Excellence" /></div>
              <div className="card-content">
                <h4 className="card-title">Continuous Innovation</h4>
                <p className="card-desc">Staying ahead with cutting-edge solutions to adapt and counter evolving threats.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
