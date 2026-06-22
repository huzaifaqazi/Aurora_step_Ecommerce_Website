export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: 'men' | 'women' | 'kids';
  sizes: number[];
  colors: ProductColor[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  material: string;
  care: string;
  trending?: boolean;
  featured?: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface CartItem {
  product: Product;
  size: number;
  color: ProductColor;
  quantity: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export type SortOption = 'latest' | 'price-low' | 'price-high' | 'rating' | 'trending';

export interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  sizes: number[];
}
