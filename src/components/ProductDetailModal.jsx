import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const ProductDetailModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Handle click outside modal to close
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openImage = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4 sm:p-6"
      onClick={handleOutsideClick}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="relative z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-[1000px] w-full max-h-[85vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row max-h-[85vh]">
          {/* Left Side: Category Icon / Visual placeholder */}
          <div className="md:w-5/12 bg-slate-100 dark:bg-slate-800/80 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 text-center min-h-[220px]">
            <div className="w-20 h-20 rounded-2xl bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.182.247l-.234.148A2 2 0 003.2 17.2V19a2 2 0 002 2h13.6a2 2 0 002-2v-1.8a2 2 0 00-.972-1.714l-.4-.258zM12 4v8" />
              </svg>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              {product.category || "Engineering Solution"}
            </span>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{product.name}</h4>
          </div>

          {/* Right Side: Details */}
          <div className="md:w-7/12 p-6 sm:p-8 overflow-y-auto max-h-[85vh] space-y-6 text-slate-700 dark:text-slate-300">
            <div>
              <span className="inline-block bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                {product.name}
              </h2>
            </div>

            {product.description && (
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{product.description}</p>
            )}

            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">Key Features</h3>
                <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.specifications && product.specifications.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">Technical Specifications</h3>
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs sm:text-sm">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-1 border-b border-slate-200/50 dark:border-slate-700/50 last:border-0">
                      <span className="font-medium text-slate-600 dark:text-slate-400">{spec.label}</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                Get a Quote
              </a>
              <a
                href="https://wa.me/919536907010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailModal;