import React, { useEffect, useState } from "react";

export default function QuoteSlider() {
  const quotes = [
    "“Code is like humor. When you have to explain it, it’s bad.” — Cory House",
    "“The goal is to turn data into information, and information into insight.” — Carly Fiorina",
    "“Every great developer you know got there by solving problems they were unqualified to solve.” — Patrick McKenzie",
    "“Without data, you’re just another person with an opinion.” — W. Edwards Deming",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % quotes.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-blue-600 text-white text-center py-6">
      <p className="text-lg italic transition-all duration-700 ease-in-out">
        {quotes[index]}
      </p>
    </section>
  );
}
