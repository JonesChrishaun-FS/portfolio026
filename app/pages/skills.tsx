"use client";

import { motion } from "framer-motion";
import { Code2, Palette } from "lucide-react";
import { useState } from "react";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      category: "Development",
      icon: Code2,
      items: [
        { name: "Node.js", level: 95, years: "3 years" },
        { name: "React, Next.js, & Vite", level: 98, years: "3 years" },
        { name: "MongoDB", level: 90, years: "2.5 years" },
        { name: "REST", level: 90, years: "2.5 years" },
        { name: "Vercel & Github", level: 96, years: "3 years" },
        { name: "TypeScript", level: 85, years: "2 years" },
        { name: "HTML5, CSS3, & JavaScript", level: 98, years: "4 years" },
        { name: "PostgreSQL & MySQL", level: 80, years: "2 years" },
      ],
    },
    {
      category: "Design",
      icon: Palette,
      items: [
        { name: "Figma", level: 90, years: "2.5 years" },
        { name: "Canva", level: 95, years: "8+ years" },
        { name: "Adobe Creative Suite", level: 98, years: "10+ years" },
        { name: "Brand Identity", level: 95, years: "8+ years" },
        { name: "UI/UX Design", level: 96, years: "8+ years" },
        { name: "Typography", level: 92, years: "10+ years" },
      ],
    },
  ];
  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6">Capabilities</h2>
          <p className="text-xl text-zinc-600 max-w-2xl">
            A comprehensive skill set spanning modern web technologies and
            visual design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup, groupIndex) => {
            const IconComponent = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-zinc-200 hover:shadow-lg hover:border-zinc-300 transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-3xl">{skillGroup.category}</h3>
                </div>

                <div className="space-y-6">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: groupIndex * 0.1 + index * 0.05,
                      }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="cursor-pointer relative group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <motion.span
                            className="text-lg text-zinc-900"
                            animate={{
                              x: hoveredSkill === skill.name ? 4 : 0,
                              scale: hoveredSkill === skill.name ? 1.02 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill.name}
                          </motion.span>
                          <motion.span
                            className="text-xs px-2 py-1 bg-zinc-900 text-white rounded-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                              opacity: hoveredSkill === skill.name ? 1 : 0,
                              scale: hoveredSkill === skill.name ? 1 : 0.8,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill.years}
                          </motion.span>
                        </div>
                        <motion.span
                          className="text-sm font-medium"
                          animate={{
                            color:
                              hoveredSkill === skill.name
                                ? "#18181b"
                                : "#71717a",
                            scale: hoveredSkill === skill.name ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <motion.div
                        className="h-2 bg-zinc-100 rounded-full overflow-hidden relative"
                        animate={{
                          height: hoveredSkill === skill.name ? 10 : 8,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="h-full bg-zinc-900 rounded-full relative overflow-hidden"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: groupIndex * 0.1 + index * 0.05 + 0.2,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          animate={{
                            backgroundColor:
                              hoveredSkill === skill.name
                                ? "#000000"
                                : "#18181b",
                          }}
                        >
                          {hoveredSkill === skill.name && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              initial={{ x: "-100%" }}
                              animate={{ x: "200%" }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          )}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
