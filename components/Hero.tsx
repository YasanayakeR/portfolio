"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
    const [cvOpen, setCvOpen] = useState(false);
    const cvRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onMouseDown(e: MouseEvent) {
            const target = e.target as Node | null;
            if (target && cvRef.current && !cvRef.current.contains(target)) {
                setCvOpen(false);
            }
        }

        document.addEventListener("mousedown", onMouseDown);
        return () => document.removeEventListener("mousedown", onMouseDown);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Rohansi Yasanayake</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        A passionate <span className="text-slate-200">Full Stack Developer</span> and <span className="text-slate-200">AI/ML enthusiast</span> crafting robust web applications and intelligent solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 active:bg-pink-500/10 active:text-pink-300 active:border-pink-500/20 font-medium transition-all w-full sm:w-auto backdrop-blur-sm"
                        >
                            View My Work
                        </a>
                        <div ref={cvRef} className="relative w-full sm:w-auto">
                            <button
                                type="button"
                                onClick={() => setCvOpen((v) => !v)}
                                aria-haspopup="menu"
                                aria-expanded={cvOpen}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 active:bg-pink-500/10 active:text-pink-300 active:border-pink-500/20 font-medium transition-all w-full sm:w-auto backdrop-blur-sm"
                            >
                                Download CV
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform ${cvOpen ? "rotate-180" : "rotate-0"}`}
                                />
                            </button>

                            {cvOpen && (
                                <div
                                    role="menu"
                                    aria-label="Download CV options"
                                    className="absolute left-0 right-0 sm:right-auto mt-3 p-2 rounded-2xl bg-slate-950/95 border border-indigo-500/20 shadow-2xl backdrop-blur-md"
                                >
                                    <a
                                        role="menuitem"
                                        href="/cv/RohansiYasanayakeCV.pdf"
                                        download
                                        className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-indigo-500/10 hover:text-white transition-colors"
                                        onClick={() => setCvOpen(false)}
                                    >
                                        Download CV (Full Stack)
                                    </a>
                                    <a
                                        role="menuitem"
                                        href="/cv/RohansiYasanayakeCV-AI_Intern.pdf"
                                        download
                                        className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-indigo-500/10 hover:text-white transition-colors"
                                        onClick={() => setCvOpen(false)}
                                    >
                                        Download CV (AI / ML)
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-slate-500" />
            </motion.div>
        </section>
    );
}
