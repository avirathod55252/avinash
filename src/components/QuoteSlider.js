import React, { useEffect, useState } from "react";

export default function QuoteSlider() {
  const quotes = [
    {
      text: "“Excellence happens not by accident. It is a process.”",
      author: "— Dr. A.P.J. Abdul Kalam",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/A.P.J._Abdul_Kalam.jpg",
    },
    {
      text: "“Progress is often equal to the difference between mind and mindset.”",
      author: "— N.R. Narayana Murthy",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Narayana_Murthy_in_2010.jpg",
    },
    {
      text: "“Wear your failure as a badge of honor.”",
      author: "— Sundar Pichai",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Sundar_Pichai_in_2021_%28cropped%29.jpg",
    },
    {
      text: "“Take the stones people throw at you, and use them to build a monument.”",
      author: "— Ratan Tata",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Ratan_Tata_photo.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % quotes.length),
      5000
    );
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-800 text-center py-16 transition-all duration-700">
      <div className="flex flex-col items-center justify-center gap-6 px-6">
        {/* Profile Image */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-500">
          <img
            src={quotes[index].img}
            alt={quotes[index].author}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Quote Text */}
        <p className="text-xl md:text-2xl italic font-medium max-w-2xl text-gray-700 leading-relaxed transition-opacity duration-700 ease-in-out">
          {quotes[index].text}
        </p>

        {/* Author */}
        <p className="text-sm md:text-base font-semibold text-blue-600">
          {quotes[index].author}
        </p>

        {/* Dots Indicator */}
        <div className="flex gap-2 mt-4">
          {quotes.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-blue-500 scale-110" : "bg-blue-200"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
