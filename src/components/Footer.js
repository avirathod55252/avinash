import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 mt-16 shadow-inner border-t border-blue-200 dark:border-gray-700 transition-colors duration-500">
      {/* Social Icons */}
      <div className="flex justify-center space-x-8 text-3xl mb-6">
        {/* GitHub */}
        <a
          href="https://github.com/avirathod55252"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transform hover:scale-110 transition-all duration-300"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/avinashrathod55252/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transform hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/avirathod/"
          target="_blank"
          rel="noreferrer"
          title="LeetCode"
          className="text-orange-600 dark:text-orange-400 hover:text-orange-500 dark:hover:text-orange-300 transform hover:scale-110 transition-all duration-300"
        >
          <SiLeetcode />
        </a>

        {/* Gmail (Zoho Mail ID) */}
        <a
          href="mailto:rathodavi952@zohomail.in"
          className="text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 transform hover:scale-110 transition-all duration-300"
          title="Email (Zoho Mail)"
        >
          <SiGmail />
        </a>

        {/* Gmail (Gmail ID) */}
        <a
          href="mailto:avinashrathod55252@gmail.com"
          className="text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 transform hover:scale-110 transition-all duration-300"
          title="Email (Gmail)"
        >
          <SiGmail />
        </a>
      </div>

      {/* Divider Line */}
      <div className="w-24 mx-auto border-t-4 border-blue-300 dark:border-blue-700 rounded-full mb-6"></div>

      {/* Footer Text */}
      <p className="text-center text-gray-600 dark:text-gray-300 text-sm leading-relaxed px-4">
        ©{" "}
        <span className="font-semibold text-blue-700 dark:text-blue-400">
          2025 Avinash Rathod
        </span>{" "}
        — All Rights Reserved.
      </p>

      {/* Glow Accent */}
      <div className="mt-5">
        <div className="mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-500 rounded-full shadow-md"></div>
      </div>
    </footer>
  );
}
