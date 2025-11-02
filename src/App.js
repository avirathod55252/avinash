import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuoteSlider from "./components/QuoteSlider";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Ratings from "./components/Ratings";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <QuoteSlider />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Ratings />
      <Footer />
    </div>
  );
}
