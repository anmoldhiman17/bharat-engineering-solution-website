import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";

const CTASection = () => {
  return (
    <section id="cta" className="pt-20 pb-20 bg-blue-50/70 dark:bg-slate-900/90 border-y border-blue-100/60 dark:border-slate-800/80 transition-colors">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
        >
          Have an Engineering Requirement?
        </motion.h2>

        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8"
        >
          Let's discuss your component, manufacturing or fabrication requirement.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Get a Quote */}
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl transition-all font-semibold text-sm flex items-center gap-2 shadow-md shadow-blue-500/20 hover:shadow-lg">
            Get a Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* WhatsApp Us */}
          <a href="https://wa.me/919536907010" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all font-semibold text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-3z" />
            </svg>
            WhatsApp Us
          </a>

          {/* Call Us */}
          <a href="tel:+919536907010" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-semibold text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.113a11.042 11.042 0 005.516 5.516l1.113-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1" />
            </svg>
            Call Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;