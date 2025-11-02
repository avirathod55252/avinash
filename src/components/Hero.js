import React from "react";
import profilePic from "../img.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full bg-white overflow-hidden shadow-2xl border-4 border-blue-100 hover:scale-105 transition-transform duration-300">
            <img
              src={profilePic}
              alt="Avinash"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Avinash Rathod
          </h2>
          <p className="text-lg mb-6 text-gray-700 font-medium">
            Frontend Developer | React Engineer
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-6">
            {/* Email Button */}
            <a
              href="mailto:rathodavi952@zohomail.in"
              className="w-14 h-14 flex items-center justify-center bg-white text-blue-600 text-2xl rounded-full shadow-md hover:bg-blue-50 hover:shadow-xl transition transform hover:scale-110"
              title="Email Me"
            >
              ✉️
            </a>

            {/* Phone Button */}
            <a
              href="tel:7620790495"
              className="w-14 h-14 flex items-center justify-center bg-white text-blue-600 text-2xl rounded-full shadow-md hover:bg-blue-50 hover:shadow-xl transition transform hover:scale-110"
              title="Call Me"
            >
              📞
            </a>
          </div>

          {/* Optional Light Tagline */}
          <p className="mt-6 text-gray-500 text-sm">
            Passionate about creating interactive, accessible, and modern web
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
