import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";

const WhyBES = () => {
  const reasons = [
    { icon: '🎯', label: 'Precision-focused manufacturing', description: 'Every component is manufactured with high accuracy and attention to detail.' },
    { icon: '✅', label: 'Quality-oriented processes', description: 'Rigorous quality control at every stage of production.' },
    { icon: '🤝', label: 'Customer-centric approach', description: 'We listen to your needs and provide customized solutions.' },
    { icon: '🔧', label: 'Customized engineering solutions', description: 'Tailored components to meet your specific requirements.' },
    { icon: '🚚', label: 'Reliable delivery', description: 'On-time delivery with consistent performance.' },
    { icon: '📞', label: 'Technical support', description: 'Expert assistance throughout the project lifecycle.' },
    { icon: '🔄', label: 'Continuous improvement', description: 'We constantly refine our processes for better results.' },
    { icon: '🏭', label: 'Professional manufacturing setup', description: 'Well-equipped facility with skilled workforce.' },
  ];

  return (
    <section id="why-bes" className="pt-20 pb-24">
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
          Why Choose Bharat Engineering Solution?
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-6 flex items-start gap-4 shadow-xs hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex-shrink-0 text-2xl p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800/70 border border-blue-100/50 dark:border-slate-700/50">{reason.icon}</div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">{reason.label}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyBES;