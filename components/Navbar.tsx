"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string | null>(null);

    useEffect(() => {
        const sections = navLinks.map((l) => l.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
        );
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-indigo-500/10">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="flex items-center justify-end h-20">


                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative text-base font-medium transition-colors pb-1 ${activeLink === link.href
                                    ? "text-indigo-400"
                                    : "text-slate-300 hover:text-indigo-400"
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveLink(link.href);
                                    document.querySelector(link.href)?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                {link.name}
                                {activeLink === link.href && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
                                )}
                            </Link>
                        ))}

                        <div className="h-6 w-px bg-slate-800" />

                        <div className="flex items-center space-x-4">
                            <a href="https://github.com/YasanayakeR" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/rohansi-yasanayake/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>


                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950/95 border-b border-indigo-500/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`block text-xl font-medium py-2 border-b border-transparent ${activeLink === link.href
                                        ? "text-indigo-400 border-indigo-500"
                                        : "text-slate-300 hover:text-indigo-400"
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveLink(link.href);
                                        setIsOpen(false);
                                        document.querySelector(link.href)?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-6 flex space-x-6 border-t border-slate-800">
                                <a href="https://github.com/YasanayakeR" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/rohansi-yasanayake/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:hello@example.com" className="text-slate-400 hover:text-white">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
