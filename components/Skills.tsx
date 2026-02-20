"use client";

import { motion } from "framer-motion";

const skills = {
    "Programming": ["Java", "JavaScript", "TypeScript", "C#", "Python", "C"],
    "Frameworks": ["Angular", "ASP.NET Core", "Spring Boot", "React", "FastAPI", "Next.js"],
    "Databases": ["MySQL", "Microsoft SQL Server", "MongoDB", "PostgreSQL"],
    "Tools & Platforms": ["Git", "GitHub", "Figma", "Google Colab"],
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-indigo-300">{category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-indigo-600 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
