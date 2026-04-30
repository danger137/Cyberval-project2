"use client";

import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center p-4 border-b border-white/10 bg-[#0b1b33] text-white">
      {/* Mobile Sidebar Trigger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 cursor-pointer hover:text-sky-500 transition" />
        </button>
      </div>

      {/* Simple Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#0b1b33] border-r border-white/10">
            <Sidebar />
          </div>
        </div>
      )}
      <div className="flex w-full justify-end">
        <div className="flex items-center gap-x-4">
          <div className="bg-sky-500/10 text-sky-500 px-3 py-1 rounded-full text-xs font-semibold">
            Admin Mode
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
