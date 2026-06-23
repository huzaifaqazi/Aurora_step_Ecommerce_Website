'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/components/ui/Toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { showToast } = useToast();

  const isWishlisted = wishlist.some(item => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.sizes.length > 0 && product.colors.length > 0) {
      addToCart(product, product.sizes[0], product.colors[0], 1);
      showToast('Added to cart!', 'success');
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
      showToast('Removed from wishlist', 'info');
    } else {
      addToWishlist(product);
      showToast('Added to wishlist!', 'success');
    }
  };

  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
      >
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{product.discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 z-20 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-900 transition-colors"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isWishlisted ? 'fill-red-500 stroke-red-500' : 'stroke-slate-600 dark:stroke-slate-300'
            }`}
          />
        </motion.button>

        {/* Trending Badge */}
        {product.trending && (
          <div className="absolute top-3 right-14 z-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
            Trending
          </div>
        )}

        {/* Product Image */}
        <div className="aspect-square bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold mb-1">
            {product.brand}
          </p>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-slate-300 dark:text-slate-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleAddToCart}
            className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-2.5 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </motion.button>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <span className="bg-white px-6 py-3 rounded-lg font-semibold text-slate-900">
              Out of Stock
            </span>
          </div>
        )}
      </motion.div>
    </Link>
  );
}
