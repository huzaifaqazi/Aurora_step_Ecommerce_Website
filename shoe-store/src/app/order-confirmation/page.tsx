'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CheckCircle, Package, Truck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function OrderConfirmationPage() {
  const router = useRouter();

  const orderDetails = {
    orderNumber: 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
  };

  const steps = [
    { icon: CheckCircle, label: 'Order Confirmed', status: 'completed' },
    { icon: Package, label: 'Processing', status: 'current' },
    { icon: Truck, label: 'Shipped', status: 'pending' },
    { icon: MapPin, label: 'Delivered', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Order Confirmed!
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Thank you for your purchase. We've received your order.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-6"
        >
          {/* Order Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Order Number</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {orderDetails.orderNumber}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Order Date</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {orderDetails.date}
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                Estimated Delivery
              </p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                {orderDetails.estimatedDelivery}
              </p>
            </div>
          </div>

          {/* Order Status Timeline */}
          <div className="mb-8">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-6">
              Order Status
            </h2>
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700" />
              <div className="absolute top-6 left-0 w-1/4 h-0.5 bg-green-600 dark:bg-green-400" />

              <div className="relative grid grid-cols-4 gap-2">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                        step.status === 'completed'
                          ? 'bg-green-600 dark:bg-green-400 text-white'
                          : step.status === 'current'
                          ? 'bg-blue-600 dark:bg-blue-400 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                      }`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              What happens next?
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
                You'll receive an email confirmation with order details
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
                We'll send you tracking information once your order ships
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
                Expected delivery within 3-5 business days
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            onClick={() => router.push('/shop')}
            size="lg"
            className="flex-1"
          >
            Continue Shopping
          </Button>
          <Button
            onClick={() => router.push('/')}
            size="lg"
            variant="outline"
            className="flex-1"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
