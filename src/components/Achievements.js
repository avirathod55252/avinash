import React from "react";

export default function Achievements() {
  const achievements = [
    "🏆 Participated in MetLife Hack4Job (12-hour hackathon, Pune).",
    "🥇 1st Rank - Python Warriors Competition (team of 2).",
    "🎓 2nd Rank in 2nd Year CSE Department (2021-22).",
    "🏅 3rd Rank in 3rd Year CSE Department (2022-23).",
    "⌨️ Govt Certified Typist (English, 30 WPM, Grade A).",
    "💻 Jr Software Developer - Govt. of Maharashtra.",
    "📘 DSA (Alpha Batch - Apna College, Shradha Khapra).",
  ];

  return (
    <section id="achievements" className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-blue-600 border-b-4 border-blue-500 inline-block mb-8">
        Achievements & Certifications
      </h2>
      <ul className="list-disc ml-6 space-y-3 text-lg">
        {achievements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
