"use client";

import { useState, useEffect } from "react";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "programming", name: "Programming" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend & DB" },
  { id: "ai", name: "AI & ML" },
  { id: "tools", name: "Tools" },
];

type Skill = {
  name: string;
  categories: string[];
  slug?: string;
  icon?: string;
  forceWhite?: boolean;
};

const skills: Skill[] = [
  // Programming
  {
    name: "Java",
    categories: ["programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C",
    categories: ["programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Python",
    categories: ["programming", "ai"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C#",
    categories: ["programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },

  // Frontend
  { name: "React", categories: ["frontend"], slug: "react" },

  // force white for visibility
  { name: "Next.js", categories: ["frontend"], slug: "nextdotjs", forceWhite: true },
  { name: "Angular", categories: ["frontend"], slug: "angular", forceWhite: true },

  { name: "Tailwind CSS", categories: ["frontend"], slug: "tailwindcss" },
  { name: "JavaScript", categories: ["frontend"], slug: "javascript" },
  { name: "TypeScript", categories: ["frontend"], slug: "typescript" },

  // Backend
  { name: "ASP.NET Core", categories: ["backend"], slug: "dotnet" },
  { name: "Node.js", categories: ["backend"], slug: "nodedotjs" },
  { name: "Express.js", categories: ["backend"], slug: "express", forceWhite: true },
  { name: "FastAPI", categories: ["ai", "backend"], slug: "fastapi" },
  { name: "Spring Boot", categories: ["backend"], slug: "springboot" },
  { name: "MySQL", categories: ["backend"], slug: "mysql" },
  { name: "PostgreSQL", categories: ["backend"], slug: "postgresql" },
  { name: "MongoDB", categories: ["backend"], slug: "mongodb" },
  { name: "SQLite", categories: ["backend"], slug: "sqlite", forceWhite: true },

  // AI
  { name: "LangGraph", categories: ["ai"], slug: "langchain", forceWhite: true },
  { name: "Jupyter", categories: ["ai"], slug: "jupyter" },
  { name: "Google Colab", categories: ["ai"], slug: "googlecolab" },

  // Tools
  { name: "Git", categories: ["tools"], slug: "git" },
  { name: "GitHub", categories: ["tools"], slug: "github", forceWhite: true },
  { name: "Docker", categories: ["tools"], slug: "docker" },
  { name: "Figma", categories: ["tools"], slug: "figma" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false);

  const handleTabClick = (tab: string) => {
    if (tab === activeTab) return;

    setLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false);
    }, 400); 
  };

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.categories.includes(activeTab));

  const getIconSrc = (skill: Skill) => {
    if (skill.icon) return skill.icon;

    if (skill.slug) {
      if (skill.forceWhite) {
        return `https://cdn.simpleicons.org/${skill.slug}/ffffff`;
      }
      return `https://cdn.simpleicons.org/${skill.slug}`;
    }

    return "";
  };

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col items-center gap-4 text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-slate-800 rounded-xl group-hover:bg-slate-700 transition-all">
                  <img
                    src={getIconSrc(skill)}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                </div>

                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}