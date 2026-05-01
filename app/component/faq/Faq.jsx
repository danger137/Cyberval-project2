"use client";
import { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import "./Faq.css";

const faqData = [
  { question: "Who is Cyberval best suited for?", answer: "We work with organizations that treat security as a strategic capability—from growing teams that need structure, to mature programs looking to validate or extend what they already have." },
  { question: "Do you only offer long-term engagements?", answer: "We offer flexible engagement models ranging from short-term rapid assessments and incident response to long-term strategic partnerships and managed security services." },
  { question: "Can you integrate with our existing tools and vendors?", answer: "Yes, our solutions are designed to be vendor-agnostic and we specialize in optimizing and integrating with your existing security stack to maximize your current investments." },
  { question: "Where can we contact you?", answer: "You can reach out to us via our contact form on the website, or directly through our sales and support email addresses provided in the footer." },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <ScrollReveal direction="left" className="faq-left-wrapper">
          <div className="faq-left">
            <div className="faq-header-group">
              <div className="faq-badge-wrapper">
                <span className="faq-badge">FAQ&apos;S</span>
              </div>
              <h2 className="faq-title">
                Frequently Asked <br />
                <span className="blue-text-faq">Questions</span>
              </h2>
            </div>
            <p className="faq-description">Quick answers to common questions about how we work with clients.</p>
            <button className="faq-view-all">View all FAQ&apos;s</button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15} className="faq-right-wrapper">
          <div className="faq-right">
            <div className="faq-accordion">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaq === index ? "active" : ""}`}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <div className="faq-question">
                    <h4>{item.question}</h4>
                    <span className="faq-icon">
                      {openFaq === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      )}
                    </span>
                  </div>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
