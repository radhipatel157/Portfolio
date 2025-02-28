"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { name: "Home", link: "/" },
    {name:"About",link:"#about"},
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 px-6 flex items-center justify-between border-b border-solid duration-200 ${
        scrollY > 0 ? "py-4 bg-slate-950 border-violet-950" : "py-6 bg-transparent border-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="font-medium">
        <b className="font-bold text-violet-400">Radhi</b> <span>Patel</span>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-4">
        {tabs.map((tab, index) => (
          <Link key={index} href={tab.link} className="duration-200 hover:text-violet-400">
            {tab.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation Toggle */}
      <button className="sm:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 bg-slate-950 z-50 sm:hidden">
          <div className="flex flex-col items-center gap-6 pt-10">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                href={tab.link}
                className="text-xl duration-200 hover:text-violet-400"
                onClick={() => setMenuOpen(false)}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
