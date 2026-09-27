import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";

const Infrastructure = () => {
  const equipment = [
    { icon: '🔧', name: 'Lathe Machines', description: 'Precision turning and shaping of metal components.' },
    { icon: '⚙️', name: 'Milling & Drill Machines', description: 'Complex cutting, drilling, and shaping operations.' },
    { icon: '💎', name: 'Surface & Tool Grinders', description: 'High-precision grinding for smooth finishes and accurate dimensions.' },
    { icon: '🔩', name: 'Power Presses (10T)', description: 'Two 10-ton presses for stamping and forming operations.' },
    { icon: '⚡', name: 'Welding Equipment', description: 'MIG, TIG, and spot welding for strong, reliable joints.' },
    { icon: '🪚', name: 'Power Saw', description: 'Efficient cutting of metal stock and components.' },
    { icon: '🧰', name: 'Hand Tools', description: 'Precision hand tools for assembly and finishing work.' },
    { icon: '🏋️', name: 'Lifting Equipment', description: 'Cranes, hoists, and lifts for safe material handling.' },
    { icon: '🔍', name: 'Measuring Instruments', description: 'Calipers, micrometers, gauges for precise quality control.' },
    { icon: '📋', name: 'Inspection Equipment', description: 'Tools for dimensional inspection and surface finish evaluation.' },
  ];

  return (
    <section id="infrastructure" className="pt-20 pb-24">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12"
        >
          Our Infrastructure
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {equipment.map((eq, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 text-center shadow-xs hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 dark:bg-slate-800/70 border border-blue-100/50 dark:border-slate-700/50 flex items-center justify-center text-xl mb-3">{eq.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{eq.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{eq.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Infrastructure;