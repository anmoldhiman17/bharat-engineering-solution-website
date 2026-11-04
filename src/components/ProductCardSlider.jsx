import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32 },
      opacity: { duration: 0.28 },
      scale: { duration: 0.28 }
    }
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32 },
      opacity: { duration: 0.22 },
      scale: { duration: 0.22 }
    }
  })
};

const ProductCardSlider = ({
  images = [],
  productName = "Product",
  category = "",
  autoPlayInterval = 3600,
  onCardClick,
  onActiveIndexChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const dragStartX = useRef(0);

  // Normalize image list: filter out empty or invalid placeholders if needed
  const validImages = Array.isArray(images) && images.length > 0 ? images : [];

  // Auto-play sliding (pauses when user hovers or interacts)
  useEffect(() => {
    if (validImages.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => {
        const next = (prev + 1) % validImages.length;
        if (onActiveIndexChange) onActiveIndexChange(next);
        return next;
      });
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [validImages.length, isHovered, autoPlayInterval, onActiveIndexChange]);

  const paginate = (newDirection, e) => {
    if (e) e.stopPropagation();
    if (validImages.length <= 1) return;

    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = validImages.length - 1;
      if (nextIndex >= validImages.length) nextIndex = 0;
      if (onActiveIndexChange) onActiveIndexChange(nextIndex);
      return nextIndex;
    });
  };

  const jumpToSlide = (index, e) => {
    if (e) e.stopPropagation();
    if (index === currentIndex || validImages.length <= 1) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    if (onActiveIndexChange) onActiveIndexChange(index);
  };

  // If no images provided, render a clean fallback
  if (validImages.length === 0) {
    return (
      <div className="h-52 bg-slate-900/90 flex flex-col items-center justify-center p-4 text-center border-b border-slate-800">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="text-xs text-slate-400 font-medium">{category || "Precision Component"}</span>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-72 sm:h-80 bg-white dark:bg-white overflow-hidden select-none border-b border-slate-200 dark:border-slate-800 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onCardClick}
    >
      {/* Main Slide Viewport with drag swipe support */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragStart={(e, info) => {
              dragStartX.current = info.point.x;
            }}
            onDragEnd={(e, info) => {
              const diff = info.offset.x;
              if (diff < -40) {
                paginate(1, e);
              } else if (diff > 40) {
                paginate(-1, e);
              }
            }}
            className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <img
              src={validImages[currentIndex]}
              alt={`${productName} slide ${currentIndex + 1}`}
              className="w-full h-full object-contain filter drop-shadow-xs transform transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Overlay Badges: Category & Slide Counter */}
      <div className="absolute top-2.5 inset-x-3 flex items-center justify-between pointer-events-none z-10">
        {category ? (
          <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-[10px] font-semibold tracking-wide text-blue-400 shadow-md">
            {category}
          </span>
        ) : <span />}

        {validImages.length > 1 && (
          <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono font-medium text-slate-200 shadow-md">
            {currentIndex + 1}/{validImages.length}
          </span>
        )}
      </div>

      {/* Left / Right Navigation Arrow Buttons (Visible on hover & mobile) */}
      {validImages.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={(e) => paginate(-1, e)}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/90 hover:bg-blue-600 text-white backdrop-blur-md border border-slate-700/60 flex items-center justify-center shadow-lg transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 z-10 hover:scale-110"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={(e) => paginate(1, e)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/90 hover:bg-blue-600 text-white backdrop-blur-md border border-slate-700/60 flex items-center justify-center shadow-lg transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 z-10 hover:scale-110"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators at Bottom in Glass Pill */}
      {validImages.length > 1 && (
        <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center z-10 pointer-events-auto">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/75 backdrop-blur-md border border-slate-700/50 shadow-md">
            {validImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={(e) => jumpToSlide(idx, e)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-4 h-1.5 bg-blue-400 shadow-xs'
                    : 'w-1.5 h-1.5 bg-slate-400/80 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCardSlider;

