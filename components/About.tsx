"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";

const stats = [
    { label: "Skills", value: 20, suffix: "+" },
    { label: "Projects", value: projects.length, suffix: "+" },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <div className="w-20 h-1 bg-indigo-500 mb-8 rounded-full" />

                        <div className="space-y-6 text-slate-300 leading-relaxed mb-8">
                            <p>
                                Innovative and driven full stack developer passionate about building end to end web applications.
                                Skilled in both frontend and backend technologies, thriving in collaborative environments and
                                eager to contribute to impactful projects while learning from experienced professionals.
                            </p>
                            <p>
                                Seeking a full stack development internship to apply skills, expand expertise, and contribute to cutting edge
                                solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center md:text-left">
                                    <h4 className="text-3xl font-bold text-white mb-1">
                                        <Counter value={stat.value} />
                                        <span className="text-indigo-500">{stat.suffix}</span>
                                    </h4>
                                    <p className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full rotate-6 opacity-20 blur-lg" />
                            <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl">
                                <Image 
                                    src="/profile-pic.png" 
                                    alt="Rohansi Yasanayake" 
                                    fill
                                    className="object-contain scale-[1.5] translate-y-6"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Counter({ value }: { value: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16); // 60fps

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value]);

    return <span>{count}</span>;
}

