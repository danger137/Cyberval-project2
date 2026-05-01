"use client";
import { usePathname } from "next/navigation";
import Header from "./header/header.jsx";
import FooterWrapper from "./footer/FooterWrapper.jsx";

export default function GlobalLayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Check if current path should be pillarboxed (locked to 1440px desktop / 425px mobile)
  const isPillarboxed = pathname === "/" || pathname.startsWith("/services/") || pathname.startsWith("/resources/") || pathname.startsWith("/Contact") || pathname === "/About2";
  
  // Dashboard and Auth pages should be excluded from global layout
  const isDashboard = pathname.startsWith("/dashboard") || pathname.startsWith("/login");

  if (isDashboard) {
    return <>{children}</>;
  }

  if (isPillarboxed) {
    return (
      <div className="w-full min-h-screen relative overflow-x-hidden">
        <Header />
        {children}
        <FooterWrapper />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <Header />
      {children}
      <FooterWrapper />
    </div>
  );
}
