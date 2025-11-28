import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Computer Programmer (Contract)",
      company: "Ahilyanagar Cantonment Board",
      companyUrl: "https://ahmednagar.cantt.gov.in/",
      duration: "Jul 2024 – Aug 2025",
      logo: "/acbc.png",
      badge: "/em.png",
      points: [
        "Website Management & Maintenance – Developed new pages, enhanced the homepage slider, built modules, and performed UAT for RTRM and E-Chhawani platforms.",
        "GIS & Software Setup (BARC Project) – Installed and configured BARC Change Detection Software and executed GIS workflows using QGIS.",
        "Zoho Developer – Migrated legacy systems from NIC to Zoho, administered Zoho Workplace, and implemented secure authentication via Government OneAuth (2FA).",
        "Worked on major government software including RTRM, Parichay, and multiple e-Governance platforms.",
        "Published and managed E-Procurement tenders under the Defence category with security validations and plugin checks using Java.",
        "Handled daily operations of Government email systems such as NIC Mail and the official Government Mail Portal.",
        "Managed statutory public service portals such as the RTI Portal (Right to Information Act, 2005) and CPGRAMS for citizen grievances.",
        "Contributed to the Real Time Record Management (RTRM) project by DGDE, performing software testing and supporting modules related to encroachment monitoring on defence land.",
      ],
    },
    {
      role: "Technical Content Writer",
      company: "GeeksforGeeks (Remote)",
      duration: "Apr 2023 – Apr 2024",
      logo: "/gfg1.png",
      points: [
        "Published and improved 100+ technical articles.",
        "Secured 12th rank in Technical Scripter 2022.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 
        dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-10 text-center">
          Experience
          <div className="h-1 w-32 bg-blue-500 dark:bg-blue-400 mx-auto mt-3 rounded-full"></div>
        </h2>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-700 
                hover:shadow-2xl border border-blue-100 dark:border-gray-700 p-8 
                transition-all duration-300 hover:-translate-y-1"
            >
              {/* --- TOP ROW — LOGO / ROLE / BADGE --- */}
              <div className="flex justify-between items-center mb-6">
                {/* Logo + Role */}
                <div className="flex items-center gap-5">
                  {/* Company Logo */}
                  {exp.logo && (
                    <div
                      className="w-20 h-20 bg-white dark:bg-gray-800 border border-gray-200 
                        dark:border-gray-700 rounded-xl shadow-md flex items-center justify-center p-1
                        hover:scale-105 transition"
                    >
                      <img
                        src={exp.logo}
                        alt="Company Logo"
                        className="w-[95%] h-[95%] object-contain"
                      />
                    </div>
                  )}

                  {/* Role + Duration */}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                      {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Badge — aligned right of role */}
                {exp.badge && (
                  <div
                    className="w-20 h-20 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                      rounded-xl shadow-lg flex items-center justify-center p-3
                      hover:scale-110 transition duration-300"
                  >
                    <img
                      src={exp.badge}
                      alt="Badge"
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              {/* --- Company Name (Linked) --- */}
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-purple-600 dark:text-purple-400 
                    hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 
                    transition-all duration-200 mb-3 inline-block"
                >
                  {exp.company}
                </a>
              ) : (
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  {exp.company}
                </h4>
              )}

              {/* --- Points List --- */}
              <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
