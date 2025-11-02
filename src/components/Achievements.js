import React from "react";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      text: "Participated in MetLife Hack4Job (12-hour hackathon, Pune).",
    },
    { icon: "🥇", text: "1st Rank - Python Warriors Competition (team of 2)." },
    { icon: "🎓", text: "2nd Rank in 2nd Year CSE Department (2021-22)." },
    { icon: "🏅", text: "3rd Rank in 3rd Year CSE Department (2022-23)." },
    { icon: "⌨️", text: "Govt Certified Typist (English, 30 WPM, Grade A)." },
    { icon: "💻", text: "Jr Software Developer - Govt. of Maharashtra." },
    { icon: "📘", text: "DSA (Alpha Batch - Apna College, Shradha Khapra)." },
  ];

  return (
    <section
      id="achievements"
      className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center relative inline-block mx-auto">
          Achievements & Certifications
          <div className="h-1 w-32 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </h2>

        {/* List of Achievements */}
        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md hover:shadow-xl border border-blue-100 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="text-gray-700 font-medium leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
