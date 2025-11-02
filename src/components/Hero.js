import React from "react";
import profilePic from "../img.jpeg";

export default function Hero() {
  return (
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
  );
}
