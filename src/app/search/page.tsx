'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/Button';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.brand.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Search Results
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            {query ? (
              <>
                Showing results for <span className="font-semibold">"{query}"</span>
              </>
            ) : (
              'Enter a search term to find products'
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {searchResults.length > 0 ? (
          <>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Found {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {searchResults.map((product, index) => (
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
          </>
        ) : query ? (
          <div className="text-center py-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-6xl mb-6"
            >
              🔍
            </motion.div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              No results found
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
              We couldn't find any products matching "{query}". Try different keywords or browse our categories.
            </p>
            <Button onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔎</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Start searching
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Use the search bar above to find products
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
