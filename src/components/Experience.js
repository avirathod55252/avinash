import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Computer Programmer – 1 Year and 1 Month Experience",
      company: "Ahilyanagar Cantonment Board",
      companyUrl: "https://ahmednagar.cantt.gov.in/",
      duration: "22 July 2024 To 31 August 2025",
      logo: "/acb.png",
      logoClass: "w-full max-w-[350px] h-auto object-contain mx-auto sm:mx-0",
      points: [
        "Office Website Maintenance – Maintained and updated the official office website to ensure smooth functionality, content accuracy, and availability of services.",
        "NIC Email & Communication Handling – Regularly monitored and managed official NIC email communications to ensure timely responses and coordination with internal and external stakeholders.",
        "Server-Related Support – Resolved server-related queries and issues, ensuring minimal downtime and smooth operation of hosted applications and services.",
        "Network-Related Support – Assisted in resolving network connectivity and performance issues and coordinated with concerned teams to maintain stable network operations.",
        "Learning & Implementation of C++ and Java – Learned and applied C++ and Java concepts focusing on security implementation for internal projects and portal development.",
        "Tender Upload Portal – Managed complete tender lifecycle including creating/uploading tenders, verifying bidder details, coordinating with cross-functional teams, implementing Java-based security features, re-tendering if eligibility criteria not met, organizing pre-bid meetings, verifying BOQ and bid documents, and supporting final submission and tender/project allocation.",
        "BARC Encroachment Detection Project – Worked on defense land encroachment detection using BARC Change Detection Software, QGIS, Google Earth Image Downloader; collected Shape Files, identified geographic boundaries, downloaded satellite images for multiple time periods, processed images with software, imported results into QGIS, and marked detected changes visually.",
        "NIC Collaboration – eChhawani Portal UAT – Performed User Acceptance Testing for public service functionalities including online water bill and rent payments, services for defense area residents, employee registration, role-based access control, and service workflows to ensure functionality met user and organizational requirements.",
        "Lease Extension & Renewal Portal – Contributed to Real-Time Record Management System for lease renewal and extension, performed end-to-end UAT, documented results in Excel, collaborated with cross-functional teams for issue resolution, and tested securely using leased line private network.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300"
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
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-700 hover:shadow-2xl border border-blue-100 dark:border-gray-700 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-6">
                {/* Logo + Role */}
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  {/* Company Logo */}
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
                  className="text-lg font-semibold text-purple-600 dark:text-purple-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 transition-all duration-200 mb-3 inline-block text-center sm:text-left"
                >
                  {exp.company}
                </a>
              ) : (
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 text-center sm:text-left">
                  {exp.company}
                </h4>
              )}

              {/* Points List */}
              <ul className="list-disc ml-5 sm:ml-6 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed text-left">
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
