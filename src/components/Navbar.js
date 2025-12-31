import React, { useState, useEffect } from "react";

import {
  Home,
  Code,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Award,
  Menu,
  X,
  Images,
  PhoneCall,
  User,
  PersonStandingIcon,
} from "lucide-react";
import { FcEngineering } from "react-icons/fc";
import { color } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll tracking + active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id], footer[id]");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    {
      id: "aboutme",
      label: "Intro",
      icon: <User className="w-4 h-4" />,
    },
    { id: "skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    {
      id: "education",
      label: "Education",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FolderGit2 className="w-4 h-4" />,
    },
    {
      id: "achievements",
      label: "Achievements",

      icon: <Award className="w-4 h-4" />,
    },
    { id: "gallery", label: "Gallery", icon: <Images className="w-4 h-4" /> },
    {
      id: "reachme",
      label: "Reach Me",
      icon: <PhoneCall className="w-4 h-4" />,
      href: "#footer",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-blue-100 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* ✅ LOGO + BRAND */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src="/arnew.png"
            alt="Avinash Rathod Logo"
            className="w-10 h-10 rounded-full object-contain shadow-lg group-hover:scale-110 transition duration-300"
          />
          <span className="text-2xl font-extrabold text-blue-700 dark:text-blue-300 tracking-tight group-hover:text-blue-500 transition">
            Avinash Rathod
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href ? link.href : `#${link.id}`}
              className={`flex items-center gap-1 relative transition-all group ${
                active === link.id
                  ? "text-blue-600 dark:text-blue-400"
                  : "hover:text-blue-500 dark:hover:text-blue-300"
              }`}
            >
              <span
                className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                  active === link.id
                    ? "w-full bg-blue-600 dark:bg-blue-400"
                    : "w-0 bg-blue-400 dark:bg-blue-300 group-hover:w-full"
                }`}
              ></span>
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-blue-100 dark:border-gray-700 shadow-md animate-slideDown">
          <ul className="flex flex-col text-center space-y-3 py-4 font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href ? link.href : `#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-center gap-2 py-2 transition ${
                    active === link.id
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
