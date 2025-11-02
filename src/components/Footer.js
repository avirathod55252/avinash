import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-10 mt-16 shadow-inner border-t border-blue-200">
      {/* Social Icons */}
      <div className="flex justify-center space-x-8 text-3xl mb-6">
        <a
          href="https://github.com/avirathod55252"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/avinashrathod"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rathodavi952@zohomail.in"
          className="text-blue-600 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Divider Line */}
      <div className="w-24 mx-auto border-t-4 border-blue-300 rounded-full mb-6"></div>

      {/* Footer Text - Centered */}
      <p className="text-center text-gray-600 text-sm leading-relaxed px-4">
        ©{" "}
        <span className="font-semibold text-blue-700">2025 Avinash Rathod</span>{" "}
        — All Rights Reserved. <br />
      </p>

      {/* Glow Accent */}
      <div className="mt-5">
        <div className="mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full shadow-md"></div>
      </div>
    </footer>
  );
}
