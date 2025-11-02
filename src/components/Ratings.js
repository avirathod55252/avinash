import React from "react";

export default function Ratings() {
  const ratings = [
    { skill: "Programming (Java, JS, React)", level: 90 },
    { skill: "Data Structures & Algorithms", level: 85 },
    { skill: "Web Development", level: 95 },
    { skill: "Communication", level: 88 },
    { skill: "Experience (Industry Exposure)", level: 92 },
  ];

  return (
    <section id="ratings" className="py-16 bg-blue-100 max-w-6xl mx-auto px-6 rounded-lg">
      <h2 className="text-3xl font-bold text-blue-700 border-b-4 border-blue-600 inline-block mb-8">
        Resume Dashboard (Skill Ratings)
      </h2>
      <div className="space-y-6">
        {ratings.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">{item.skill}</span>
              <span className="text-sm text-gray-600">{item.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${item.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
