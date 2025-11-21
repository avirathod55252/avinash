import React from "react";
import { ShoppingCart, BrainCircuit, ShieldCheck } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "InsuraSphere -  Full Stack Insurance Management System",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      desc: [
        "Full-stack insurance management platform for Life, Health & Vehicle , Cyber Attack , Pet , Travel,  etc policies.",
        "Allows users to browse, compare, and purchase insurance policies.",
        "Includes secure role-based authentication and protected routes.",
        "Dynamic premium calculator for instant policy quotations.",
        "Complete policy workflow (Apply → Review → Approve/Reject).",
        "Admin dashboard for managing policies and applications.",
        "Clean UI built using React.js + TailwindCSS.",
        "Backend powered by Node.js, Express.js with JSON file data store.",
        "InsuraSphere is a demo full-stack insurance management app built for learning & practical demonstration.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "TailwindCSS"],
      link: "https://insura-sphere.vercel.app/",
    },

    {
      title:
        "NEET AI Doctor- AI-Powered NEET Preparation Assistant,Innovation & Research Project ",
      icon: <BrainCircuit className="w-6 h-6 text-blue-600" />,
      desc: [
        "AI-driven NEET exam preparation system with smart doubt-solving.",
        "Chapter-wise practice tests and difficulty-based question generation.",
        "AI explanations for incorrect answers.",
        "NEET PYQ analysis + strength/weakness report.",
        "Leaderboard + adaptive learning engine.",
        "Designed for real-world scalability with a clean UI and branding kit.",
      ],
      tech: ["React.js", "Node.js", "OpenAI API", "TailwindCSS"],
      link: "./",
    },

    {
      title: "E-Commerce Web Portal (Final Year Group Project)",
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      desc: [
        "Full-stack ecommerce platform for clothes, electronics, and accessories.",
        "User authentication with JWT.",
        "Product catalog with filters, search, and category view.",
        "Admin CRUD: Add, Edit, Delete products.",
        "Shopping cart + wishlist + order tracking.",
        "Integrated basic payment flow simulation.",
        "Invoice generation and email confirmation.",
      ],
      tech: ["React.js", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      link: "./",
    },
    {
      title: "Quote Vault",
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      desc: [
        "A modern quote browsing and management platform.",
        "Users can explore random, trending, and category-based quotes.",
        "Bookmark, like, and copy quotes instantly.",
        "Clean, fast, and responsive UI for smooth browsing.",
        "Powered by a public quotes API with optimized fetching.",
      ],
      tech: ["Next.js", "React.js", "TailwindCSS", "API Integration"],
      link: "https://quote-vault-orpin.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-white to-blue-50 max-w-6xl mx-auto px-6"
    >
      <h2 className="text-3xl font-bold text-blue-700 border-b-4 border-blue-600 inline-block mb-10">
        Self-Innovated Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group p-6 bg-white rounded-xl shadow-md border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition">
                {p.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
                {p.title}
              </h3>
            </div>

            {/* Description Bullet Points */}
            <ul className="list-disc ml-5 text-gray-700 space-y-1 mb-3">
              {p.desc.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {p.tech.map((t, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Live Demo */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline hover:text-blue-800 transition"
            >
              🔗 Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
