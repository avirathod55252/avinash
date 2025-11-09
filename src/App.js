import React, { useState, useEffect } from "react";
import SecurityGate from "./components/SecurityGate.js";
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
import Documents from "./components/Documents.js";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  // ✅ Check localStorage once on load + check for expiry
  useEffect(() => {
    const access = localStorage.getItem("resumeAccess");
    const expiry = localStorage.getItem("accessExpiry");

    if (access === "true" && expiry && Date.now() < Number(expiry)) {
      setAuthenticated(true);
    } else {
      localStorage.removeItem("resumeAccess");
      localStorage.removeItem("accessExpiry");
      setAuthenticated(false);
    }

    // ✅ Auto-lock every 5 sec if expired
    const interval = setInterval(() => {
      const expiryCheck = localStorage.getItem("accessExpiry");
      if (expiryCheck && Date.now() >= Number(expiryCheck)) {
        alert("Session expired! Please re-enter PIN 🔒");
        localStorage.removeItem("resumeAccess");
        localStorage.removeItem("accessExpiry");
        setAuthenticated(false);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ✅ When user unlocks successfully, set expiry (5 minutes)
  const handleUnlock = (value) => {
    if (value) {
      const expiryTime = Date.now() + 5 * 60 * 1000; // 5 minutes
      localStorage.setItem("resumeAccess", "true");
      localStorage.setItem("accessExpiry", expiryTime.toString());
      setAuthenticated(true);
    }
  };

  // ✅ Show Security PIN screen first (locked)
  if (!authenticated) {
    return <SecurityGate onUnlock={handleUnlock} />;
  }

  // ✅ Show resume content once unlocked
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <QuoteSlider />
      <Skills />
      <Education />
      <Experience />
      <Documents />
      <Projects />
      <Achievements />
      <Ratings />
      <Footer />

      {/* ✅ Logout button only visible after unlocking */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => {
            localStorage.removeItem("resumeAccess");
            localStorage.removeItem("accessExpiry");
            setAuthenticated(false);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 transition"
        >
          🔒 Logout
        </button>
      </div>
    </div>
  );
}
