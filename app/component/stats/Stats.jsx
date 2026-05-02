"use client";
import "./Stats.css";
import ScrollReveal from "../ScrollReveal";

const defaultStats = [
  { value: "10", plus: "+", unit: "Years", label: "Professional Experience" },
  { value: "25", plus: "+", label: "Enterprise Clients" },
  { value: "99.9", plus: "%", label: "Threat Detection Accuracy" },
  { value: "24", plus: "/7", label: "Security Monitoring" }
];

export default function Stats({ data = defaultStats, className = "" }) {
  return (
    <section className={`stats-section ${className}`}>
      <div className="stats-outer-container">
        <ScrollReveal direction="up">
          <div className="stats-container">
            {data.map((stat, index) => (
              <div key={index} className="stat-group">
                <div className="stat-box">
                  <div className="stat-value">
                    {stat.value}
                    <span className="stat-plus">{stat.plus}</span>
                    {stat.unit && <span className="stat-unit">{stat.unit}</span>}
                  </div>
                  <p className="stat-label">{stat.label}</p>
                </div>
                {index < data.length - 1 && <div className="stat-divider"></div>}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
