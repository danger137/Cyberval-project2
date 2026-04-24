import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
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