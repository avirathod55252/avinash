import React, { useEffect, useState } from "react";
import profilePic from "./img.jpeg";

export default function App() {
  const quotes = [
    "“Code is like humor. When you have to explain it, it’s bad.” — Cory House",
    "“The goal is to turn data into information, and information into insight.” — Carly Fiorina",
    "“Every great developer you know got there by solving problems they were unqualified to solve.” — Patrick McKenzie",
    "“Without data, you’re just another person with an opinion.” — W. Edwards Deming",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">Avinash Rathod</h1>
          <div className="space-x-6 font-medium">
            <a href="#home" className="hover:text-blue-500">
              Home
            </a>
            <a href="#analytics" className="hover:text-blue-500">
              Analytics
            </a>
            <a href="#skills" className="hover:text-blue-500">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 rounded-full bg-blue-600 overflow-hidden shadow-xl border-4 border-white">
              <img
                src={profilePic}
                alt="Avinash"
                className="absolute inset-0 w-full h-full object-cover object-top scale-110"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2">Hi, I'm Avinash Rathod</h2>
            <p className="text-lg mb-4">
              Frontend Developer | Data Engineer | Analytics Enthusiast
            </p>
            <a
              href="mailto:rathodavi952@zohomail.in"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
            >
              📧 Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Motivational Quote Slider */}
      <section className="bg-blue-600 text-white text-center py-6">
        <p className="text-lg italic transition-all duration-700 ease-in-out">
          {quotes[index]}
        </p>
      </section>

      {/* Analytics & Data Engineering Section */}
      <section id="analytics" className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 border-b-4 border-blue-500 inline-block mb-8">
          Analytics & Data Engineering
        </h2>
        <p className="text-lg leading-relaxed">
          I specialize in transforming data into meaningful insights using
          <strong> React.js, HTML, and modern web visualization tools</strong>.
          My focus lies in building interactive dashboards, automated data
          reports, and analytical tools that combine software development with
          data-driven decision-making.
        </p>
        <p className="mt-4 text-lg">
          Skilled in{" "}
          <strong>
            Python, SQL, Power BI, Pandas, and React-based visual analytics
          </strong>
          . Passionate about merging UI design with backend analytics to create
          full-stack intelligent systems.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-blue-50 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 border-b-4 border-blue-500 inline-block mb-8">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <p>HTML, CSS, JavaScript, React.js, Tailwind CSS</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Backend & Database</h3>
            <p>Node.js, MongoDB, SQL, Express.js</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Data Tools</h3>
            <p>Python, Pandas, Power BI, Data Visualization</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 border-b-4 border-blue-500 inline-block mb-8">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              📊 Analytics Dashboard
            </h3>
            <p>
              React + Power BI embedded interactive dashboard for tracking
              performance metrics in real-time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              💻 E-commerce Platform
            </h3>
            <p>
              MERN Stack web app with payment integration and MongoDB-based
              analytics tracking system.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-blue-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <a
          href="mailto:rathodavi952@zohomail.in"
          className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-100 transition"
        >
          📩 Send Email
        </a>
        <p className="mt-6">© 2025 Avinash Rathod — All Rights Reserved</p>
      </section>
    </div>
  );
}
