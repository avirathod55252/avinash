import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Computer Programmer (Contract)",
      company: "Ahilyanagar Cantonment Board",
      companyUrl: "https://ahmednagar.cantt.gov.in/",
      duration: "Jul 2024 – Aug 2025",
      points: [
        "Website Management & Maintenance – Added new pages, modules, and conducted UAT for RTRM & Echhawani.",
        "GIS & Software Setup (BARC Project) – Configured BARC Change Detection Software with QGIS.",
        "Zoho Developer – Migrated NIC → Zoho, managed Zoho Workplace & 2FA with Gov OneAuth.",
        "Handled government software like RTRM, Parichay, and e-Governance platforms.",
      ],
    },
    {
      role: "Technical Content Writer",
      company: "GeeksforGeeks (Remote)",
      duration: "Apr 2023 – Apr 2024",
      points: [
        "Published and improved 100+ technical articles.",
        "Secured 12th rank in Technical Scripter 2022.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-10 text-center relative">
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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-700 hover:shadow-2xl border border-blue-100 dark:border-gray-700 p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {exp.role}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-2 sm:mt-0">
                  {exp.duration}
                </p>
              </div>

              {/* Company Name with hyperlink if available */}
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-purple-600 dark:text-purple-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 transition-all duration-200 mb-3 inline-block"
                >
                  {exp.company}
                </a>
              ) : (
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  {exp.company}
                </h4>
              )}

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
