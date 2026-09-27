import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";

const Capabilities = () => {
  const capabilities = [
    { icon: '⚙️', label: 'Precision Engineering', description: 'High-accuracy machining and manufacturing to exact specifications.' },
    { icon: '🔧', label: 'Die-Casting Components', description: 'Complex die-cast parts for automotive and industrial applications.' },
    { icon: '⚡', label: 'Fabrication Work', description: 'Custom metal fabrication and assembly services.' },
    { icon: '🎯', label: 'Customized Components', description: 'Tailored solutions to meet specific customer requirements.' },
    { icon: '📞', label: 'Technical Engineering Support', description: 'Expert consultation and engineering assistance throughout the project.' },
    { icon: '✅', label: 'Quality-Focused Manufacturing', description: 'Rigorous quality control ensuring defect-free products.' },
  ];

  return (
    <section id="capabilities" className="pt-20 pb-24">
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
          Engineering Capabilities
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 text-center shadow-xs hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 dark:bg-slate-800/70 border border-blue-100/60 dark:border-slate-700/60 flex items-center justify-center text-2xl mb-4">{cap.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{cap.label}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Capabilities;