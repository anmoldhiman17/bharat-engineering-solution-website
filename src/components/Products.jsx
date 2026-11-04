import React, { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";
import { products } from "../data/productData";
import ProductDetailModal from "./ProductDetailModal";
import ProductCardSlider from "./ProductCardSlider";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [initialIndex, setInitialIndex] = useState(0);

  const handleOpenModal = (product, slideIndex = 0) => {
    setInitialIndex(slideIndex);
    setSelectedProduct(product);
  };

  return (
    <section id="products" className="pt-20 pb-24">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12"
        >
          Products & Solutions
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeIn('up', 0.05 * product.id)}
              initial="hidden"
              whileInView="show"
              className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500/60 dark:hover:border-blue-500/60 hover:shadow-blue-500/10 dark:hover:shadow-[0_0_28px_rgba(37,99,235,0.22)] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              onClick={() => handleOpenModal(product, 0)}
            >
              {/* Product Card Top Carousel Slider */}
              <ProductCardSlider
                images={product.images}
                productName={product.name}
                category={product.category}
                onCardClick={() => handleOpenModal(product, 0)}
              />

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  View Specifications &rarr;
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          className="flex justify-center mt-12"
        >
          <a href="#product-gallery" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium flex items-center gap-2 shadow-hover-lg">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          initialImageIndex={initialIndex}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default Products;