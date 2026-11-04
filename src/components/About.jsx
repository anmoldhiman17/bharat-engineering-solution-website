import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";
import latheEnhanced from "../assets/lathe-machine-enhanced.jpg";

const About = () => {
  return (
    <section id="about" className="pt-20 pb-24 relative overflow-hidden">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12"
      >
        {/* Left Column - Premium Industrial Lathe Visual */}
        <motion.div
          variants={fadeIn('left', 0.15)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 relative"
        >
          {/* Subtle Background Glow Accent */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-indigo-600/20 rounded-3xl blur-2xl opacity-75 -z-10 pointer-events-none"></div>

          {/* Outer Structural Container Frame */}
          <div className="relative w-full p-2.5 sm:p-3 rounded-3xl border border-blue-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-2xl shadow-blue-900/10 dark:shadow-blue-950/40">
            
            {/* Visual Viewport */}
            <div className="relative w-full h-[440px] sm:h-[500px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 group">
              
              {/* Lathe Machine Image */}
              <motion.img
                src={latheEnhanced}
                alt="Lathe Machine at Roorkee Facility"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full object-cover object-[center_32%] transform transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlays for High-End Cinematic Contrast */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none z-10"></div>

              {/* Top Floating Status Badge */}
              <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/15 text-white shadow-lg text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span className="tracking-wide">
                    <span className="hidden sm:inline">Heavy-Duty Lathe Unit</span>
                    <span className="sm:hidden">Lathe Unit</span>
                  </span>
                </div>
              </div>

              {/* Floating Bottom HUD Card */}
              <div className="absolute bottom-3.5 inset-x-3.5 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 shadow-2xl z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-semibold text-white text-sm sm:text-base truncate">
                        Modern Manufacturing Plant
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 font-medium shrink-0">
                        Roorkee, Uttarakhand
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 truncate">
                      Heavy-Duty Turning, Boring & High-Precision Machining Facility
                    </p>
                  </div>
                </div>

                {/* Industrial Spec Badges */}
                <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-white/10 text-center">
                  <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-medium">Tolerance</span>
                    <span className="text-xs font-bold text-white tracking-wide">±0.01 mm</span>
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-medium">Operations</span>
                    <span className="text-xs font-bold text-white tracking-wide">Turning & Facing</span>
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-medium">Capacity</span>
                    <span className="text-xs font-bold text-white tracking-wide">Heavy Machining</span>
                  </div>
                </div>
              </div>

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