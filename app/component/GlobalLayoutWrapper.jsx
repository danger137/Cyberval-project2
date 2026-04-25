"use client";
import { usePathname } from "next/navigation";
import Header from "./header/header.jsx";
import FooterWrapper from "./footer/FooterWrapper.jsx";

export default function GlobalLayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Check if current path is a service or resource sub-page
  const isPillarboxed = pathname.startsWith("/services/") || pathname.startsWith("/resources/");

  if (isPillarboxed) {
    return (
      <div className="w-full min-h-screen bg-[#ffffff] max-[1024px]:bg-black">
        <div className="w-full max-[1024px]:w-full max-[1024px]:max-w-[425px] max-[1024px]:mx-auto max-[1024px]:bg-white max-[1024px]:overflow-hidden max-[1024px]:border-none relative">
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
