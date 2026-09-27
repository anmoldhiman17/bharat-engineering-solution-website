import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";

const About = () => {
  return (
    <section id="about" className="pt-20 pb-24">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start"
      >
        {/* Left Column - Image */}
        <motion.div
          variants={fadeIn('left', 0.15)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 mb-12 md:mb-0 md:mr-12"
        >
          <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-slate-100 dark:from-slate-900 dark:to-slate-950 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200 text-lg mb-1">Modern Manufacturing Plant</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Roorkee, Uttarakhand</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          variants={fadeIn('right', 0.15)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 space-y-6"
        >
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            About Bharat Engineering Solution
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.25)}
            initial="hidden"
            whileInView="show"
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Bharat Engineering Solution (BES) is a professionally managed manufacturing company based in Roorkee, Uttarakhand.
            The company focuses on precision engineering, quality assurance, high-performance die-casting components and fabrication work.
          </motion.p>

          <motion.p
            variants={fadeIn('up', 0.25)}
            initial="hidden"
            whileInView="show"
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            BES focuses on building long-term customer relationships by delivering reliable, high-quality products and customized solutions.
          </motion.p>

          {/* Our Approach / Built Around Quality */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-blue-50/70 dark:bg-slate-900/90 border border-blue-100/70 dark:border-slate-800/80 rounded-2xl p-6 shadow-xs"
          >
            <motion.h3
              variants={textVariant(0.35)}
              initial="hidden"
              whileInView="show"
              className="text-xl font-semibold text-slate-900 dark:text-white mb-3"
            >
              Built Around Quality
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.35)}
              initial="hidden"
              whileInView="show"
              className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
            >
              Every component we manufacture undergoes rigorous quality checks to ensure precision, durability, and performance.
              Our commitment to excellence is reflected in our meticulous attention to detail and adherence to industry standards.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;