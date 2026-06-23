'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Minus, Plus, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/components/ui/Toast';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/product/ProductCard';
import { formatPrice } from '@/lib/utils';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { showToast } = useToast();

  const product = products.find(p => p.id === params.id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Product not found
          </h1>
          <Button onClick={() => router.push('/shop')}>Go to Shop</Button>
        </div>
      </div>
    );
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      showToast('Please select a size', 'error');
      return;
    }

    addToCart(product, selectedSize, product.colors[selectedColor], quantity);
    showToast('Added to cart!', 'success');
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      showToast('Removed from wishlist', 'info');
    } else {
      addToWishlist(product);
      showToast('Added to wishlist!', 'success');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-8">
          <button onClick={() => router.push('/')} className="hover:text-slate-900 dark:hover:text-white">
            Home
          </button>
          <span>/</span>
          <button onClick={() => router.push('/shop')} className="hover:text-slate-900 dark:hover:text-white">
            Shop
          </button>
          <span>/</span>
          <span className="text-slate-900 dark:text-white capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden relative"
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Thumbnail Grid */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative transition-all ${
                      selectedImage === index
                        ? 'ring-2 ring-slate-900 dark:ring-white'
                        : 'hover:ring-2 ring-slate-300 dark:ring-slate-600'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-slate-300 dark:text-slate-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-slate-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {product.discount}%
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-sm font-medium">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Available Colors
              </h3>
              <div className="flex items-center gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === index
                        ? 'border-slate-900 dark:border-white scale-110'
                        : 'border-slate-300 dark:border-slate-600 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor === index && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white dark:bg-slate-900 rounded-full" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Select Size
                </h3>
                <button className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 scale-105'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-300 dark:border-slate-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-semibold text-slate-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                size="lg"
                className="flex-1"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                onClick={handleWishlistToggle}
                size="lg"
                variant="outline"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted ? 'fill-red-500 stroke-red-500' : ''
                  }`}
                />
              </Button>
            </div>

            {/* Product Details */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Brand</span>
                <span className="font-medium text-slate-900 dark:text-white">{product.brand}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Material</span>
                <span className="font-medium text-slate-900 dark:text-white">{product.material}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Care Instructions</span>
                <span className="font-medium text-slate-900 dark:text-white">{product.care}</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-slate-600 dark:text-slate-400" />
                <p className="text-xs text-slate-600 dark:text-slate-400">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 mx-auto mb-2 text-slate-600 dark:text-slate-400" />
                <p className="text-xs text-slate-600 dark:text-slate-400">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-slate-600 dark:text-slate-400" />
                <p className="text-xs text-slate-600 dark:text-slate-400">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
