import React, { useState, useEffect } from "react";

export default function SecurityGate({ onUnlock }) {
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === "avinash") {
      localStorage.setItem("resumeAccess", "true");
      onUnlock(true);
    } else {
      alert("❌ Incorrect PIN! Try again.");
    }
  };

  useEffect(() => {
    const access = localStorage.getItem("resumeAccess");
    if (access === "true") {
      onUnlock(true);
    }
  }, [onUnlock]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800">
      <div className="bg-white/80 backdrop-blur-md border border-blue-100 p-10 rounded-2xl shadow-lg text-center max-w-sm w-full transition-all duration-300 hover:shadow-xl">
        <h1 className="text-3xl font-extrabold mb-3 text-blue-600 drop-shadow-sm">
          🔐 Secure Access
        </h1>
        <p className="mb-5 text-gray-600 text-sm">
          Please enter your access PIN to continue
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full border border-blue-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 placeholder-gray-400 text-gray-700"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-sm"
          >
            Unlock
          </button>
        </form>

        <p className="mt-4 text-sm text-blue-500 italic">Hint: your name 😉</p>
      </div>
    </div>
  );
}
