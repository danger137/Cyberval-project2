"use client";
import { useState, useEffect, useRef } from 'react';
import './about-page.css';
import '../component/about/about.css'; // Original styles for stats/commitment
import Link from 'next/link';
import Faq from '../component/faq/Faq';
import Stats from '../component/stats/Stats';
import ScrollReveal from '../component/ScrollReveal';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
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



  const totalSlides = 4;
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
              {/* Slide 1: Members 1-4 */}
              <div className="team-slide-group">
                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_1)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_1">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_1)">
                              <mask id="mask_twitter_1" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_1)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_1">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_2)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_2">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_2)">
                              <mask id="mask_twitter_2" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_2)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_2">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_3)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_3">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_3)">
                              <mask id="mask_twitter_3" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_3)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_3">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_4)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_4">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_4)">
                              <mask id="mask_twitter_4" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_4)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_4">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slide 2: Members 5-8 */}
              <div className="team-slide-group">
                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_5)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_5">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_5)">
                              <mask id="mask_twitter_5" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_5)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_5">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_6)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_6">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_6)">
                              <mask id="mask_twitter_6" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_6)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_6">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_7)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_7">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_7)">
                              <mask id="mask_twitter_7" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_7)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_7">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_8)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_8">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_8)">
                              <mask id="mask_twitter_8" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_8)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_8">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slide 3: Members 9-12 */}
              <div className="team-slide-group">
                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_9)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_9">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_9)">
                              <mask id="mask_twitter_9" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_9)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_9">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_10)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_10">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_10)">
                              <mask id="mask_twitter_10" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_10)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_10">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_11)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_11">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_11)">
                              <mask id="mask_twitter_11" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_11)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_11">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_12)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_12">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_12)">
                              <mask id="mask_twitter_12" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_12)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_12">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slide 4: Members 13-16 */}
              <div className="team-slide-group">
                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_13)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_13">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_13)">
                              <mask id="mask_twitter_13" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_13)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_13">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_14)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_14">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_14)">
                              <mask id="mask_twitter_14" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_14)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_14">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_15)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_15">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_15)">
                              <mask id="mask_twitter_15" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_15)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_15">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>

                <div className="team-card">
                  <div className="member-image-wrapper">
                    <img src="/Cards.svg" alt="Eddy Denison" className="member-image" />
                  </div>
                  <div className="member-info">
                    <div className="member-name-row">
                      <h4 className="member-name">Eddy Denison</h4>
                      <div className="social-icons">
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_linkedin_16)">
                              <path d="M12.1739 21.837H8V11.0544H12.1739V21.837ZM8.69561 21.1414H11.4783V11.7501H8.69561V21.1414Z" fill="white" />
                              <path d="M24 21.837H19.8261V15.924C19.8261 15.3477 19.3588 14.8805 18.7826 14.8805C18.2062 14.8805 17.7391 15.3477 17.7391 15.924V21.837H13.5652V11.0544H17.7391V11.7544C18.3691 11.2989 19.1269 11.0539 19.9043 11.0544C22.1608 11.0544 24 12.8849 24 15.137V21.837ZM20.5217 21.1414H23.3042V15.137C23.2995 13.2633 21.778 11.7476 19.9043 11.7501C19.0478 11.7501 18.2434 12.1109 17.6434 12.7631L17.0434 13.4196V11.7501H14.2608V21.1414H17.0434V15.924C17.0434 14.9634 17.822 14.1849 18.7826 14.1849C19.743 14.1849 20.5217 14.9634 20.5217 15.924V21.1414Z" fill="white" />
                              <path d="M10.087 10.3587C8.93432 10.3587 8 9.42441 8 8.27177C8 7.11926 8.93432 6.18481 10.087 6.18481C11.2396 6.18481 12.1739 7.11926 12.1739 8.27177C12.1715 9.42339 11.2386 10.3564 10.087 10.3587ZM10.087 6.88055C9.31861 6.88055 8.69561 7.50343 8.69561 8.27177C8.69561 9.04024 9.31861 9.66312 10.087 9.66312C10.8553 9.66312 11.4783 9.04024 11.4783 8.27177C11.4783 7.50343 10.8553 6.88055 10.087 6.88055Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_linkedin_16">
                                <rect width="16" height="16" fill="white" transform="translate(8 6)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="social-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" strokeOpacity="0.08" />
                            <g clipPath="url(#clip_twitter_16)">
                              <mask id="mask_twitter_16" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <path d="M28 4H4V28H28V4Z" fill="white" />
                              </mask>
                              <g mask="url(#mask_twitter_16)">
                                <path d="M20.6829 8.6875H23.1639L17.7437 14.8825L24.1202 23.3125H19.1274L15.2169 18.1998L10.7424 23.3125H8.25993L14.0574 16.6863L7.94043 8.6875H13.0599L16.5947 13.3608L20.6829 8.6875ZM19.8122 21.8275H21.1869L12.3129 10.0945H10.8377L19.8122 21.8275Z" fill="white" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip_twitter_16">
                                <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="member-role">CEO</p>
                    <p className="member-bio">
                      Our CEO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability.
                    </p>
                  </div>
                </div>
              </div>
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
        <ScrollReveal direction="up">
          <div className="footer-cta-banner">
            <div className="footer-cta-content">
              <h2 className="footer-cta-title">Ready to talk about your <br /> security goals?</h2>
              <p className="footer-cta-desc">
                Share where you are today and where you'd like to be, <br />
                we'll help you plan the next steps.
              </p>
            </div>
            <Link href="/contact" className="footer-cta-btn">
              Talk to Our Experts
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
