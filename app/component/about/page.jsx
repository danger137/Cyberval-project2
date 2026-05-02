import ScrollReveal from "../ScrollReveal";
import Link from "next/link";
import Stats from "../stats/Stats";
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
                Protecting What Matters, <br />
                <span className="hero-title-blue">Advancing What’s Next.</span>
              </h2>
              <p className="about-description">
                At Cybervol, we don't just secure; we innovate. Our unique approach blends cutting-edge cybersecurity solutions with a forward-thinking mindset. Trust us to safeguard your digital assets while propelling your technological resilience.
              </p>
              
              <div className="mission-block">
                <h3 className="mission-heading">Our Mission</h3>
                <p className="mission-subheading">Fortifying Excellence through Advanced Cybersecurity Solutions</p>
                <p className="mission-description">
                  At the crux of our mission is a dedication to empowering organizations with transformative solutions, enhancing performance, optimizing operations, and fortifying the security of their digital assets.
                </p>
              </div>
              
              <button className="btn-read-more">Read More</button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Stats />

      <section className="commitment-section">
        <ScrollReveal direction="up">
          <div className="commitment-container">
            <span className="commitment-label">OUR COMMITMENT</span>
            <h2 className="commitment-heading">
              Built on Trust. <br className="block md:hidden" /> Driven by<span className="blue-text"> Security.</span>
            </h2>
            <p className="commitment-subtext">
              Delivering secure, innovative, and trusted <br className="hidden md:block" /> cybersecurity solutions you can rely on.
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
