"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const pathname = usePathname();
  
  // Check if current route is services, resources, or contact
  const showBanner = pathname && (
    pathname.startsWith("/services") || 
    pathname.startsWith("/resources") || 
    pathname.toLowerCase().startsWith("/contact")
  );
  
  const isService2 = pathname && pathname.includes("service-2");

  return (
    <footer className="footer w-full relative">
      {showBanner && (
        <div className="w-full pt-[60px] max-[1024px]:pt-0 pb-[20px] px-0">
          <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[80px]">
            <div className="bg-[#000F2E] bg-[url('/bgcardFot.svg')] bg-cover bg-center rounded-[8px] w-full max-w-[1230px] h-auto md:min-h-[380px] mx-auto mb-[50px] text-center text-[#ffffff] flex flex-col items-center justify-center gap-[12px] relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)] p-[40px] md:p-[60px] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)] before:pointer-events-none footer-cta-banner">
              <div className="z-10 relative">
                <h2 className="font-sora text-[28px] md:text-[32px] font-semibold leading-[1.2] md:leading-[49px] m-0 max-w-[650px] mx-auto">
                  {isService2 ? (
                    <>Ready to talk about your <br /> security goals?</>
                  ) : (
                    "Contact Us Today"
                  )}
                </h2>
                <p className="font-manrope text-[15px] md:text-[16px] font-normal leading-[30px] text-white my-[2px] mb-[12px] max-w-[600px] mx-auto">
                  {isService2 ? (
                    <>Share where you are today and where you'd like to be, <br className="hidden md:block" /> we'll help you plan the next steps.</>
                  ) : (
                    <>Ready to strengthen your cybersecurity posture? <br className="hidden md:block" /> Get in touch and we'll help you find the right solution.</>
                  )}
                </p>
              </div>
              <Link href="/Contact" style={{ color: '#000000' }} className="z-10 relative inline-flex justify-center items-center w-auto min-w-[236px] h-[48px] py-[13px] px-[40px] bg-[#ffffff] rounded-[8px] !text-black font-manrope font-semibold text-[16px] leading-none no-underline border-none cursor-pointer transition-all duration-200 ease-in-out mt-[10px] whitespace-nowrap hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-[#f8fafc]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="footer-main-wrapper">
        <div className="footer-container">
      <div className="footer-content">

    
        <div className="footer-col branding">
          <div className="footer-logo">
            <img src="/images/Footer/icons-logo/logo.svg" alt="Cybervol Logo" />
            <div className="footer-logo-text-group">
              <span className="footer-logo-text">Cybervol</span>
              <span className="footer-logo-subtext">by Rotvol Solutions</span>
            </div>
          </div>

          <p className="branding-tagline">
            Let's align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </p>

          <div className="social-links">
            <a href="#" className="soc-link">
              <img src="/images/Footer/icons-logo/icon-1.svg" alt="Facebook" />
            </a>
            <a href="#" className="soc-link">
              <img src="/images/Footer/icons-logo/icon-2.svg" alt="Instagram" />
            </a>
            <a href="#" className="soc-link">
              <img src="/images/Footer/icons-logo/icon-3.svg" alt="X" />
            </a>
            <a href="#" className="soc-link">
              <img src="/images/Footer/icons-logo/icon-4.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><a href="#">About us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">eBooks</a></li>
            <li><a href="#">Data sheets</a></li>
          </ul>
        </div>

       
        <div className="footer-col">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><a href="#">CyberShield Solutions</a></li>
            <li><a href="#">(GRC) </a></li>
            <li><a href="#">Offensive Security</a></li>
            <li><a href="#">Security Awareness & Training</a></li>
            <li><a href="#">Managed Cybersecurity as a </a></li>
            <li><a href="#">Service (MCaaS)</a></li>
            <li><a href="#">Training and Certifications</a></li>
          </ul>
        </div>

      
        <div className="footer-col contact">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">
                <img src="/images/Footer/icons-logo/icon-5.svg" alt="" />
              </span>
              <div className="contact-text">
                <p>+1 (469) 488-3005</p>
                <p>+234 9137002111</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <img src="/images/Footer/icons-logo/icon-6.svg" alt="" />
              </span>
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