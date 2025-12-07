import React from "react";
import { PhoneCall, Mail } from "lucide-react";
import profilePic from "./avii.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-100 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full bg-white dark:bg-gray-800 overflow-hidden shadow-2xl dark:shadow-gray-700 border-4 border-blue-100 dark:border-gray-600 hover:scale-105 transition-transform duration-300">
            <img
              src={profilePic}
              alt="Avinash"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-2 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-[Billabong]">
            Hi, I'm Avinash Rathod
          </h2>

          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 font-medium">
            Frontend Developer | React Engineer
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-6">
            {/* Email Button */}
            <a
              href="mailto:rathodavi952@zohomail.in"
              className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 text-2xl rounded-full shadow-md dark:shadow-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900 hover:shadow-xl transition transform hover:scale-110"
              title="Email Me"
            >
              <Mail className="w-6 h-6" />
            </a>

            {/* Phone Button */}
            <a
              href="tel:7620790495"
              className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-700 text-green-600 dark:text-green-400 text-2xl rounded-full shadow-md dark:shadow-gray-700 hover:bg-green-50 dark:hover:bg-green-900 hover:shadow-xl transition transform hover:scale-110"
              title="Call Me"
            >
              <PhoneCall className="w-6 h-6" />
            </a>
          </div>

          <p className="mt-6 text-gray-500 dark:text-gray-400 text-sm">
            I Previosly worked as Computer Programmer at Ahilyanagar Cantonemnt
            Board. Where I Gained 1 Year and 1 Month Professional Experience in
            Development and Maintaining Various Government web Systems
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400 text-sm">
            Passionate about creating interactive, accessible, and modern web
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
