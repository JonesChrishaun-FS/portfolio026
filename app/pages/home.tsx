"use client";
import { motion } from "framer-motion";
import { Link } from "@heroui/react";

export const HomePage = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-zinc-400 tracking-wider mb-6 uppercase text-sm">
            Portfolio 2026
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tight">
            Chrishaun Jones
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-2xl md:text-3xl text-zinc-300 mb-12 leading-relaxed">
            Graphic Designer & Web Developer
          </p>
          <div className="flex gap-4">
            <Link
              href="#work"
              className="px-8 py-5 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors inline-flex items-center gap-2 group no-underline"
            >
              View Work <Link.Icon />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-5 border border-zinc-600 text-white hover:bg-white/10 transition-colors no-underline"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      ></motion.div>
    </section>
  );
};
