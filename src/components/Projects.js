import React from "react";
import { BrainCircuit } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "InsuraSphere - Full Stack Insurance Management System",
      icon: (
        <img
          src="/is.png"
          alt="InsuraSphere Logo"
          className="w-10 h-10 object-contain drop-shadow-lg"
        />
      ),
      desc: [
        "Full-stack insurance management platform for Life, Health & Vehicle, Cyber Attack, Pet, Travel, etc. policies.",
      ],
      about: [
        // ← add brief about-lines here
        "Full-stack demo app built to manage insurance policies including Life, Health, Vehicle and more.",
        "Supports secure authentication, role-based access, and policy workflow (apply → review → decision).",
        "Includes dynamic premium calculator and admin dashboard to manage policies.",
      ],
      features: [
        "Policy browsing, comparison and purchasing flow.",
        "Dynamic premium calculation based on user inputs.",
        "Role-based authentication and protected admin/user routes.",
        "Admin dashboard for managing policy applications.",
        "Clean UI built using React.js + TailwindCSS.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "TailwindCSS"],
      link: "https://insura-sphere.vercel.app/",
    },

    {
      title:
        "NEET.ai – AI-Powered NEET Preparation Assistant | Innovation & Research Project",
      icon: (
        <BrainCircuit className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      ),
      desc: [
        "NEET.ai is an AI-powered study companion designed for Indian medical aspirants with unlimited mock tests, instant doubt solving, and NCERT-based personalized learning.",
      ],
      about: [
        "Next-gen AI-driven learning platform for NEET exam aspirants.",
        "Uses Google Gemini 2.5 Flash model to generate dynamic practice content.",
        "Focuses on NCERT syllabus, high-yield topics, and personalized learning.",
      ],
      features: [
        "🤖 AI Doubt Solver – Instant step-by-step answers for text or uploaded images.",
        "📝 Infinite Mock Tests – Topic-wise MCQs with difficulty levels (Easy/Medium/Hard).",
        "⚡ Daily Power Trio – Daily challenge across PCB with streak tracking.",
        "🌐 Synapse Community – Notes + diagrams shared with AI-powered summaries.",
        "📅 Smart Calendar – Study streaks, exam countdown (May 4), and progress analytics.",
      ],
      tech: [
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Google Gemini API (gemini-2.5-flash)",
        "Lucide React Icons",
      ],
      link: "https://aistudio.google.com/apps/drive/1rjNBVD5thijXK-CakSljD8CuDjWow3Bp?fullscreenApplet=true&showPreview=true&showAssistant=true",
    },

    {
      title: "AI_Mood_Tracker – Mood Tracker & Mental Health Companion",
      icon: (
        <BrainCircuit className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      ),
      desc: [
        "AI_Mood_Tracker is a mental-health companion app that lets users track mood, journal thoughts, and get AI-powered mood analysis and insights.",
      ],
      about: [
        // you can fill or update these from your GitHub repo
        "Users can log daily mood, thoughts and feelings.",
        "The app analyses mood patterns over time and provides insights.",
        "Includes journaling, mood history charts, and mood-based recommendations.",
      ],
      features: [
        "📝 Daily Mood Logging & Journaling",
        "📊 Mood History Visualization and Analytics",
        "🤖 AI-Powered Mood Analysis & Insights",
        "🔔 Mood Reminders & Notifications",
        "🔐 Privacy-first data handling (localStorage/data abstraction)",
      ],
      tech: ["React.js", "Streamlit", "Python", "Some ML/AI library"], // adjust as per actual stack
      link: "https://avirathod55252-ai-mood-tracker-app-gohegq.streamlit.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 max-w-6xl mx-auto px-6 transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 border-b-4 border-blue-600 dark:border-blue-400 inline-block mb-10">
        Work & Personal Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-blue-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition">
                {p.icon}
              </div>

              {/* TITLE AS CLICKABLE LINK */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition underline-offset-2 hover:underline"
              >
                {p.title}
              </a>
            </div>

            {/* PROJECT LIVE Link (top) */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline mb-3 inline-block"
            >
              🔗 Project Live
            </a>

            {/* Short Description */}
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1 mb-3">
              {p.desc.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>

            {/* ABOUT SECTION */}
            {p.about && (
              <>
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-1">
                  📖 About:
                </h4>
                <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  {p.about.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* FEATURES SECTION */}
            {p.features && (
              <>
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-1">
                  🌟 Features:
                </h4>
                <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  {p.features.map((feat, j) => (
                    <li key={j}>{feat}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {p.tech.map((t, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium border border-blue-200 dark:border-blue-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
