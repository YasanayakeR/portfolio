"use client";

import { motion } from "framer-motion";
import { Mail, Send, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
           
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8" />
                    
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I&apos;m currently open to new opportunities. If you&apos;d like to discuss a role, collaboration, or have a question, feel free to reach out - I&apos;ll respond as soon as possible.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            href="mailto:geminiyasanayake@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 font-medium transition-all backdrop-blur-sm w-full sm:w-auto justify-center"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Send Email</span>
                            <Send className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        </motion.a>
                        <motion.a
                            href="tel:+94769738494"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 font-medium transition-all backdrop-blur-sm w-full sm:w-auto justify-center"
                        >
                            <Phone className="w-5 h-5" />
                            <span>+94 76 973 8494</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
