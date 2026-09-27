import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";

const Quality = () => {
  const qualityPoints = [
    "Reliable, defect-free products",
    "Customer satisfaction",
    "Precision and consistency",
    "Continuous improvement",
    "Timely delivery",
    "Transparent communication",
    "Technical support",
    "Engineering consultation",
    "Compliance with industry/customer-specific standards",
    "Zero-defect production targets",
  ];

  return (
    <section id="quality" className="pt-20 pb-24 bg-slate-50/70 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/80 transition-colors">
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
          Quality That Drives Every Component
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2"
        >
          {qualityPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.05 * (index + 1))}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-4 sm:p-5 flex items-center gap-4 shadow-xs hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100/60 dark:border-blue-900/50 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-800 dark:text-slate-200 font-medium text-sm sm:text-base leading-snug">{point}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Quality;