"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  /** When true, offsets logo slightly at top to avoid the hero corner shape */
  heroCornerOffset?: boolean;
}

export default function Navbar({ heroCornerOffset = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/#blog" },
    { name: "About", href: "/#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-neutral-200/70 shadow-sm py-3.5 sm:py-4"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className={`flex items-center group focus:outline-none transition-all duration-300 ${
              heroCornerOffset && !isScrolled
                ? "pl-8 sm:pl-16 md:pl-20"
                : "pl-0"
            }`}
          >
            <span className="font-rochester text-3xl sm:text-4xl text-[#18191E] tracking-tight transition-transform duration-300 group-hover:scale-105 select-none">
              instructor
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#18191E]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative transition-colors py-1 ${
                    isActive
                      ? "font-semibold text-black after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#18191E]"
                      : "text-[#18191E]/80 hover:text-black after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#18191E] hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/75 backdrop-blur-md border border-[#18191E]/10 text-[#18191E] shadow-sm hover:bg-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-white/95 backdrop-blur-2xl border border-[#18191E]/10 rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl transition-colors ${
                  pathname === link.href
                    ? "bg-[#18191E] text-white font-semibold"
                    : "hover:bg-neutral-100 text-[#18191E]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
