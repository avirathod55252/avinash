import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Computer Programmer 1 Year and 1 Month of Experience",
      company: "Ahilyanagar Cantonment Board",
      companyUrl: "https://ahmednagar.cantt.gov.in/",
      duration: "22 July 2024 To 31 August 2025",
      logo: "/acb.png",
      logoClass: "w-full max-w-[350px] h-auto object-contain mx-auto sm:mx-0", // LARGE BANNER LOGO
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
      companyUrl: "https://www.geeksforgeeks.org/",
      duration: "Apr 2023 – Apr 2024",
      logo: "/gfg2.png",
      logoClass: "w-28 h-28 sm:w-32 sm:h-32 object-contain mx-auto sm:mx-0", // SMALL SQUARE LOGO
      points: [
        "Published and improved 100+ technical articles.",
        "Secured 12th rank in Technical Scripter 2022.",
        "Received 4.9/5 average rating from readers.",
        "Specialized in web development, programming languages, and data structures.",
        "Collaborated with editors to ensure high-quality content.",
        "Engaged with the GFG community through comments and feedback.",
        "Trained new content writers and reviewed their articles for quality assurance.",
        "Live Demo – NEET AI Doctor Project (Gemini 3 Pro): https://aistudio.google.com/apps/drive/1rjNBVD5thijXK-CakSljD8CuDjWow3Bp?fullscreenApplet=true&showPreview=true&showAssistant=true",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 
      dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl 
              dark:shadow-gray-700 hover:shadow-2xl border border-blue-100 
              dark:border-gray-700 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-6">
                {/* Logo + Role */}
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  {/* Company Logo (size is different for each experience) */}
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt="Company Logo"
                      className={exp.logoClass}
                    />
                  )}

                  {/* Role + Duration */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Name */}
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-purple-600 dark:text-purple-400 
                  hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 
                  transition-all duration-200 mb-3 inline-block text-center sm:text-left"
                >
                  {exp.company}
                </a>
              ) : (
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 text-center sm:text-left">
                  {exp.company}
                </h4>
              )}

              {/* Points List */}
              <ul
                className="list-disc ml-5 sm:ml-6 text-gray-700 dark:text-gray-300 
                space-y-2 leading-relaxed text-left"
              >
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition break-words"
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
