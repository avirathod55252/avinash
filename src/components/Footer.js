import {
  CodeSquareIcon,
  Github,
  Linkedin,
  Mail,
  SquareCode,
  SquareCodeIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiCodingame } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative mt-16 bg-blue-600 dark:bg-gray-900 text-white pt-16"
    >
      {/* 🌊 Animated Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[200%] h-24 animate-wave-slow"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44C198.43 34.5 94.19 62 0 90.11V120h1200V0c-47.79 22.13-103.59 39.9-158.59 41.72-70.13 2.31-136.07-21.71-206.71-37.37C721.13-8.9 655.22 5.67 585.77 27.64c-76.09 24.18-152 48.36-232.77 28.8z"
            fill="white"
            fillOpacity="0.25"
          />
        </svg>

        <svg
          className="absolute block w-[200%] h-24 animate-wave-slow-reverse bottom-0"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44C198.43 34.5 94.19 62 0 90.11V120h1200V0c-47.79 22.13-103.59 39.9-158.59 41.72-70.13 2.31-136.07-21.71-206.71-37.37C721.13-8.9 655.22 5.67 585.77 27.64c-76.09 24.18-152 48.36-232.77 28.8z"
            fill="white"
            fillOpacity="0.15"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto text-center pb-10">
        {/* 🔗 Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/avirathod55252"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <Github size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/avinashrathod55252/"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <Linkedin size={26} />
          </a>

          <a
            href="https://wa.me/7620790495"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <FaWhatsapp size={26} />
          </a>

          <a
            href="mailto:avinashrathod55252@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition cursor-pointer z-[20] relative"
          >
            <Mail size={26} />
          </a>
          <a
            href="https://leetcode.com/u/avirathod/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition cursor-pointer z-[20] relative"
          >
            <CodeSquareIcon size={26} />
          </a>
        </div>

        {/* 📁 Quick Links Section */}
        <div className="mt-4 space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>

          {/* ⭐ New Premium Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="
                  inline-block px-6 py-2 
            font-semibold 
    rounded-full 
    bg-[#1f1f1f] text-white
    shadow-[0_0_12px_rgba(0,0,0,0.55)]
    hover:shadow-[0_0_22px_rgba(0,0,0,0.9)]
    hover:scale-105
    transition-all duration-300
    border border-gray-700
  "
          >
            ⬇ Download Resume
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-white/80 text-sm">
          © {new Date().getFullYear()} Avinash Rathod. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
