import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 max-w-6xl mx-auto px-6 bg-blue-50">
      <h2 className="text-3xl font-bold text-blue-600 border-b-4 border-blue-500 inline-block mb-8">
        Academic Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            🛒 Ecommerce Web Portal (MERN Stack)
          </h3>
          <p>
            Developed a fully dynamic platform for buying and selling products
            like clothes and electronics. Includes secure payment integration,
            MongoDB database, and Node.js backend.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            🎥 Video Hub (React + Chakra UI)
          </h3>
          <p>
            One-page responsive web app for video uploading and playback using
            React, HTML, and CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
