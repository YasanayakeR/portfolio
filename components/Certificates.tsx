"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, X } from "lucide-react";
import Image from "next/image";

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    type: "certificate" | "badge";
    image: string;
    link?: string;
}

const certificates: Certificate[] = [
    {
        id: "1",
        title: "BITCODE V5.0 Preselection Round - 2024",
        issuer: "BITSA, Rajarata University of Sri Lanka",
        date: "Nov 23, 2024",
        type: "certificate",
        image: "/certificates/bitcode.png",
    },
    {
        id: "2",
        title: "MoraXtreme 9.0 Participation",
        issuer: "IEEE Student Branch, University of Moratuwa",
        date: "Oct 19, 2024",
        type: "certificate",
        image: "/certificates/moraxtreme.png",
    },
    {
        id: "3",
        title: "CodeRush 2023 Participation",
        issuer: "INTECS, University of Moratuwa",
        date: "Nov 2023",
        type: "certificate",
        image: "/certificates/coderush.png",
    },
    {
        id: "4",
        title: "Web Design for Beginners",
        issuer: "CODL, University of Moratuwa",
        date: "2023",
        type: "certificate",
        image: "/certificates/web-design.png",
    },
    {
        id: "5",
        title: "Python for Beginners",
        issuer: "CODL, University of Moratuwa",
        date: "Aug 16, 2022",
        type: "certificate",
        image: "/certificates/python.png",
    },
];

const badges: Certificate[] = [
    {
        id: "6",
        title: "MongoDB Skill: CRUD Operations",
        issuer: "MongoDB",
        date: "2024",
        type: "badge",
        image: "/certificates/mongodb-badge.png",
    },
    {
        id: "7",
        title: "Hacktoberfest 2024 Contributor - Level 1",
        issuer: "DigitalOcean / Hacktoberfest",
        date: "Oct 2024",
        type: "badge",
        image: "/certificates/hacktoberfest-l1.png",
    },
    {
        id: "8",
        title: "Hacktoberfest 2024 Contributor - Level 2",
        issuer: "DigitalOcean / Hacktoberfest",
        date: "Oct 2024",
        type: "badge",
        image: "/certificates/hacktoberfest-l2.png",
    },
];

export default function Certificates() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="certificates" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Badges</h2>
                    <div className="w-20 h-1 bg-indigo-500 rounded-full" />
                    <p className="text-slate-400 mt-6 max-w-none md:whitespace-nowrap">Professional recognition and achievements I&apos;ve earned. Click on any card to view the full image.</p>
                </motion.div>

                {/* Certificates Part */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <Award className="text-indigo-500" size={28} />
                        Certificates
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <CertificateCard
                                key={cert.id}
                                cert={cert}
                                index={index}
                                onClick={() => setSelectedImage(cert.image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Badges Part */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <ShieldCheck className="text-indigo-500" size={28} />
                        Digital Badges
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {badges.map((badge, index) => (
                            <CertificateCard
                                key={badge.id}
                                cert={badge}
                                index={index}
                                onClick={() => setSelectedImage(badge.image)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
                    >
                        <motion.button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </motion.button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full aspect-[4/3] md:aspect-auto h-auto max-h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Certificate Preview"
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function CertificateCard({ cert, index, onClick }: { cert: Certificate; index: number; onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            onClick={onClick}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all group flex flex-col cursor-pointer"
        >
            <div className="w-12 h-12 bg-slate-800 flex items-center justify-center rounded-xl mb-6 group-hover:bg-indigo-500/10 transition-colors">
                {cert.type === "certificate" ? (
                    <Award className="text-indigo-400" size={24} />
                ) : (
                    <ShieldCheck className="text-indigo-400" size={24} />
                )}
            </div>

            <h3 className="text-lg font-bold text-slate-100 mb-2 leading-tight group-hover:text-white transition-colors">
                {cert.title}
            </h3>
            <p className="text-indigo-400 text-sm font-medium mb-1">{cert.issuer}</p>
            <p className="text-slate-500 text-xs mb-6 font-medium">{cert.date}</p>

            <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-sm text-slate-400 group-hover:text-indigo-400 transition-colors">
                    Click to Preview
                    <ExternalLink size={14} />
                </span>
            </div>
        </motion.div>
    );
}
