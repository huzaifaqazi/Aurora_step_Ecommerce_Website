'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { SortOption, FilterOptions } from '@/types';
import { Button } from '@/components/ui/Button';

export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('latest');
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    priceRange: [0, 50000],
    sizes: [],
  });

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'latest', label: 'Latest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'trending', label: 'Trending' },
  ];

  const categories = ['men', 'women', 'kids'];
  const sizes = [4, 5, 6, 7, 8, 9, 10, 11, 12];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Apply category filter
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Apply price filter
    result = result.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Apply size filter
    if (filters.sizes.length > 0) {
      result = result.filter(p =>
        p.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'trending':
        result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  const toggleCategory = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  };

  const toggleSize = (size: number) => {
    setFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 50000],
      sizes: [],
    });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.sizes.length > 0 ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== 50000;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            All Products
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Discover our complete collection of premium footwear
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar Filter */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white capitalize">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                  Price Range
                </h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={filters.priceRange[1]}
                    onChange={e =>
                      setFilters(prev => ({
                        ...prev,
                        priceRange: [0, parseInt(e.target.value)],
                      }))
                    }
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span>Rs. 0</span>
                    <span>Rs. {filters.priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-3">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                        filters.sizes.includes(size)
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600 dark:text-slate-400">
                Showing {filteredAndSortedProducts.length} products
              </p>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as SortOption)}
                    className="appearance-none bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>

                {/* Mobile Filter Button */}
                <Button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden"
                  variant="outline"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product, index) => (
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
            ) : (
              <div className="text-center py-20">
                <p className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  No products found
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Try adjusting your filters
                </p>
                <Button onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-900 z-50 overflow-y-auto lg:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Filters
                  </h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                      Category
                    </h4>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <label
                          key={category}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={filters.categories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="w-4 h-4 rounded"
                          />
                          <span className="text-sm capitalize">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                      Price Range
                    </h4>
                    <div className="space-y-3">
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        step="1000"
                        value={filters.priceRange[1]}
                        onChange={e =>
                          setFilters(prev => ({
                            ...prev,
                            priceRange: [0, parseInt(e.target.value)],
                          }))
                        }
                        className="w-full"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span>Rs. 0</span>
                        <span>Rs. {filters.priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Size Filter */}
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                      Size
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`py-2 px-3 rounded-lg text-sm font-medium ${
                            filters.sizes.includes(size)
                              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                              : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full"
                  >
                    Show {filteredAndSortedProducts.length} Products
                  </Button>
                  {hasActiveFilters && (
                    <Button
                      onClick={() => {
                        resetFilters();
                        setIsFilterOpen(false);
                      }}
                      variant="outline"
                      className="w-full"
                    >
                      Reset Filters
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
