import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.96
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 30 },
      opacity: { duration: 0.28 },
      scale: { duration: 0.28 }
    }
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 }
    }
  })
};

const ProductDetailModal = ({ product, initialImageIndex = 0, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const [direction, setDirection] = useState(1);
  const dragStartX = useRef(0);

  const images = Array.isArray(product?.images) && product.images.length > 0 ? product.images : [];

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

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    if (images.length <= 1) return;
    setDirection(1);
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    if (images.length <= 1) return;
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const selectImage = (index, e) => {
    if (e) e.stopPropagation();
    if (index === currentImageIndex) return;
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-6"
      onClick={handleOutsideClick}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative z-50 bg-white dark:bg-[#0D1117] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-[1040px] w-full max-h-[90vh] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-950/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 p-2.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white backdrop-blur-md transition-all duration-200 shadow-sm hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row max-h-[90vh]">
          {/* Left Side: Modern High-Resolution Carousel Showcase */}
          <div className="md:w-5/12 bg-slate-50 dark:bg-slate-950/80 p-4 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
            <div>
              {/* Main Image Slider Viewport */}
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl bg-white dark:bg-white border border-slate-200 dark:border-slate-800 overflow-hidden shadow-inner group">
                {images.length > 0 ? (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.25}
                        onDragEnd={(e, info) => {
                          const diff = info.offset.x;
                          if (diff < -40) nextImage(e);
                          else if (diff > 40) prevImage(e);
                        }}
                        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                      >
                        <img
                          src={images[currentImageIndex]}
                          alt={`${product.name} detail view ${currentImageIndex + 1}`}
                          className="w-full h-full object-contain filter drop-shadow-xs select-none pointer-events-none"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          aria-label="Previous image"
                          onClick={prevImage}
                          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/90 hover:bg-blue-600 text-white backdrop-blur-md border border-slate-700/60 flex items-center justify-center shadow-lg transition-all duration-200 z-20 hover:scale-110"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          aria-label="Next image"
                          onClick={nextImage}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/90 hover:bg-blue-600 text-white backdrop-blur-md border border-slate-700/60 flex items-center justify-center shadow-lg transition-all duration-200 z-20 hover:scale-110"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}

                    {/* Top Counter Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-[11px] font-mono font-medium text-slate-200 shadow-md">
                        {currentImageIndex + 1} / {images.length}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mb-3">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{product.category}</span>
                  </div>
                )}
              </div>

              {/* Sleek Thumbnail Strip */}
              {images.length > 1 && (
                <div className="mt-3 flex items-center justify-center gap-2 overflow-x-auto py-1 px-1">
                  {images.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`View image ${idx + 1}`}
                      onClick={(e) => selectImage(idx, e)}
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white dark:bg-white border transition-all duration-200 shrink-0 p-0.5 flex items-center justify-center ${
                        idx === currentImageIndex
                          ? 'border-blue-500 ring-2 ring-blue-500/50 shadow-md shadow-blue-500/30 scale-105'
                          : 'border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-400 dark:hover:border-slate-500'
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain pointer-events-none"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product summary under thumbnails */}
            <div className="pt-3 text-center sm:text-left">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {product.category || "Engineering Solution"}
              </span>
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 truncate">
                {product.name}
              </h4>
            </div>
          </div>

          {/* Right Side: Details & Specs */}
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
                <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs sm:text-sm">
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
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
              >
                Get a Quote
              </a>
              <a
                href="https://wa.me/919536907010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
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