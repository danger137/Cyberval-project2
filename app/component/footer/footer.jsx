"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollReveal from "../ScrollReveal";
import FooterCTA from "./FooterCTA";
import "./footer.css";

export default function Footer() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const toggleSection = (section) => {
        // Dropdown functionality disabled as per request
        return;
    };

    // Check if current route is services, resources, or contact
    const showBanner = pathname && (
        pathname.startsWith("/services") || 
        pathname.startsWith("/resources") || 
        pathname.toLowerCase().startsWith("/contact")
    );
    
    const isService1 = pathname && pathname.includes("service-1");
    const isService2 = pathname && pathname.includes("service-2");

    return (
        <footer className="footer w-full relative">
        {showBanner && (
          <FooterCTA 
            title={
              isService2 ? <>Ready to talk about your <br /> security goals?</> :
              "Contact Us Today"
            }
            subtitle={
              isService2 ? <>Share where you are today and where you'd like to be, <br className="hidden md:block" /> we'll help you plan the next steps.</> :
              "Ready to strengthen your cybersecurity posture? Get in touch and we'll help you find the right solution."
            }
            buttonText={isService2 ? "Talk to Our Experts" : "Contact Us"}
          />
        )}

        <div className="footer-main-wrapper">
            <div className="footer-container">
            <div className="footer-content">
                <ScrollReveal direction="up" delay={0}>
                <div className="footer-col branding">
                    <div className="footer-logo">
                    <img src="/images/Footer/icons-logo/logo.svg" alt="Cybervol Logo" />
                    <div className="footer-logo-text-group">
                        <span className="footer-logo-text">Cybervol</span>
                        <span className="footer-logo-subtext">by Rotvol Solutions</span>
                    </div>
                    </div>
                    <p className="branding-tagline">Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
                    <div className="social-links">
                    <a href="#" className="soc-link"><img src="/images/Footer/icons-logo/icon-1.svg" alt="Facebook" /></a>
                    <a href="#" className="soc-link"><img src="/images/Footer/icons-logo/icon-2.svg" alt="Instagram" /></a>
                    <a href="#" className="soc-link"><img src="/images/Footer/icons-logo/icon-3.svg" alt="X" /></a>
                    <a href="#" className="soc-link"><img src="/images/Footer/icons-logo/icon-4.svg" alt="LinkedIn" /></a>
                    </div>
                </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.1}>
                <div className="footer-col">
                    <div className="footer-heading-wrapper">
                    <h3 className="footer-heading">Company</h3>
                    </div>
                    <ul className="footer-links">
                    <li><Link href="/about">About us</Link></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Webinars</a></li>
                    <li><a href="#">eBooks</a></li>
                    <li><a href="#">Data sheets</a></li>
                    </ul>
                </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                <div className="footer-col">
                    <div className="footer-heading-wrapper">
                    <h3 className="footer-heading">Services</h3>
                    </div>
                <ul className="footer-links">
                  <li><a href="#">CyberShield Solutions</a></li>
                  <li><a href="#">Governance, Risk & Compliance (GRC)</a></li>
                  <li><a href="#">Offensive Security</a></li>
                  <li><a href="#">Security Awareness & Training</a></li>
                  <li><a href="#">Managed Cybersecurity as a Service (MCaaS)</a></li>
                  <li><a href="#">Training and Certifications</a></li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="footer-col contact">
                <h3 className="footer-heading">Contact Us</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon"><img src="/images/Footer/icons-logo/icon-5.svg" alt="Phone" /></span>
                    <div className="contact-text"><p>+1 (469) 488-3005</p><p>+234 9137002111</p></div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon"><img src="/images/Footer/icons-logo/icon-6.svg" alt="Email" /></span>
                    <p>info@cybervol.com</p>
                  </div>
                  <div className="contact-item address">
                    <div className="contact-text">
                      <p className="office-title">Dallas HQ: 1341 W. Mockingbird Lane,</p>
                      <p>Suite 600W, Dallas, Texas 75247, USA.</p>
                    </div>
                  </div>
                  <div className="contact-item address">
                    <div className="contact-text">
                      <p className="office-title">Lagos Office: 232 Murtala Muhammed Way,</p>
                      <p>Yaba Lagos 101245 Nigeria.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full">
            {/* Large Branding (Desktop Only) */}
            <div className="hidden lg:block w-full text-center mt-[-40px]">
              <h2 
                className="font-sora font-semibold font-weight-600 m-0 tracking-[-5px] leading-none bg-clip-text text-transparent select-none mx-auto relative z-[1]"
                style={{ 
                  backgroundImage: "linear-gradient(171.02deg, #6F90B4 -36.59%, rgba(84, 122, 162, 0.27) 19.25%, rgba(46, 90, 136, 0) 98.42%)",
                  width: "908px",
                  height: "164px",
                  fontSize: "180px"
                }}
              >
                Cybervol
              </h2>
            </div>
            {/* Small Branding (Mobile/Tablet Only) */}
            <div className="block lg:hidden w-full text-center pt-[40px] pb-[20px] min-h-[68px]">
              <h2 
                className="font-sora font-bold m-0 tracking-[-2px] leading-none bg-clip-text text-transparent select-none mx-auto relative z-[1]"
                style={{
                  marginTop:"12px",
                  backgroundImage:"linear-gradient(171.02deg, #6F90B4 -36.59%, rgba(84, 122, 162, 0.27) 19.25%, rgba(46, 90, 136, 0) 98.42%)",
                  maxWidth: "100%",
                  height: "auto",
                  fontSize: "64px"
                }}
              >
               Cybervol
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-wrapper">
        <div className="footer-container">
          <div className="footer-bottom">
            <p>© 2025 Cybervol. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#">Terms & conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}