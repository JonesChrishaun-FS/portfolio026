"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const location = usePathname();
  const isHome = location === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses =
    isHome && !scrolled
      ? "bg-transparent border-transparent"
      : "bg-white/80 backdrop-blur-md border-zinc-200";

  const textClasses = isHome && !scrolled ? "text-white" : "text-zinc-900";

  const navTextClasses =
    isHome && !scrolled
      ? "text-zinc-200 hover:text-white"
      : "text-zinc-600 hover:text-zinc-900";

  const logoMarkClasses =
    isHome && !scrolled
      ? "bg-white/10 group-hover:bg-white/20"
      : "bg-zinc-900 group-hover:bg-zinc-800";

  const logoTextColor = isHome && !scrolled ? "text-white" : "text-zinc-900";

  const subTextColor = isHome && !scrolled ? "text-zinc-300" : "text-zinc-500";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Personal Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Mark - Replace with your actual logo
              To use an image logo instead, replace this div with:
              <img src="/path/to/your/logo.svg" alt="Logo" className="w-10 h-10" />
          */}
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${logoMarkClasses}`}
          >
            <span
              className={`text-xl transition-colors ${isHome && !scrolled ? "text-white" : "text-white"}`}
            >
              AM
            </span>
          </div>

          {/* Logo Text */}
          <div className="flex flex-col">
            <span
              className={`tracking-tight leading-none transition-colors ${logoTextColor}`}
            >
              Chrishaun Jones
            </span>
            <span
              className={`text-xs tracking-wider uppercase leading-none mt-0.5 transition-colors ${subTextColor}`}
            >
              Developer & Designer
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {isHome ? (
            <>
              <Link
                href="#work"
                className={`transition-colors text-sm tracking-wide ${navTextClasses}`}
              >
                Work
              </Link>
              <Link
                href="#about"
                className={`transition-colors text-sm tracking-wide ${navTextClasses}`}
              >
                About
              </Link>
              <Link
                href="#skills"
                className={`transition-colors text-sm tracking-wide ${navTextClasses}`}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className={`transition-colors text-sm tracking-wide ${navTextClasses}`}
              >
                Contact
              </Link>
            </>
          ) : (
            <Link
              href="/"
              className={`transition-colors text-sm tracking-wide ${navTextClasses}`}
            >
              Home
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className={`md:hidden p-2 transition-colors ${navTextClasses}`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};
