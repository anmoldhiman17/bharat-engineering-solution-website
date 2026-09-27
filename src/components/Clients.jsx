import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";

const Clients = () => {
  const clients = [
    "Rico Auto Industries Ltd.",
    "Maxop Engineering Pvt. Ltd. (Manesar, Jaipur & 7 units)",
    "M-Tech Equipment",
    "Us-Metal",
    "T-Balaji",
    "Khandelwal Industries",
    "Oliva Diecasting",
    "Jindal Fabritech",
    "Universal Metals",
    "Pavna Industries",
  ];

  return (
    <section id="clients" className="pt-20 pb-24">
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
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-3"
        >
          Trusted by Industry Partners
        </motion.h2>

        <p className="text-center text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-12">
          Leading automotive and industrial manufacturing organizations that rely on our precision engineering and quality.
        </p>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 text-center shadow-xs hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center min-h-[100px]"
            >
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 leading-snug">{client}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Clients;