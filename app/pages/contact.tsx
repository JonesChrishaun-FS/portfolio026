"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-12 bg-zinc-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-6">Let's Work Together</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
            Open to new projects and collaborations. Reach out to discuss.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a
              href="mailto:chrishaunjones97@gmail.com"
              className="px-8 py-4 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors inline-flex items-center gap-2 group"
            >
              <Mail className="w-5 h-5" />
              chrishaunjones97@gmail.com
            </a>
          </div>

          <div className="flex gap-8 pt-12 border-t border-zinc-800">
            <a
              href="https://github.com/JonesChrishaun-FS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <FaGithub />
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="www.linkedin.com/in/chrishaunjo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~016367694c88540ab9?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400  hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span>Upwork</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400  hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span>Behance</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
