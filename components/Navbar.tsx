// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [scrollY, setScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const tabs = [
//     { name: "Home", link: "/" },
//     {name:"About",link:"#about"},
//     { name: "Experience", link: "#experience" },
//     { name: "Projects", link: "#projects" },
//     { name: "Skills", link: "#skills" },
    
//     { name: "Certifications", link: "#certifications" },
//     { name: "Contact", link: "#contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-10 px-6 flex items-center justify-between border-b border-solid duration-200 ${
//         scrollY > 0 ? "py-4 bg-slate-950 border-violet-950" : "py-6 bg-transparent border-transparent"
//       }`}
//     >
//       {/* Logo */}
//       <h1 className="font-medium">
//         <b className="font-bold text-violet-400">Radhi</b> <span>Patel</span>
//       </h1>

//       {/* Desktop Navigation */}
//       <nav className="hidden sm:flex items-center gap-4">
//         {tabs.map((tab, index) => (
//           <Link key={index} href={tab.link} className="duration-200 hover:text-violet-400">
//             {tab.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Mobile Navigation Toggle */}
//       <button className="sm:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </button>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="fixed inset-0 top-16 bg-slate-950 z-50 sm:hidden">
//             <div className="flex flex-col items-center gap-6 pt-10">
//               {tabs.map((tab, index) => (
//                 <Link
//                   key={index}
//                   href={tab.link}
//                   className="text-xl duration-200 hover:text-violet-400"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {tab.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>
//     );
//   }



"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md"
          : "bg-opacity-0"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-violet-400">Radhi Patel</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {tabs.map((tab, index) => (
            <a
              key={index}
              href={tab.link}
              className="hover:text-violet-400 transition duration-300"
            >
              {tab.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-950 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            {tabs.map((tab, index) => (
              <a
                key={index}
                href={tab.link}
                className="hover:text-violet-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {tab.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}