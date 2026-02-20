"use client";

import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 border-t border-slate-900 overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 right-1/4 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Let&apos;s build something impactful.
                        </h3>
                        <p className="text-slate-400 mt-4 max-w-2xl leading-relaxed">
                            Want to collaborate or discuss an opportunity? Reach out - I usually respond quickly.
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                            <a
                                href="mailto:geminiyasanayake@gmail.com"
                                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 px-5 py-4 transition-colors"
                            >
                                <span className="flex items-center gap-3 text-slate-200">
                                    <Mail size={18} className="text-indigo-300" />
                                    <span className="text-sm font-medium">geminiyasanayake@gmail.com</span>
                                </span>
                                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-slate-200 transition-colors" />
                            </a>

                            <a
                                href="tel:+94769738494"
                                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 px-5 py-4 transition-colors"
                            >
                                <span className="flex items-center gap-3 text-slate-200">
                                    <Phone size={18} className="text-indigo-300" />
                                    <span className="text-sm font-medium">+94 76 973 8494</span>
                                </span>
                                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-slate-200 transition-colors" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:justify-self-end">
                        <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                            Find me on
                        </p>
                        <div className="flex gap-3 mt-4">
                            <a
                                href="https://github.com/YasanayakeR"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 bg-slate-900/60 rounded-2xl hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rohansi-yasanayake/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 bg-slate-900/60 rounded-2xl hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
                    <p>© {new Date().getFullYear()} Rohansi Yasanayake. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

