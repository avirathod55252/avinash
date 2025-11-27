import React from "react";
import { FaBookOpen, FaSchool } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      year: "2024",
      icon: (
        <img
          src="/dyp-logo.png"
          alt="DYP Logo"
          className="w-20 h-25 object-contain drop-shadow-lg"
        />
      ),
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Dr. D.Y. Patil College of Engineering, Kolhapur",
      university: "Shivaji University, Kolhapur",
      website: "https://coes.dypgroup.edu.in/",
      score: "81.33% (CGPA: 8.78)",
      grade: "Grade: A+",
      date: "20 June 2024",
      certificate: {
        certNo: "2023-2024/3105",
        seatNo: "8914",
        prn: "2020082220",
      },
      description:
        "Awarded the B.Tech degree at the 61st Convocation Ceremony for outstanding academic excellence under Shivaji University.",
      highlight: true,
    },
    {
      year: "2020",
      icon: (
        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center shadow-md border border-purple-300">
          <FaBookOpen className="text-purple-700 text-4xl" />
        </div>
      ),
      degree: "HSC (Science - PCMB)",
      institution: "Shriram Jr College, Kada",
      board: "Maharashtra State Board",
      address: "Shriram Vidyalaya - Kada, MH SH 157, Kada, Maharashtra 414202",
      score: "72.62%",
      date: "Feb 2020",
    },

    {
      year: "2018",
      icon: <FaSchool className="text-pink-600 text-5xl" />,
      degree: "SSC",
      institution: "Sudharshan Vidyalay, Sangavi (Patan)",
      score: "82.60%",
      date: "March 2018",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-300 mb-16">
          Education
        </h2>

        <div className="relative flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-blue-300/40 dark:bg-blue-600/30"></div>

          {education.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div
                className={`hidden lg:flex w-6 h-6 rounded-full border-4 
                ${
                  item.highlight
                    ? "border-blue-600 bg-blue-500"
                    : "border-gray-400 bg-gray-300 dark:bg-gray-600"
                } z-10`}
              ></div>

              <div
                className={`mt-6 lg:mt-10 p-6 rounded-xl shadow-xl backdrop-blur-lg 
                  transition-all duration-300 border w-[300px]
                  ${
                    item.highlight
                      ? "bg-white/70 dark:bg-gray-900/70 border-blue-500 shadow-blue-300"
                      : "bg-white/50 dark:bg-gray-800/70 border-gray-300"
                  }
                `}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>

                <p className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-2">
                  {item.year}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {item.degree}
                </h3>

                {item.university && (
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mt-1">
                    {item.university}
                  </p>
                )}

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.institution}
                </p>

                {/* ✅ SHOW ADDRESS */}
                {item.address && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    📍 {item.address}
                  </p>
                )}

                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-xs mt-2 block hover:underline"
                  >
                    View College →
                  </a>
                )}

                <p className="text-sm font-bold text-blue-600 dark:text-blue-300 mt-2">
                  {item.score}
                </p>

                {item.grade && (
                  <p className="text-sm text-green-700 dark:text-green-400 font-semibold">
                    {item.grade}
                  </p>
                )}

                <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                  {item.date}
                </p>

                {item.certificate && (
                  <div className="mt-3 text-xs text-gray-700 dark:text-gray-400 leading-relaxed">
                    <p>Cert No: {item.certificate.certNo}</p>
                    <p>Seat No: {item.certificate.seatNo}</p>
                    <p>PRN: {item.certificate.prn}</p>
                  </div>
                )}

                {item.description && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 italic leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
