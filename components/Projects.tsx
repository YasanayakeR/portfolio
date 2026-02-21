"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Projects() {
    const orderedProjects = [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

    return (
        <section id="projects" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
                    <div className="w-20 h-1 bg-indigo-500 rounded-full" />
                    <p className="text-slate-400 mt-6 max-w-2xl">
                        A selection of projects I&apos;ve built across full-stack engineering and applied AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {orderedProjects.map((project, index) => (
                        <motion.article
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                            className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-colors"
                        >
                            {/* Cover */}
                            <div
                                className="relative h-48 md:h-52 p-6 flex items-end overflow-hidden"
                                style={{
                                    backgroundImage: project.cover.image
                                        ? undefined
                                        : `linear-gradient(135deg, ${project.cover.gradient[0]}, ${project.cover.gradient[1]})`,
                                }}
                            >
                                {project.cover.image ? (
                                    <>
                                        <Image
                                            src={project.cover.image}
                                            alt=""
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div
                                            className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-black/40"
                                            aria-hidden
                                        />
                                    </>
                                ) : (
                                    <div
                                        className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-40"
                                        style={{ backgroundColor: project.cover.accent }}
                                    />
                                )}
                                <div className="absolute inset-0 z-10 flex flex-col justify-between p-4">
                                    <div>
                                        {project.featured && (
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/40 text-white border border-white/20 backdrop-blur">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-2 text-white backdrop-blur hover:bg-black/80 transition-colors"
                                                aria-label={`Open GitHub: ${project.title}`}
                                            >
                                                <Github size={16} />
                                                <span className="text-xs font-medium">GitHub</span>
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-2 text-white backdrop-blur hover:bg-black/80 transition-colors"
                                                aria-label={`Open live demo: ${project.title}`}
                                            >
                                                <ExternalLink size={16} />
                                                <span className="text-xs font-medium">Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

         
                            <div className="p-7 h-full flex flex-col">
                                <div className="mb-4">
                                    <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2 block">
                                        {project.role} · {project.date}
                                    </span>
                                    <h3 className="text-xl font-bold group-hover:text-indigo-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 mt-3 leading-relaxed">{project.summary}</p>
                                </div>

                                <div className="mt-6 pt-5 border-t border-slate-800">
                                    <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-3">
                                        Tech stack
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-200 border border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
