import React from "react";

export default function Skills() {
  const skills = [
    "Core Java",
    "HTML, CSS, JavaScript, React.js",
    "Data Structures & Algorithms",
    "OOP Principles, Design Patterns",
    "Git & GitHub",
    "Communication Skills",
  ];

  return (
    <section id="skills" className="py-16 bg-blue-50 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-blue-600 border-b-4 border-blue-500 inline-block mb-8">
        Technical Skills
      </h2>
      <ul className="grid md:grid-cols-2 gap-4 list-disc ml-6 text-lg">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
