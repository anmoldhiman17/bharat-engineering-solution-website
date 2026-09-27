import React, { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../assets/motion";
import { products } from "../data/productData";
import ProductDetailModal from "./ProductDetailModal";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
              className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="h-44 bg-slate-100/70 dark:bg-slate-800/60 flex flex-col items-center justify-center relative border-b border-slate-200/60 dark:border-slate-800/60 p-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.182.247l-.234.148A2 2 0 003.2 17.2V19a2 2 0 002 2h13.6a2 2 0 002-2v-1.8a2 2 0 00-.972-1.714l-.4-.258zM12 4v8" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {product.category || "Engineering Component"}
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug">{product.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
                </div>
                <div className="pt-2 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400">
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
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
};

export default Products;