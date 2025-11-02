import React from "react"; import { FaGithub, FaLinkedin, FaEnvelope } from
"react-icons/fa"; export default function Footer() { return (
<footer className="bg-white shadow-inner py-8 text-center">
  <div className="flex justify-center space-x-8 text-2xl mb-4 text-blue-600">
    <a
      href="https://github.com/avirathod55252"
      target="_blank"
      rel="noreferrer"
      className="hover:text-blue-400 transition"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/avinashrathod"
      target="_blank"
      rel="noreferrer"
      className="hover:text-blue-400 transition"
    >
      <FaLinkedin />
    </a>
    <a
      href="mailto:rathodavi952@zohomail.in"
      className="hover:text-blue-400 transition"
    >
      <FaEnvelope />
    </a>
  </div>
  <p className="text-gray-600 text-sm">
    © 2025 Avinash Rathod. All Rights Reserved. |{" "}
    <a
      href="https://github.com/avirathod55252/avinash"
      target="_blank"
      rel="noreferrer"
      className="underline text-blue-600"
    >
      GitHub Repository
    </a>
  </p>
</footer>
); }
