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
      <div className="w-full min-h-screen bg-[#030814] flex justify-center items-start">
        <div className="w-full max-w-[1440px] bg-white relative overflow-hidden max-[1024px]:max-w-[440px] max-[1024px]:mx-auto">
          <Header />
          {children}
          <FooterWrapper />
        </div>
      </div>
    );
  }

  return (
    <div className="global-wrapper relative">
      <Header />
      {children}
      <FooterWrapper />
    </div>
  );
}
