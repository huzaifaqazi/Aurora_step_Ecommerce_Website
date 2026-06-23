import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import { ToastProvider } from '@/components/ui/Toast';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aurora Step - Premium Footwear for Everyone',
  description: 'Shop the latest collection of shoes for men, women, and kids. Free shipping on orders over Rs. 5,000. 30-day easy returns.',
  keywords: 'shoes, footwear, sneakers, running shoes, casual shoes, Pakistan, online shopping',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Aurora Step - Premium Footwear for Everyone',
    description: 'Shop the latest collection of shoes for men, women, and kids.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors`}>
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <ToastProvider>
                <Navbar />
                <main className="min-h-screen">
                  {children}
                </main>
                <Footer />
              </ToastProvider>
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
