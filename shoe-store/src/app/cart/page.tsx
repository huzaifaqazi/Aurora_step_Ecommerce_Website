'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Minus, Plus, X, ShoppingBag, Truck, RotateCcw, Shield, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { formatPrice, calculateOrderSummary } from '@/lib/utils';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const router = useRouter();

  const orderSummary = calculateOrderSummary(cartTotal);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="text-8xl mb-6"
          >
            🛒
          </motion.div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Your cart is empty
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Looks like you haven't added anything to your cart yet
          </p>
          <Button onClick={() => router.push('/shop')} size="lg">
            <ShoppingBag className="w-5 h-5 mr-2" />
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
            Shopping Cart
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={`${item.product.id}-${item.size}-${item.color.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-lg flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <Link
                          href={`/product/${item.product.id}`}
                          className="font-semibold text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-300"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          {item.product.brand}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                        aria-label="Remove from cart"
                      >
                        <X className="w-5 h-5 text-slate-400" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-2">
                        <span>Color:</span>
                        <div
                          className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600"
                          style={{ backgroundColor: item.color.hex }}
                        />
                        <span>{item.color.name}</span>
                      </div>
                      <span>•</span>
                      <span>Size: {item.size}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-slate-300 dark:border-slate-600 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.color,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 font-semibold text-slate-900 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.color,
                              item.quantity + 1
                            )
                          }
                          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-xl font-bold text-slate-900 dark:text-white">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {formatPrice(item.product.price)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {formatPrice(orderSummary.subtotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {orderSummary.shipping === 0 ? (
                        <span className="text-green-600 dark:text-green-400">Free</span>
                      ) : (
                        formatPrice(orderSummary.shipping)
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Tax (17% PST)</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {formatPrice(orderSummary.tax)}
                    </span>
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-900 dark:text-white">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">
                        {formatPrice(orderSummary.total)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => router.push('/checkout')}
                  size="lg"
                  className="w-full mb-4"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  onClick={() => router.push('/shop')}
                  size="lg"
                  variant="outline"
                  className="w-full"
                >
                  Continue Shopping
                </Button>

                {/* Free Shipping Notice */}
                {orderSummary.shipping > 0 && (
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Add {formatPrice(5000 - cartTotal)} more to get free shipping!
                    </p>
                  </div>
                )}
              </div>

              {/* Trust Badges */}
              <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Why Shop With Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">
                        Free Shipping
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        On orders over Rs. 5,000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RotateCcw className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">
                        30-Day Returns
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Easy return policy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">
                        Secure Payment
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        100% secure checkout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
