'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export function Footer() {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'FAQ', href: '/faq' },
    ],
    customerService: [
      { label: 'Returns & Exchanges', href: '/returns' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Track Order', href: '/track' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
    { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
    { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
  ];

  const paymentMethods = ['Visa', 'Mastercard', 'JazzCash', 'EasyPaisa', 'Bank Transfer'];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Subscribe to get special offers, exclusive deals, and updates on new arrivals
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                required
              />
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Aurora Step
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
              Your trusted destination for quality footwear. We offer the best brands at affordable prices with fast delivery across Pakistan.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@shoestore.pk</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Karachi, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {footerLinks.customerService.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="text-sm text-slate-600 dark:text-slate-400">We Accept:</span>
              {paymentMethods.map(method => (
                <div
                  key={method}
                  className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  {method}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Aurora Step. All rights reserved.
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🚚</div>
              <h5 className="font-semibold text-slate-900 dark:text-white mb-1">Free Shipping</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">On orders over Rs. 5,000</p>
            </div>
            <div>
              <div className="text-3xl mb-2">↩️</div>
              <h5 className="font-semibold text-slate-900 dark:text-white mb-1">30-Day Returns</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">Easy return policy</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <h5 className="font-semibold text-slate-900 dark:text-white mb-1">Secure Payment</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">100% secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
