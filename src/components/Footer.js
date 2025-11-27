import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative mt-20 pt-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 border-t border-blue-200 dark:border-gray-700 shadow-inner overflow-hidden">
      {/* 🌊 Animated Wave (Top) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[200%] h-[120px] animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 92.83C906.67 72 823.78 31.17 743.84 14.77 661.59 -2.57 574.56 4.44 492.32 27.46 426.72 46.07 363.4 78.12 297.8 95.74 233.07 113.12 167.72 116.39 103.55 102.88 65.96 94.66 33.31 81.89 0 68.62V0H1200V27.35C1128.2 59.3 1055.45 113.83 985.66 92.83Z"
            fill="url(#waveGradient)"
          ></path>
          <defs>
            <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 💡 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-300 opacity-20 blur-3xl rounded-full dark:bg-blue-700"></div>
      </div>

      {/* 🎯 Content Section */}
      <div className="relative z-10">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-12 text-4xl mb-10">
          {/* GitHub */}
          <a
            href="https://github.com/avirathod55252"
            target="_blank"
            rel="noreferrer"
            className="group text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-all transform hover:scale-110"
          >
            <FaGithub className="drop-shadow-md group-hover:drop-shadow-xl transition-all" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/avinashrathod55252/"
            target="_blank"
            rel="noreferrer"
            className="group text-blue-700 dark:text-blue-400 hover:text-blue-500 transition-all transform hover:scale-110"
          >
            <FaLinkedin className="drop-shadow-md group-hover:drop-shadow-xl transition-all" />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/avirathod/"
            target="_blank"
            rel="noreferrer"
            className="group text-orange-600 dark:text-orange-300 hover:text-orange-500 transition-all transform hover:scale-110"
          >
            <SiLeetcode className="drop-shadow-md group-hover:drop-shadow-xl transition-all" />
          </a>

          {/* Zoho Mail */}
          <div className="flex flex-col items-center group">
            <a
              href="mailto:rathodavi952@zohomail.in"
              className="text-red-600 dark:text-red-400 hover:text-red-500 transform hover:scale-110 transition-all"
              title="Zoho Mail"
            >
              <SiGmail className="drop-shadow-md group-hover:drop-shadow-xl transition-all" />
            </a>
            <span className="text-xs mt-1 font-medium text-red-600 dark:text-red-400 opacity-90 group-hover:opacity-100 transition">
              Zoho
            </span>
          </div>

          {/* Gmail */}
          <div className="flex flex-col items-center group">
            <a
              href="mailto:avinashrathod55252@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-500 transform hover:scale-110 transition-all"
              title="Gmail"
            >
              <SiGmail className="drop-shadow-md group-hover:drop-shadow-xl transition-all" />
            </a>
            <span className="text-xs mt-1 font-medium text-blue-600 dark:text-blue-400 opacity-90 group-hover:opacity-100 transition">
              Gmail
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex justify-center mb-8">
          <div className="w-32 h-[3px] bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full shadow-lg"></div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-700 dark:text-gray-300 text-sm md:text-base">
          ©{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-400">
            2025 Avinash Rathod
          </span>{" "}
          — All Rights Reserved.
        </p>

        {/* Bottom Glow */}
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-600 rounded-full shadow-lg"></div>
        </div>
      </div>
    </footer>
  );
}
