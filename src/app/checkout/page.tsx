'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Smartphone } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { formatPrice, calculateOrderSummary } from '@/lib/utils';
import { useToast } from '@/components/ui/Toast';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'debit' | 'jazzcash' | 'easypaisa' | 'bank'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const orderSummary = calculateOrderSummary(cartTotal);

  const paymentMethods = [
    { value: 'card', label: 'Credit Card', icon: CreditCard },
    { value: 'debit', label: 'Debit Card', icon: CreditCard },
    { value: 'jazzcash', label: 'JazzCash', icon: Smartphone },
    { value: 'easypaisa', label: 'EasyPaisa', icon: Smartphone },
    { value: 'bank', label: 'Bank Transfer', icon: CreditCard },
  ];

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Your cart is empty
          </h1>
          <Button onClick={() => router.push('/shop')}>Go to Shop</Button>
        </div>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid phone number (11 digits required)';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('Please fill all required fields', 'error');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      showToast('Order placed successfully!', 'success');
      router.push('/order-confirmation');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Cart
          </button>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Checkout
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  Shipping Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Input
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      error={errors.fullName}
                      required
                    />
                  </div>

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    required
                  />

                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                    placeholder="03001234567"
                    required
                  />

                  <div className="md:col-span-2">
                    <Input
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      error={errors.address}
                      placeholder="Street address, apartment, suite, etc."
                      required
                    />
                  </div>

                  <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    error={errors.city}
                    required
                  />

                  <Input
                    label="Postal Code"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    error={errors.postalCode}
                    required
                  />
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  Payment Method
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {paymentMethods.map(method => (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() => setPaymentMethod(method.value as typeof paymentMethod)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        paymentMethod === method.value
                          ? 'border-slate-900 dark:border-white bg-slate-50 dark:bg-slate-700'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <method.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        <span className="font-medium text-slate-900 dark:text-white">
                          {method.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                    Order Summary
                  </h2>

                  {/* Cart Items */}
                  <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                    {cart.map(item => (
                      <div
                        key={`${item.product.id}-${item.size}-${item.color.name}`}
                        className="flex gap-3"
                      >
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex-shrink-0 relative overflow-hidden">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-900 dark:text-white text-sm truncate">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Size {item.size} • Qty {item.quantity}
                          </p>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4 space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {formatPrice(orderSummary.subtotal)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {orderSummary.shipping === 0 ? (
                          <span className="text-green-600 dark:text-green-400">Free</span>
                        ) : (
                          formatPrice(orderSummary.shipping)
                        )}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Tax (17% PST)</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {formatPrice(orderSummary.tax)}
                      </span>
                    </div>

                    <div className="border-t border-slate-200 dark:border-slate-700 pt-3">
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
                    type="submit"
                    size="lg"
                    className="w-full"
                    loading={isProcessing}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Complete Purchase'}
                  </Button>

                  <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4">
                    By completing your purchase you agree to our Terms of Service
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
