"use client";
import { useRef, useEffect } from "react";

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "", style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}s`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sr-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`sr-el sr-${direction} ${className}`} style={style}>
      {children}
    </div>
  );
}
