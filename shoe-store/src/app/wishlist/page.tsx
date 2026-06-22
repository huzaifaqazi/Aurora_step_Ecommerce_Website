'use client';

import { motion } from 'framer-motion';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { useToast } from '@/components/ui/Toast';
import Link from 'next/link';
import Image from 'next/image';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const router = useRouter();
  const { showToast } = useToast();

  const handleMoveToCart = (product: any) => {
    if (product.sizes.length > 0 && product.colors.length > 0) {
      addToCart(product, product.sizes[0], product.colors[0], 1);
      removeFromWishlist(product.id);
      showToast('Moved to cart!', 'success');
    }
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="text-8xl mb-6"
          >
            ❤️
          </motion.div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Your wishlist is empty
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Save your favorite items for later
          </p>
          <Button onClick={() => router.push('/shop')} size="lg">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            My Wishlist
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <Link href={`/product/${product.id}`}>
                <div className="aspect-square bg-slate-100 dark:bg-slate-700 relative overflow-hidden cursor-pointer group">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold mb-1">
                      {product.brand}
                    </p>
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-semibold text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-300 line-clamp-2 mb-2">
                        {product.name}
                      </h3>
                    </Link>
                  </div>
                  <button
                    onClick={() => {
                      removeFromWishlist(product.id);
                      showToast('Removed from wishlist', 'info');
                    }}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    ({product.reviewCount})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-slate-900 dark:text-white">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleMoveToCart(product)}
                    disabled={!product.inStock}
                    className="flex-1"
                    size="sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Link href={`/product/${product.id}`} className="flex-1">
                    <Button variant="outline" className="w-full" size="sm">
                      View
                    </Button>
                  </Link>
                </div>

                {!product.inStock && (
                  <p className="text-xs text-red-600 dark:text-red-400 text-center mt-2">
                    Out of Stock
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
