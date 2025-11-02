import React from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaComments,
} from "react-icons/fa";
import { SiJavascript, SiPowerbi } from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      name: "Core Java",
      icon: <FaJava className="text-red-500 text-4xl" />,
    },
    {
      name: "HTML, CSS, JavaScript, React.js",
      icon: (
        <div className="flex gap-2">
          <FaHtml5 className="text-orange-500 text-3xl" />
          <FaCss3Alt className="text-blue-500 text-3xl" />
          <SiJavascript className="text-yellow-500 text-3xl" />
          <FaReact className="text-cyan-500 text-3xl" />
        </div>
      ),
    },
    {
      name: "Data Structures & Algorithms",
      icon: <GiNetworkBars className="text-green-500 text-4xl" />,
    },
    {
      name: "OOP Principles & Design Patterns",
      icon: <FaJava className="text-indigo-500 text-4xl" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub className="text-gray-800 text-4xl" />,
    },

    {
      name: "Communication Skills",
      icon: <FaComments className="text-pink-500 text-4xl" />,
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-12 relative inline-block">
          Technical Skills
          <div className="h-1 w-32 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-blue-100 hover:-translate-y-1 transition-all duration-300"
            >
              {skill.icon}
              <p className="text-lg font-semibold text-gray-700">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
