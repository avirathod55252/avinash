import React from "react";
import SlidingBackground from "./SlidingBackground";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-28 md:pt-32 bg-white dark:bg-black"
    >
      {/* Sliding Background */}
      <SlidingBackground />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 
        dark:from-black/80 dark:via-black/60 dark:to-black/90"
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Emblem (Improved) */}
        <div className="mb-6 flex justify-center">
          <img
            src="/emblem.png"
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

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-white">
          AVINASH <span className="text-yellow-400 drop-shadow-lg">RATHOD</span>
        </h1>

        {/* Flag Line */}
        <div className="flex mt-4 rounded-full overflow-hidden shadow-xl">
          <div className="h-1.5 w-20 sm:w-24 md:w-28 bg-orange-500" />
          <div className="h-1.5 w-20 sm:w-24 md:w-28 bg-white" />
          <div className="h-1.5 w-20 sm:w-24 md:w-28 bg-green-500" />
        </div>

        {/* Subtitle */}
        <h2 className="mt-6 text-sm sm:text-base md:text-lg tracking-wide text-gray-200 font-semibold">
          Unique Portfolio of Avinash Rathod
        </h2>

        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed px-2">
          Where AI-driven Innovation Meets Excellence — Showcasing Skills,
          Intelligence, Creativity, and Professional Growth.
        </p>

        {/* AI Search Bar */}
        <div
          className="mt-12 w-full max-w-4xl bg-white/90 dark:bg-black/70 backdrop-blur-xl 
          rounded-2xl shadow-xl p-2 flex flex-col md:flex-row gap-2 border 
          border-gray-200 dark:border-white/20"
        >
          <div
            className="flex items-center flex-1 px-4 py-3 border border-gray-200 
            dark:border-white/20 rounded-xl bg-gray-50 dark:bg-black/40 
            focus-within:ring-2 focus-within:ring-red-500 transition"
          >
            <span className="text-gray-400 mr-2">🤖</span>
            <input
              type="text"
              placeholder="Ask AI about skills, projects, achievements..."
              className="w-full outline-none bg-transparent text-sm md:text-base 
              text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>

          <button
            className="bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold 
            px-8 py-3 rounded-xl hover:from-pink-600 hover:to-red-600 transition-all duration-200 
            shadow-md hover:shadow-xl active:scale-95 text-sm md:text-base"
          >
            Search
          </button>
        </div>

        {/* Categories */}
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
                className="px-4 sm:px-5 py-2 rounded-full border border-white/20 
                hover:bg-white/10 transition-all hover:scale-105 text-xs sm:text-sm"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
