"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";


export const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-12">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-12">About</h2>
          <div className="space-y-6 text-xl text-zinc-700 leading-relaxed">
            <p>
              I'm a multidisciplinary designer and developer based in Portland,
              bridging the gap between visual design and technical
              implementation.
            </p>
            <p>
              With 8 years of experience, I've collaborated with startups and
              established brands to create digital products that prioritize both
              form and function. My background in graphic design informs my
              approach to web development, resulting in interfaces that are not
              only functional but visually compelling.
            </p>
            <p>
              When I'm not coding or designing, you'll find me exploring
              typography, experimenting with generative art, or teaching design
              fundamentals at the local community college.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="/JonesChrishaunResume26.pdf"
              download="JonesChrishaun-Resume26.pdf"
              className="px-8 py-4 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
