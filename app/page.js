import About from "./component/about/page";
import Services from "./services/page";
import Elite from "./elite/page";
import Industries from "./industries/page";
import Hero from "./component/header/hero/hero";
import Testimonials from "./component/testimonials/Testimonials";
import Insights from "./component/insights/Insights";
import Faq from "./component/faq/Faq";
import Credentials from "./component/credentials/Credentials";

export default function Home() {
  return (
    <>
       <Hero />
      <About />
      <Services />
      <Elite />
      <Industries />
      <Testimonials />
      <Insights />
      <Faq />
      <Credentials />
      <section className="cta-section">
        <div className="footer-cta-banner">
          <div className="footer-cta-content">
            <h2 className="footer-cta-title">Ready to Secure Your Business?</h2>
            <p className="footer-cta-desc">
              Protect your digital assets with expert-driven cybersecurity
              solutions <br /> tailored to your needs.
            </p>
          </div>
          <button className="footer-cta-btn">Talk to Our Experts</button>
        </div>
      </section>
    </>
  );
}