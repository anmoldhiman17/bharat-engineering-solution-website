import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../assets/motion";

const TrustStrip = () => {
  const highlights = [
    { icon: '⚙️', label: 'Precision Engineering' },
    { icon: '🛡️', label: 'Quality Focus' },
    { icon: '🔧', label: 'Customized Solutions' },
    { icon: '🚚', label: 'Reliable Delivery' },
  ];

  return (
    <section className="py-8 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/60">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-6 sm:gap-10"
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.1 * (index + 1))}
            initial="hidden"
            whileInView="show"
            className="flex items-center gap-3 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-slate-800 border border-blue-100/50 dark:border-slate-700/50 flex items-center justify-center text-lg shrink-0">{highlight.icon}</div>
            <div className="text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm">{highlight.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TrustStrip;