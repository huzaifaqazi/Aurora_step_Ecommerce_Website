'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product, ProductColor } from '@/types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: number, color: ProductColor, quantity?: number) => void;
  removeFromCart: (productId: string, size: number, color: ProductColor) => void;
  updateQuantity: (productId: string, size: number, color: ProductColor, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, mounted]);

  const addToCart = (product: Product, size: number, color: ProductColor, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.product.id === product.id &&
                item.size === size &&
                item.color.name === color.name
      );

      if (existing) {
        return prev.map(item =>
          item.product.id === product.id &&
          item.size === size &&
          item.color.name === color.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { product, size, color, quantity }];
    });
  };

  const removeFromCart = (productId: string, size: number, color: ProductColor) => {
    setCart(prev => prev.filter(
      item => !(item.product.id === productId &&
                item.size === size &&
                item.color.name === color.name)
    ));
  };

  const updateQuantity = (productId: string, size: number, color: ProductColor, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }

    setCart(prev => prev.map(item =>
      item.product.id === productId &&
      item.size === size &&
      item.color.name === color.name
        ? { ...item, quantity }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
