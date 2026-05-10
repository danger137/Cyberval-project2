"use client";
import { useState, useEffect, useRef } from 'react';
import './about-page.css';
import '../component/about/about.css'; // Original styles for stats/commitment
import Link from 'next/link';
import Faq from '../component/faq/Faq';
import Stats from '../component/stats/Stats';
import ScrollReveal from '../component/ScrollReveal';
import FooterCTA from '../component/footer/FooterCTA';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [team, setTeam] = useState([]);
  const [loadingTeam, setLoadingTeam] = useState(true);

  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("/api/team");
        const data = await response.json();
        if (Array.isArray(data)) {
          setTeam(data);
        }
      } catch (error) {
        console.error("Error fetching team:", error);
      } finally {
        setLoadingTeam(false);
      }
    };
    fetchTeam();

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current || !isMobile) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    
    const index = Math.round((scrollLeft / maxScroll) * (totalSlides - 1));
    setCurrentSlide(index);
  };

  const teamChunks = [];
  for (let i = 0; i < team.length; i += 4) {
    teamChunks.push(team.slice(i, i + 4));
  }
  const totalSlides = teamChunks.length > 0 ? teamChunks.length : 1;
  return (
    <div className="about-page-container">
      {/* Hero Section of About Page (Custom Dark Style from Screenshot) */}
      <section className="about-hero-section">
        <div className="hero-background-effects">
          <div className="light-beam lb-1"></div>
          <div className="light-beam lb-2"></div>
          <div className="light-beam lb-3"></div>
          <div className="spotlight"></div>
        </div>

        <div className="about-hero-content">
          <ScrollReveal direction="up">
            <div className="about-badge-wrapper">
              <span className="about-badge-pill">ABOUT US</span>
            </div>

            <h1 className="about-hero-title">
              Reliable Cybersecurity, Exceptional Service
            </h1>

            <p className="about-hero-desc">
              We partner with organizations to design, implement, and sustain
              security programs that are practical, measurable, and resilient.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <Stats data={[
        { value: "10", plus: "+", unit: "Years", label: "Professional Experience" },
        { value: "25", plus: "+", label: "Enterprise Clients" },
        { value: "99.9", plus: "%", label: "Threat Detection Accuracy" },
        { value: "24/7", plus: "", label: "Security Monitoring" }
      ]} />

      {/* Our Journey Section */}
      <section className="journey-section">
        <ScrollReveal direction="up">
          <div className="journey-container">
            <h2 className="journey-title">
              Our <span className="blue-text-journey">Journey</span>
            </h2>

            <div className="journey-content">
              <p>
                Cybervol was founded on a simple idea: modern businesses need security partners
                who understand both technology and strategy. We bridge that gap—helping teams
                protect what matters without slowing innovation.
              </p>
              <p>
                From advisory to implementation, we focus on clarity, speed, and measurable impact—
                so boards, executives, and technical teams can move forward with confidence.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-left">
            <ScrollReveal direction="left">
              <div className="radar-graphic-wrapper">
                <img
                  src="/images/radar-graphic.svg"
                  alt="Security Radar"
                  className="radar-graphic"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="mission-right">
            <ScrollReveal direction="right">
              <div className="mission-badge-wrapper">
                <span className="mission-badge">OUR MISSION</span>
              </div>

              <h2 className="mission-heading">
                Safeguarding Your Business with Advanced <span className="blue-text-mission">Cyber Solutions</span>
              </h2>

              <h3 className="mission-subheading">
                Fortifying Excellence through Advanced Cybersecurity Solutions
              </h3>

              <p className="mission-description">
                At the crux of our mission is a dedication to empowering organizations with
                transformative solutions, enhancing performance, optimizing operations, and
                fortifying the security of their digital assets.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <ScrollReveal direction="up">
          <div className="offer-container">
            <div className="offer-cards-grid">
              <div className="offer-header">
                <h2 className="offer-title">
                  What We <span className="blue-text-offer">Offer</span>
                </h2>
                <p className="offer-subtitle">
                  We evaluate your environment, design the right mix of services, and execute with accuracy—delivering outcomes you can see and measure.
                </p>
              </div>

              <div className="offer-card card-needs">
                <h3 className="card-title">We Understand Your Needs</h3>
                <p className="card-description">
                  We take time to understand your environment, risk profile, and business goals before recommending any control or framework.
                </p>
              </div>

              {/* Card 2: Precision */}
              <div className="offer-card card-precision ">
                <h3 className="card-title">We Build with Precision</h3>
                <p className="card-description">
                  From architecture to implementation, we combine proven methodologies with automation to reduce gaps and human error.
                </p>
              </div>

              {/* Card 3: Excellence */}
              <div className="offer-card card-excellence">
                <h3 className="card-title">We Deliver Excellence</h3>
                <p className="card-description">
                  We stay engaged after go-live—measuring outcomes, tuning controls, and helping teams mature their security posture.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <ScrollReveal direction="up">
          <div className="team-container">
            <div className="team-header">
              <div className="team-badge-wrapper">
                <span className="team-badge">OUR TEAM</span>
              </div>
              <h2 className="team-title">Meet the Minds</h2>
              <h3 className="team-subtitle">Behind Our Mission</h3>
            </div>

          <div 
            className="team-slider-viewport" 
            ref={scrollRef}
            onScroll={handleScroll}
          >
            <div
              className="team-slider-track"
              style={!isMobile ? { transform: `translateX(-${currentSlide * 100}%)` } : {}}
            >
              {/* Dynamic Slides */}
              {teamChunks.length > 0 ? (
                teamChunks.map((chunk, slideIndex) => (
                  <div key={slideIndex} className="team-slide-group">
                    {chunk.map((member, memberIndex) => (
                      <div key={member.id || memberIndex} className="team-card">
                        <div className="member-image-wrapper">
                          <img 
                            src={member.imageUrl || "/Cards.svg"} 
                            alt={member.name} 
                            className="member-image" 
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/Cards.svg";
                            }}
                          />
                        </div>
                        <div className="member-info">
                          <div className="member-name-row">
                            <h4 className="member-name">{member.name}</h4>
                            <div className="social-icons">
                              {member.linkedin ? (
                                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                                    <g clipPath={`url(#clip_linkedin_${slideIndex}_${memberIndex})`}>
                                      <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                                      <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                                      <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id={`clip_linkedin_${slideIndex}_${memberIndex}`}>
                                        <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Link>
                              ) : (
                                <span className="social-icon">
                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                                    <g clipPath={`clip_linkedin_empty_${slideIndex}_${memberIndex}`}>
                                      <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" opacity="0.3" />
                                      <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" opacity="0.3" />
                                      <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" opacity="0.3" />
                                    </g>
                                    <defs>
                                      <clipPath id={`clip_linkedin_empty_${slideIndex}_${memberIndex}`}>
                                        <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="member-role">{member.designation}</p>
                          <p className="member-bio">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div className="flex w-full items-center justify-center p-12 text-white/50">
                  {loadingTeam ? "Loading team..." : "No team members found."}
                </div>
              )}
            </div>
          </div>

          <div className={`team-pagination ${isMobile ? 'team-pagination-mobile' : ''}`}>
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span
                key={i}
                className={`pagination-bar ${isMobile ? 'pagination-dot' : ''} ${currentSlide === i ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
              ></span>
            ))}
          </div>

          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal direction="up">
        <Faq />
      </ScrollReveal>
      {/* CTA Section */}
      <section className="cta-section" style={{ marginTop: '60px' }}>
        <FooterCTA 
          title={<>Ready to talk about your <br /> security goals?</>}
          subtitle={<>Share where you are today and where you'd like to be, <br /> we'll help you plan the next steps.</>}
        />
      </section>
    </div>
  );
}
