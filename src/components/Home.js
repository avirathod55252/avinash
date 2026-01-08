import React from "react";
import SlidingBackground from "./SlidingBackground";
import TirangaFlight from "./TirangaFlight";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-28 md:pt-32 bg-white dark:bg-black"
    >
      {/* Background Slider */}
      <SlidingBackground />
      <TirangaFlight />

      {/* Gradient Overlay for Text Clarity */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-b 
          from-black/50 via-black/30 to-black/60
          dark:from-black/70 dark:via-black/50 dark:to-black/80
        "
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Emblem */}
        <div className="mb-6 flex justify-center">
          <img
            src="/tiger.png"
            alt="Emblem"
            className="
              h-24 md:h-32 lg:h-40 
              object-contain 
              mix-blend-screen 
              drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]
              dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]
            "
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-white leading-tight">
          AVINASH <span className="text-yellow-400 drop-shadow-lg">RATHOD</span>
        </h1>

        {/* Flag Line */}
        <div className="flex mt-4 rounded-full overflow-hidden shadow-xl scale-90 sm:scale-100">
          <div className="h-1.5 w-20 sm:w-24 md:w-28 bg-orange-500" />
          <div className="h-1.5 w-20 sm:w-24 md:w-28 bg-white" />
          <div className="h-1.5 w-20 sm:w-24 md:w-28 bg-green-500" />
        </div>

        {/* Subtitle */}
        <h2 className="mt-6 text-sm sm:text-base md:text-lg tracking-wide text-gray-200 font-semibold px-2">
          “India’s Spirit. Engineer’s Mind. Creator’s Vision.”
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl leading-relaxed px-2">
          “From India’s Iconic Heritage to the Future of AI — A Developer’s
          Journey of Excellence, Creativity, and Purpose.”
        </p>

        {/* Explore + Reach Me */}
        <div className="mt-10 text-xs sm:text-sm text-white/90">
          {/* Explore Buttons */}
          <span className="font-semibold mr-2">Explore :</span>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
            {[
              "Skills",
              "Education",
              "Experience",
              "Projects",
              "Achievements",
              "Gallery",
            ].map((name, i) => (
              <a
                key={i}
                href={`#${name.toLowerCase()}`}
                className="
                    px-4 sm:px-5 py-2 
                    rounded-full border border-white/20 
                    hover:bg-white/10 transition-all 
                    hover:scale-105 
                    text-xs sm:text-sm
                  "
              >
                {name}
              </a>
            ))}
          </div>

          {/* Reach Me */}
          <span className="font-semibold mr-2 mt-6 inline-block">
            Reach Me :
          </span>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {/* GitHub */}
            <a
              href="https://github.com/avirathod55252"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.03-1.61-4.03-1.61-.55-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.77.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.31-.54-1.55.12-3.23 0 0 1-.32 3.3 1.23a11.43 11.43 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.68.24 2.92.12 3.23.77.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.82.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/avinashrathod55252/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.64 1.34 2.98 2.98 2.98 1.64 0 2.98-1.34 2.98-2.98C7.96 4.84 6.62 3.5 4.98 3.5zM2.4 21h5.16v-11H2.4v11zm7.84-11h4.96v1.57h.07c.69-1.3 2.37-2.68 4.87-2.68 5.21 0 6.16 3.44 6.16 7.9v8.21h-5.16v-7.27c0-1.73-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.82v7.4h-5.16V10z" />
              </svg>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/explore/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32.94 18.33l-5.91-5.92c-.32-.32-.84-.32-1.16 0l-5.92 5.92c-.33.33-.33.86 0 1.19l5.91 5.92c.32.33.84.33 1.16 0l5.92-5.92c.33-.33.33-.86 0-1.19zM24 2C11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22S36.15 2 24 2zm10 25h-4v4h-4v-4h-4v-4h4v-4h4v4h4v4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center mt-10 animate-bounce">
          <a href="#aboutme">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12.75l-7.5 7.5-7.5-7.5M19.5 3.75l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
