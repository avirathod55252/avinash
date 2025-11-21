import React, { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  // ------------------ ACHIEVEMENTS IMAGES ------------------
  const achievements = [
    {
      src: "/avi2.jpeg",
      caption:
        "AI Seminar Participation – Regional Training Center, Khadakwasla Pune",
    },
    {
      src: "/avi3.jpeg",
      caption:
        "Republic Day Celebration – Army Tanks, Robotics, Drone & Gun Demo",
    },
    {
      src: "/a2.jpg",
      caption: "Independence Day Celebration",
    },
    {
      src: "/a1.jpeg",
      caption: "Hackathon Final Round Participation",
    },
    {
      src: "/A4.jpeg",
      caption: "Appreciation Certificate from Vikrant More IDES Officer ",
    },
    {
      src: "/a5.jpeg",
      caption: "Ahilyanagar Cantonemnt Team : Har Ghar Tiranga",
    },
  ];

  // ------------------ CERTIFICATE IMAGES ------------------
  const certificates = [
    {
      src: "/a3.jpeg",
      caption: "College Topper Award - B.Tech CSE",
    },
    {
      src: "/sih.jpeg",
      caption: "Smart India Hackathon -Institute Level Participation",
    },
    {
      src: "/metlife.jpeg",
      caption: "12 hour MetLife Hackathon Goodie Bag, Participation Award",
    },
    {
      src: "/Pyt.jpeg",
      caption:
        "Python Warrior Winner  Certificate - Bharati Vidyapeeth Kolhapur",
    },
    {
      src: "/gfg.jpeg",
      caption: "Geeks for Geeks Technical Scripter ",
    },
    {
      src: "/Syy.jpg",
      caption: "Second Year Topper Award -B.Tech CSE",
    },
    {
      src: "/a6.jpeg",
      caption: "Treasure Hunt Winner 1st Prize : Extra Curricullum ",
    },
    {
      src: "/jrs.jpg",
      caption: "Jr Software Developer : Goverment certified ",
    },
  ];

  // Lightbox Image State
  const [selectedImage, setSelectedImage] = useState(null);

  // ------------------ IMAGE GRID COMPONENT ------------------
  const renderGrid = (list) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {list.map((img, index) => (
        <div
          key={index}
          onClick={() => setSelectedImage(img)}
          className="cursor-pointer group"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              src={img.src}
              alt="achievement"
              className="object-cover w-full h-56 group-hover:scale-105 transition-transform duration-300"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <span className="text-white text-lg font-semibold">View</span>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-3 text-center text-gray-700 font-medium">
            {img.caption}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-20 px-6 md:px-12 bg-gray-50" id="gallery">
      {/* ------------------ SECTION 1: ACHIEVEMENTS ------------------ */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          My <span className="text-blue-600">Achievements</span>
        </h2>
        <p className="mt-2 text-gray-600 text-lg">
          Events, seminars, celebrations, and special moments from my journey.
        </p>
      </div>

      {renderGrid(achievements)}

      {/* ------------------ GAP ------------------ */}
      <div className="h-20"></div>

      {/* ------------------ SECTION 2: CERTIFICATES ------------------ */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          My <span className="text-green-600">Certificates</span>
        </h2>
        <p className="mt-2 text-gray-600 text-lg">
          Awards, recognitions, academic and professional certifications.
        </p>
      </div>

      {renderGrid(certificates)}

      {/* ------------------ LIGHTBOX MODAL ------------------ */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow"
            >
              <X size={22} />
            </button>

            <img
              src={selectedImage.src}
              alt="preview"
              className="rounded-lg mb-4 max-h-[70vh] mx-auto"
            />

            <p className="text-center text-gray-700 font-semibold text-lg">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
