import React, { useState, useEffect } from "react";
// import SecurityGate from "./components/SecurityGate.js";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import QuoteSlider from "./components/QuoteSlider.js";
import Skills from "./components/Skills.js";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Achievements from "./components/Achievements.js";
import Ratings from "./components/Ratings.js";
import Footer from "./components/Footer.js";
import Gallery from "./components/Gallery.js";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <QuoteSlider />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Gallery />
      <Ratings />
      <Footer />
    </div>
  );
}
