import React, { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../assets/motion";

const ProductGallery = () => {
  // We'll use placeholder images for now. Replace with actual product images from the company profile.
  const images = [
    { src: "https://via.placeholder.com/400x300", alt: "Spot Water Cooling Nipple Assembly" },
    { src: "https://via.placeholder.com/400x350", alt: "Jet Cooling Assembly" },
    { src: "https://via.placeholder.com/380x300", alt: "Spray Head Pipe" },
    { src: "https://via.placeholder.com/420x300", alt: "Spray Cacit" },
    { src: "https://via.placeholder.com/400x320", alt: "Plunger Rod Cooling Assembly" },
    { src: "https://via.placeholder.com/380x350", alt: "Ejector Pins" },
    { src: "https://via.placeholder.com/400x300", alt: "Hole Forming Pins" },
    { src: "https://via.placeholder.com/420x350", alt: "Sprue Bush" },
    { src: "https://via.placeholder.com/380x300", alt: "Plunger Rod" },
    { src: "https://via.placeholder.com/400x320", alt: "Plunger Rod Adapter" },
    { src: "https://via.placeholder.com/380x300", alt: "Shot Sleeve" },
    { src: "https://via.placeholder.com/420x350", alt: "HPDC Parts" },
    { src: "https://via.placeholder.com/400x300", alt: "LPDC Parts" },
    { src: "https://via.placeholder.com/380x350", alt: "GDC Parts" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="product-gallery" className="pt-20 pb-24">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12"
        >
          Product Gallery
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.08 * (index + 1))}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-xs hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              onClick={() => openImage(img)}
            >
              <div className="h-36 bg-slate-100/70 dark:bg-slate-800/60 rounded-xl flex flex-col items-center justify-center p-3 text-center mb-3 border border-slate-200/50 dark:border-slate-700/50">
                <svg className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-1 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{img.alt}</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-center leading-snug">{img.alt}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
          onClick={closeImage}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="relative z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{selectedImage.alt}</h3>
              <button onClick={closeImage} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="py-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 flex flex-col items-center justify-center">
              <svg className="w-16 h-16 text-blue-500 mb-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-base font-semibold text-slate-800 dark:text-slate-200">{selectedImage.alt}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">High-Precision Component Spec Sheet</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProductGallery;