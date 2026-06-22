'use client';

import { motion } from 'framer-motion';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function WomenPage() {
  const womenProducts = products.filter(p => p.category === 'women');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header Section */}
      <div className="bg-slate-50 dark:bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Women's Shoes
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Discover our collection of premium women's footwear
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Showing {womenProducts.length} products
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {womenProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
