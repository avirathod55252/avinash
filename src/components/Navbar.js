import React from "react";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">Avinash Rathod</h1>
        <div className="space-x-6 font-medium">
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>
          <a href="#education" className="hover:text-blue-500">
            Education
          </a>
          <a href="#experience" className="hover:text-blue-500">
            Experience
          </a>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#achievements" className="hover:text-blue-500">
            Achievements
          </a>
        </div>
      </div>
    </nav>
  );
}
