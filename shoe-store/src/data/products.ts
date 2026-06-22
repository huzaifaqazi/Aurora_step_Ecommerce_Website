import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Air Max 2024',
    brand: 'Nike',
    description: 'Premium running shoes with advanced cushioning technology for maximum comfort',
    price: 14999,
    originalPrice: 18999,
    discount: 21,
    images: ['/products/men1.jpg'],
    category: 'men',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Red', hex: '#DC2626' }
    ],
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    material: 'Mesh and Synthetic',
    care: 'Wipe with damp cloth',
    trending: true,
    featured: true
  },
  {
    id: '2',
    name: 'UltraBoost 23',
    brand: 'Adidas',
    description: 'Energy-returning running shoes with Boost cushioning',
    price: 16999,
    originalPrice: 19999,
    discount: 15,
    images: ['/products/men2.jpg'],
    category: 'men',
    sizes: [7, 8, 9, 10, 11],
    colors: [
      { name: 'Core Black', hex: '#1F2937' },
      { name: 'Cloud White', hex: '#F9FAFB' }
    ],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    material: 'Primeknit Upper',
    care: 'Machine washable',
    featured: true
  },
  {
    id: '3',
    name: 'Classic Leather',
    brand: 'Reebok',
    description: 'Timeless leather sneakers for everyday wear',
    price: 7999,
    images: ['/products/women1.jpg'],
    category: 'women',
    sizes: [5, 6, 7, 8, 9],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' }
    ],
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
    material: 'Full-grain leather',
    care: 'Wipe with soft cloth',
    trending: true
  },
  {
    id: '4',
    name: 'Kids Runner Pro',
    brand: 'Puma',
    description: 'Lightweight and flexible shoes designed for active kids',
    price: 5999,
    originalPrice: 7999,
    discount: 25,
    images: ['/products/kid1.jpg'],
    category: 'kids',
    sizes: [4, 5, 6, 7, 8],
    colors: [
      { name: 'Blue', hex: '#3B82F6' },
      { name: 'Pink', hex: '#EC4899' }
    ],
    rating: 4.6,
    reviewCount: 98,
    inStock: true,
    material: 'Breathable mesh',
    care: 'Machine washable',
    featured: true
  },
  {
    id: '5',
    name: 'Court Vision',
    brand: 'Nike',
    description: 'Basketball-inspired lifestyle shoes with retro design',
    price: 9999,
    images: ['/products/men3.jpg'],
    category: 'men',
    sizes: [8, 9, 10, 11, 12],
    colors: [
      { name: 'White/Black', hex: '#FFFFFF' },
      { name: 'Navy', hex: '#1E3A8A' }
    ],
    rating: 4.4,
    reviewCount: 145,
    inStock: true,
    material: 'Leather and Synthetic',
    care: 'Spot clean only',
    trending: true
  },
  {
    id: '6',
    name: 'Superstar',
    brand: 'Adidas',
    description: 'Iconic shell-toe sneakers with timeless style',
    price: 10999,
    images: ['/products/women2.jpg'],
    category: 'women',
    sizes: [5, 6, 7, 8, 9, 10],
    colors: [
      { name: 'White/Black', hex: '#FFFFFF' },
      { name: 'All White', hex: '#F9FAFB' }
    ],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    material: 'Leather upper',
    care: 'Wipe clean',
    featured: true
  },
  {
    id: '7',
    name: 'Fresh Foam X',
    brand: 'New Balance',
    description: 'Plush cushioning for all-day comfort',
    price: 13999,
    images: ['/products/men4.jpg'],
    category: 'men',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: 'Grey', hex: '#6B7280' },
      { name: 'Navy', hex: '#1E3A8A' }
    ],
    rating: 4.6,
    reviewCount: 167,
    inStock: true,
    material: 'Engineered mesh',
    care: 'Hand wash recommended'
  },
  {
    id: '8',
    name: 'Gel Kayano 30',
    brand: 'Asics',
    description: 'Stability running shoes with gel cushioning',
    price: 17999,
    images: ['/products/women3.jpg'],
    category: 'women',
    sizes: [5, 6, 7, 8, 9],
    colors: [
      { name: 'Black/Pink', hex: '#000000' },
      { name: 'Blue/White', hex: '#3B82F6' }
    ],
    rating: 4.8,
    reviewCount: 203,
    inStock: true,
    material: 'Mesh and synthetic',
    care: 'Air dry only',
    trending: true
  },
  {
    id: '9',
    name: 'Speed Runner',
    brand: 'Puma',
    description: 'Lightweight running shoes for speed training',
    price: 12999,
    originalPrice: 15999,
    discount: 19,
    images: ['/products/men5.jpg'],
    category: 'men',
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Orange', hex: '#F97316' }
    ],
    rating: 4.7,
    reviewCount: 178,
    inStock: true,
    material: 'Synthetic mesh',
    care: 'Hand wash',
    trending: true
  },
  {
    id: '10',
    name: 'Classic Sport',
    brand: 'Reebok',
    description: 'Versatile sports shoes for training and casual wear',
    price: 8999,
    images: ['/products/men6.jpg'],
    category: 'men',
    sizes: [8, 9, 10, 11, 12],
    colors: [
      { name: 'Navy', hex: '#1E3A8A' },
      { name: 'Grey', hex: '#6B7280' }
    ],
    rating: 4.5,
    reviewCount: 134,
    inStock: true,
    material: 'Mesh and rubber',
    care: 'Machine washable'
  },
  {
    id: '11',
    name: 'Floral Comfort',
    brand: 'Skechers',
    description: 'Stylish casual shoes with memory foam comfort',
    price: 6999,
    images: ['/products/women4.jpg'],
    category: 'women',
    sizes: [5, 6, 7, 8, 9],
    colors: [
      { name: 'Pink', hex: '#EC4899' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    rating: 4.6,
    reviewCount: 201,
    inStock: true,
    material: 'Textile upper',
    care: 'Wipe clean',
    featured: true
  },
  {
    id: '12',
    name: 'Flex Appeal',
    brand: 'Skechers',
    description: 'Flexible training shoes with cushioned insole',
    price: 7999,
    originalPrice: 9999,
    discount: 20,
    images: ['/products/women5.jpg'],
    category: 'women',
    sizes: [5, 6, 7, 8, 9, 10],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Blue', hex: '#3B82F6' }
    ],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    material: 'Knit fabric',
    care: 'Machine washable',
    trending: true
  },
  {
    id: '13',
    name: 'Everyday Style',
    brand: 'Nike',
    description: 'Casual lifestyle sneakers for everyday comfort',
    price: 9499,
    images: ['/products/women6.jpg'],
    category: 'women',
    sizes: [5, 6, 7, 8, 9],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Beige', hex: '#D1D5DB' }
    ],
    rating: 4.5,
    reviewCount: 167,
    inStock: true,
    material: 'Leather and textile',
    care: 'Wipe with damp cloth'
  },
  {
    id: '14',
    name: 'Jump High',
    brand: 'Nike',
    description: 'Fun and colorful shoes for active kids',
    price: 4999,
    images: ['/products/kid2.jpg'],
    category: 'kids',
    sizes: [3, 4, 5, 6, 7],
    colors: [
      { name: 'Red', hex: '#DC2626' },
      { name: 'Blue', hex: '#3B82F6' }
    ],
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    material: 'Breathable mesh',
    care: 'Machine washable',
    featured: true
  },
  {
    id: '15',
    name: 'Little Explorer',
    brand: 'Adidas',
    description: 'Durable shoes designed for outdoor play',
    price: 5499,
    originalPrice: 6999,
    discount: 21,
    images: ['/products/kid3.jpg'],
    category: 'kids',
    sizes: [4, 5, 6, 7, 8],
    colors: [
      { name: 'Green', hex: '#10B981' },
      { name: 'Yellow', hex: '#FBBF24' }
    ],
    rating: 4.8,
    reviewCount: 145,
    inStock: true,
    material: 'Synthetic leather',
    care: 'Wipe clean',
    trending: true
  },
  {
    id: '16',
    name: 'Speed Racer',
    brand: 'Puma',
    description: 'Racing-inspired design for energetic kids',
    price: 5999,
    images: ['/products/kid4.jpg'],
    category: 'kids',
    sizes: [3, 4, 5, 6, 7, 8],
    colors: [
      { name: 'Black/Red', hex: '#000000' },
      { name: 'Blue/White', hex: '#3B82F6' }
    ],
    rating: 4.6,
    reviewCount: 98,
    inStock: true,
    material: 'Mesh upper',
    care: 'Hand wash recommended'
  },
  {
    id: '17',
    name: 'Comfy Steps',
    brand: 'New Balance',
    description: 'Comfortable everyday shoes for growing feet',
    price: 6499,
    images: ['/products/kid5.jpg'],
    category: 'kids',
    sizes: [4, 5, 6, 7, 8],
    colors: [
      { name: 'Pink', hex: '#EC4899' },
      { name: 'Purple', hex: '#A855F7' }
    ],
    rating: 4.9,
    reviewCount: 176,
    inStock: true,
    material: 'Soft textile',
    care: 'Machine washable',
    featured: true
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Ahmed Khan',
    rating: 5,
    comment: 'Best quality shoes at affordable prices! Fast delivery and excellent customer service.',
    avatar: '/images/avatars/user-1.jpg'
  },
  {
    id: '2',
    name: 'Sara Ali',
    rating: 5,
    comment: 'Love the variety and comfort! These are my go-to shoes for running.',
    avatar: '/images/avatars/user-2.jpg'
  },
  {
    id: '3',
    name: 'Hassan Raza',
    rating: 4,
    comment: 'Great experience shopping here. The return policy is very convenient.',
    avatar: '/images/avatars/user-3.jpg'
  }
];
