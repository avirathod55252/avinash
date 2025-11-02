import React from "react";
import { ShoppingCart, Video, Globe } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Ecommerce Web Portal (MERN Stack)",
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      desc: "Developed a dynamic ecommerce platform for buying and selling products such as clothes and electronics. Features include secure payment integration, product management, and Node.js + MongoDB backend.",
      tech: ["React.js", "Node.js", "MongoDB", "Express", "TailwindCSS"],
      link: "https://your-ecommerce-demo-link.com",
    },
    {
      title: "Video Hub (React + Chakra UI)",
      icon: <Video className="w-6 h-6 text-blue-600" />,
      desc: "A responsive single-page web app for uploading and playing videos. Built with React and Chakra UI for a smooth, modern interface.",
      tech: ["React.js", "Chakra UI", "HTML", "CSS"],
      link: "https://your-videohub-demo-link.com",
    },
    {
      title: "Portfolio Website",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      desc: "Personal portfolio showcasing projects, education, and skills with smooth animations, responsive design, and QR integration.",
      tech: ["React.js", "TailwindCSS", "Framer Motion"],
      link: "https://your-portfolio-link.com",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-white to-blue-50 max-w-6xl mx-auto px-6"
    >
      <h2 className="text-3xl font-bold text-blue-700 border-b-4 border-blue-600 inline-block mb-10">
        Academic Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group p-6 bg-white rounded-xl shadow-md border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition">
                {p.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
                {p.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-3">{p.desc}</p>

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

            {/* Live Demo Button */}
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
