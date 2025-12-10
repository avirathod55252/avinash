import { CodeSquareIcon, Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative mt-16 pt-16 text-white
        bg-[#0090DA]
        dark:bg-gray-900
        colorful:bg-white
      "
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
            className="fill-white/30 dark:fill-white/10"
          />
        </svg>

        <svg
          className="absolute block w-[200%] h-24 animate-wave-slow-reverse bottom-0"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44C198.43 34.5 94.19 62 0 90.11V120h1200V0c-47.79 22.13-103.59 39.9-158.59 41.72-70.13 2.31-136.07-21.71-206.71-37.37C721.13-8.9 655.22 5.67 585.77 27.64c-76.09 24.18-152 48.36-232.77 28.8z"
            className="fill-white/20 dark:fill-white/5"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto text-center pb-10 px-4">
        {/* 🔗 Social Icons */}
        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          {[
            {
              href: "https://github.com/avirathod55252",
              icon: <Github size={22} />,
            },
            {
              href: "https://www.linkedin.com/in/avinashrathod55252/",
              icon: <Linkedin size={22} />,
            },
            {
              href: "https://wa.me/7620790495",
              icon: <FaWhatsapp size={22} />,
            },
            {
              href: "mailto:avinashrathod55252@gmail.com",
              icon: <Mail size={22} />,
            },
            {
              href: "https://leetcode.com/u/avirathod/",
              icon: <CodeSquareIcon size={22} />,
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3 rounded-full
                bg-white/20 dark:bg-white/10
                colorful:bg-[#DB0A5B]
                hover:bg-[#04A777]
                transition-all duration-300
                hover:scale-110
              "
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* 📁 Quick Links */}
        <div className="mt-4 space-y-3">
          <h3 className="text-lg font-semibold dark:text-white colorful:text-black">
            Quick Links
          </h3>

          <div className="flex justify-center gap-6 text-white colorful:text-black font-medium">
            <a href="#home" className="hover:text-[#04A777] transition">
              Home
            </a>
            <a href="#aboutme" className="hover:text-[#04A777] transition">
              About Me
            </a>
          </div>

          {/* ⭐ Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="
              inline-block px-6 py-3 font-semibold rounded-full text-white
              bg-[#DB0A5B]
              hover:bg-[#04A777]
              shadow-[0_0_15px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_25px_rgba(0,0,0,0.7)]
              hover:scale-105 transition-all duration-300
            "
          >
            ⬇ Download Resume
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-white/80 dark:text-white/60 colorful:text-gray-700">
          © {new Date().getFullYear()} Avinash Rathod. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
