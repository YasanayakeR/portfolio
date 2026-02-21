"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/3 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Let’s build something impactful.
        </h3>
        <p className="text-slate-400 max-w-2xl leading-relaxed mb-10">
          Passionate about creating meaningful digital experiences.
          Let’s connect and make great ideas come to life.
        </p>


        <div className="flex gap-5 mt-4">
          <a
            href="https://github.com/YasanayakeR"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-2xl bg-slate-900/60 hover:bg-indigo-600/20 border border-slate-800 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/rohansi-yasanayake/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-2xl bg-slate-900/60 hover:bg-indigo-600/20 border border-slate-800 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>

        <div className="w-full border-t border-slate-800 mt-12 pt-6 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">Rohansi Yasanayake</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}