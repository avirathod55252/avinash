import React, { useState, useEffect } from "react";

export default function QuoteSlider() {
  const quotes = [
    {
      text: "“Excellence happens not by accident. It is a process.”",
      author: "— Dr. A.P.J. Abdul Kalam",
      img: process.env.PUBLIC_URL + "/apg.jpg", // ✅ from public folder
    },
    {
      text: "“Progress is often equal to the difference between mind and mindset.”",
      author: "— N.R. Narayana Murthy",
      img: process.env.PUBLIC_URL + "/nrn.jpg", // ✅ from public folder
    },
    {
      text: "“Wear your failure as a badge of honor.”",
      author: "— Sundar Pichai",
      img: process.env.PUBLIC_URL + "/sundar.avif", // ✅ from public folder
    },
    {
      text: "“Take the stones people throw at you, and use them to build a monument.”",
      author: "— Ratan Tata",
      img: process.env.PUBLIC_URL + "/rt.jpg", // ✅ from public folder
    },
    {
      text: "“Technology is best when it brings people together.”",
      author: "— Matt Mullenweg",
      img: process.env.PUBLIC_URL + "/sundar.avif", // reuse existing image
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-change quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 400); // Fade out before switching
  }, 3000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800 transition-all duration-700">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-6">
        {/* ✅ Profile Picture */}
        <div className="relative w-48 h-48 rounded-full bg-white overflow-hidden shadow-2xl border-4 border-blue-200 hover:scale-110 transition-transform duration-500">
          <img
            src={quotes[index].img}
            alt={quotes[index].author}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* ✅ Quote Text */}
        <p
          className={`mt-10 text-2xl md:text-3xl italic font-medium text-gray-700 leading-relaxed max-w-2xl transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {quotes[index].text}
        </p>

        {/* ✅ Author Name */}
        <p
          className={`mt-4 text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {quotes[index].author}
        </p>

        {/* ✅ Dot Indicators */}
        <div className="flex gap-2 mt-8">
          {quotes.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-blue-500 scale-125" : "bg-blue-200"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
