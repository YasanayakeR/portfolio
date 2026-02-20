"use client";

import { motion } from "framer-motion";

export default function Education() {
    return (
        <section id="education" className="py-20 bg-slate-950 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative max-w-2xl mx-auto text-center"
                    >
                        <h3 className="text-xl font-bold text-white mb-1">BSc (Hons) in Information Technology</h3>
                        <p className="text-indigo-400 font-medium mb-2">University of Moratuwa</p>
                        <p className="text-slate-400 text-sm mb-2">2023 - Present</p>
                        <p className="text-slate-300 font-medium">CGPA: 3.56 / 4.00</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
