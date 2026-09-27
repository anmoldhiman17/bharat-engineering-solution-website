import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";
import mainHeroVisual from "../assets/hero-main-industrial.png";
import productCardVisual from "../assets/hero-product-assembly.png";
import rollerVisual from "../assets/d2-roller.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative bg-white dark:bg-slate-950 pt-24 md:pt-28 pb-12 overflow-hidden transition-colors duration-200">
      {/* Background Soft Blue Accents */}
      <div className="absolute top-8 right-0 w-[55%] h-[85%] bg-gradient-to-bl from-blue-50/80 dark:from-blue-950/20 via-blue-50/20 dark:via-transparent to-transparent -z-10 rounded-bl-[140px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Headline & Action */}
          <motion.div 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            className="w-full lg:w-1/2 space-y-7"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/50 text-blue-700 dark:text-blue-300 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Precision Engineering</span>
            </div>

            {/* Headline */}
            <motion.h1 
              variants={textVariant(0.3)}
              initial="hidden"
              whileInView="show"
              className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight"
            >
              Precision Engineering.<br />
              Built for <span className="text-blue-600 dark:text-blue-400">Performance.</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
            >
              Bharat Engineering Solution delivers precision-engineered components, die-casting solutions and fabrication work with a strong focus on quality, reliability and customer satisfaction.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Get a Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a 
                href="#products" 
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-xs hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Explore Our Solutions
                <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a 
                href="https://wa.me/919536907010" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-3.5 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm sm:text-base"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800 shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Industrial Composition */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView="show"
            className="w-full lg:w-1/2 relative flex items-center justify-center pt-6 lg:pt-0"
          >
            {/* Outer Structural Border Container */}
            <div className="relative w-full max-w-[560px] p-4 sm:p-6 rounded-[36px] border border-blue-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xs shadow-xl">
              
              {/* Dotted Accent - Top Right */}
              <div className="absolute -top-4 right-10 grid grid-cols-5 gap-2 -z-10 opacity-40">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                ))}
              </div>

              {/* Dotted Accent - Bottom Right */}
              <div className="absolute -bottom-6 right-6 grid grid-cols-6 gap-2 -z-10 opacity-40">
                {[...Array(18)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500"></div>
                ))}
              </div>

              {/* Main Center Heavy Industrial CNC Machining Visual */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 dark:border-slate-800 bg-slate-900 group">
                <img 
                  src={mainHeroVisual} 
                  alt="Precision Machining Manufacturing" 
                  className="w-full h-[320px] sm:h-[400px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Precision Machined</p>
                  <p className="text-sm font-semibold text-white">Die Casting & Engineered Components</p>
                </div>
              </div>

              {/* Floating Badge (Top Right) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-2 right-2 sm:-top-4 sm:right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">Precision</h4>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Manufacturing</p>
                </div>
              </motion.div>

              {/* Floating Product Card 1: Precision Metal Parts (Middle Right) */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-28 -right-3 sm:-right-8 bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 w-40 sm:w-48 z-20"
              >
                <div className="w-full h-20 sm:h-24 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src={rollerVisual} alt="D2 Roller Component" className="w-full h-full object-cover" />
                </div>
                <div className="pt-1.5 text-center">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">D2 Roller & Tooling</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Precision Machined Steel</p>
                </div>
              </motion.div>

              {/* Floating Product Card 2: Turned Parts Assembly (Bottom Right) */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-2 sm:-right-6 bg-white dark:bg-slate-900 p-2.5 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 w-44 sm:w-52 z-20"
              >
                <div className="w-full h-24 sm:h-28 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src={productCardVisual} alt="BES Precision Turned Components" className="w-full h-full object-cover" />
                </div>
                <div className="pt-2 text-center">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Cooling Assembly</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Precision Turned Components</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Feature Strip - 4 Column Layout */}
      <div className="border-t border-slate-200/60 dark:border-slate-800 mt-16 bg-slate-50/70 dark:bg-slate-900/70 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 divide-x-0 lg:divide-x divide-slate-200/60 dark:divide-slate-800">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-4 px-2 sm:px-4 py-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-100/70 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Precision Manufacturing</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">High accuracy components</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 px-2 sm:px-4 py-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-100/70 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Quality Focused</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Zero tolerance defect policy</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 px-2 sm:px-4 py-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-100/70 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Industrial Solutions</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Custom fabrication & tooling</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4 px-2 sm:px-4 py-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-100/70 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Customer Satisfaction</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Trusted by top manufacturers</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;