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

        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl leading-relaxed px-2">
          “From India’s Iconic Heritage to the Future of AI — A Developer’s
          Journey of Excellence, Creativity, and Purpose.”
        </p>

        {/* Explore Buttons */}
        <div className="mt-10 text-xs sm:text-sm text-white/90">
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
      </div>
    </section>
  );
}
