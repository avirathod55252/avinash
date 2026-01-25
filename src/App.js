import React from "react";
import ThemeWrapper from "./components/ThemeWrapper";
import Navbar from "./components/Navbar.js";
import QuoteSlider from "./components/QuoteSlider.js";
import Skills from "./components/Skills.js";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Achievements from "./components/Achievements.js";
import Ratings from "./components/Ratings.js";
import Footer from "./components/Footer.js";
import Gallery from "./components/Gallery.js";
import Home from "./components/Home.js";
import About from "./components/About.js";

export default function App() {
  return (
    <ThemeWrapper>
      {/* <Home /> */}
      <Navbar />
      <About />
      {/* <QuoteSlider /> */}
      <Skills />
      <Education />
      <Experience />
      <Projects />
      {/* <Achievements /> */}
      <Gallery />
      {/* <Ratings /> */}
      <Footer />
    </ThemeWrapper>
  );
}
