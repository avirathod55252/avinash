import React from "react";
import { Code, Database, Globe, MessageSquare, Briefcase } from "lucide-react";

export default function Ratings() {
  const ratings = [
    {
      skill: "Programming (Java, JS, React)",
      level: 90,
      icon: <Code className="w-6 h-6 text-blue-600" />,
    },
    {
      skill: "Data Structures & Algorithms",
      level: 85,
      icon: <Database className="w-6 h-6 text-green-600" />,
    },
    {
      skill: "Web Development",
      level: 95,
      icon: <Globe className="w-6 h-6 text-purple-600" />,
    },
    {
      skill: "Communication",
      level: 88,
      icon: <MessageSquare className="w-6 h-6 text-yellow-600" />,
    },
    {
      skill: "Experience (Industry Exposure)",
      level: 92,
      icon: <Briefcase className="w-6 h-6 text-pink-600" />,
    },
  ];

  return (
    <section
      id="ratings"
      className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 max-w-6xl mx-auto px-6 rounded-2xl shadow-lg transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-10 tracking-wide">
        Skill Rating
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {ratings.map((item, i) => (
          <div
            key={i}
            className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-md dark:shadow-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                  {item.skill}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {item.level}%
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 h-3 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${item.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
