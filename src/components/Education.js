import React from "react";
import { FaUniversity, FaSchool, FaBookOpen } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      icon: <FaUniversity className="text-blue-600 text-3xl" />,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Dr. D.Y. Patil College of Engineering, Kolhapur",
      score: "81.33%",
      year: "June 2024",
    },
    {
      icon: <FaBookOpen className="text-purple-600 text-3xl" />,
      degree: "HSC",
      institution: "Shriram Jr College, Kada",
      score: "72.60%",
      year: "Feb 2020",
    },
    {
      icon: <FaSchool className="text-pink-600 text-3xl" />,
      degree: "SSC",
      institution: "Sudharshan Vidyalay, Sangavi (Patan)",
      score: "82.60%",
      year: "March 2018",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center relative">
          Education
          <div className="h-1 w-32 bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </h2>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-blue-100 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.degree}
              </h3>
              <p className="text-gray-600 font-medium">{item.institution}</p>
              <p className="text-sm text-blue-600 mt-2 font-semibold">
                {item.score} • {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
