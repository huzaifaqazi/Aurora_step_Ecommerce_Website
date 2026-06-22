# ShoeStore - E-Commerce Website (Phase 1 - Frontend)

## 🎯 Project Overview

Modern, responsive e-commerce website for shoes built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features Implemented

### 1. **Home Page** ✅
- Hero section with CTA buttons
- Featured Products carousel
- Trending Products section
- Benefits section (Free Shipping, Returns, Secure Payment)
- Customer Testimonials with ratings
- Smooth animations on scroll

### 2. **Shop Page** ✅
- Advanced filtering sidebar:
  - Category filter (Men, Women, Kids)
  - Dynamic price range slider (Rs. 0 - 50,000)
  - Size selection (4-12)
  - Mobile responsive filter modal
- Smart sorting options:
  - Latest (default)
  - Price: Low to High
  - Price: High to Low
  - Highest Rated
  - Trending
- Product grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Product count display
- No results state with reset button

### 3. **Product Detail Page** ✅
- Image gallery with thumbnail navigation
- Product information with brand, rating, reviews
- Price display with discount percentage
- Stock status indicator
- Available colors selector
- Size selector with size guide link
- Quantity controls (+/-)
- Add to Cart button
- Add to Wishlist button
- Product details (Brand, Material, Care instructions)
- Related Products section
- Trust badges (Free Shipping, Returns, Secure Payment)

### 4. **Shopping Cart Page** ✅
- Cart items display with product images
- Product name, size, price information
- Quantity controls per item
- Remove item button
- Empty cart state
- Order Summary with:
  - Subtotal calculation
  - Shipping cost (Free over Rs. 5,000)
  - Tax calculation (17% PST)
  - Total amount
- Sticky sidebar on desktop
- Trust badges section
- Continue Shopping & Proceed to Checkout buttons

### 5. **Checkout Page** ✅
- Shipping Information Form:
  - Full name, Email, Phone number
  - Address, City, Postal code
  - Form validation
- Payment Method Selection:
  - Credit Card
  - Debit Card
  - JazzCash
  - EasyPaisa
  - Bank Transfer
- Order Summary with itemized breakdown
- Complete purchase button with loading state
- Back to cart option

### 6. **Additional Pages** ✅
- **Wishlist Page**: Save favorite products, move to cart
- **Order Confirmation Page**: Success message, order details, status timeline
- **Search Results Page**: Live search with results
- **404 Error Page**: Custom not-found page

## 🎨 Design Features

### Modern UI/UX
- ✅ Clean, minimalist design
- ✅ Dark/Light mode toggle with localStorage persistence
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design (mobile-first approach)
- ✅ Hover effects and micro-interactions
- ✅ SVG icons (Lucide React) - no emojis as structural icons

### Navbar Features
- ✅ Modern hover-based navigation
- ✅ Search bar with modal
- ✅ Cart icon with item count badge
- ✅ Wishlist icon with count badge
- ✅ Dark/Light theme toggle
- ✅ User dropdown menu
- ✅ Mobile responsive menu
- ✅ Sticky navbar

### Footer
- ✅ Company links (About, Contact, Careers, FAQ)
- ✅ Customer Service (Returns, Shipping Info, Size Guide, Track Order)
- ✅ Newsletter signup
- ✅ Social media links
- ✅ Payment method icons (Visa, Mastercard, JazzCash, EasyPaisa, Bank Transfer)
- ✅ Trust badges
- ✅ Copyright information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API
- **Local Storage**: Cart & Wishlist persistence
- **Form Handling**: React controlled components

## 📁 Project Structure

```
shoe-store/
├── src/
│   ├── app/
│   │   ├── cart/page.tsx
│   │   ├── checkout/page.tsx
│   │   ├── order-confirmation/page.tsx
│   │   ├── product/[id]/page.tsx
│   │   ├── search/page.tsx
│   │   ├── shop/page.tsx
│   │   ├── wishlist/page.tsx
│   │   ├── not-found.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── product/
│   │   │   └── ProductCard.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       └── Toast.tsx
│   ├── contexts/
│   │   ├── CartContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── WishlistContext.tsx
│   ├── data/
│   │   └── products.ts
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/
│   └── images/
├── package.json
└── tsconfig.json
```

## 🎯 Key Features

### State Management
- **Cart Context**: Add, remove, update quantity, persist to localStorage
- **Wishlist Context**: Add, remove products, persist to localStorage  
- **Theme Context**: Dark/Light mode toggle with system preference detection

### Utilities
- Price formatting (PKR currency)
- Order summary calculations (subtotal, shipping, tax, total)
- Discount calculation
- Debounce function for search
- className utility with clsx

### Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Focus states on interactive elements
- Screen reader friendly
- Semantic HTML

### Performance
- Server Components by default
- Client Components only where needed
- Lazy loading images (Next.js Image ready)
- Optimized animations
- Minimal bundle size

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the application.

## 📦 Sample Data

The application includes 8 sample shoe products with:
- Nike, Adidas, Reebok, Puma, New Balance, Asics brands
- Different categories (Men, Women, Kids)
- Various sizes (4-12)
- Multiple colors
- Ratings and review counts
- Pricing with discounts
- Stock status
- Trending and featured flags

## 🎨 Design Principles Applied

✅ **UI/UX Pro Max Guidelines**:
- Touch target minimum: 44×44px (iOS) / 48×48dp (Android)
- Color contrast: 4.5:1 minimum for text
- Consistent spacing using 4px/8dp increments
- Mobile-first responsive design
- SVG icons instead of emojis
- Proper loading states and feedback
- Error handling with clear messages

✅ **Next.js Best Practices**:
- Server Components by default
- Client Components marked with 'use client'
- Proper metadata for SEO
- File-based routing
- TypeScript for type safety

## 🌟 Highlights

- **100% TypeScript** for type safety
- **Fully Responsive** - works on mobile, tablet, and desktop
- **Dark Mode Support** with smooth transitions
- **Persistent State** - cart and wishlist survive page refreshes
- **Toast Notifications** for user feedback
- **Form Validation** on checkout
- **Smooth Animations** throughout the app
- **Clean Code** with reusable components

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🎯 Next Steps (Phase 2 & 3)

Phase 2 would include:
- Backend integration
- Real product images
- User authentication
- Payment gateway integration
- Order management
- Admin panel

Phase 3 would include:
- Product reviews and ratings system
- Advanced search with filters
- Wishlist sharing
- Email notifications
- Analytics integration
- Performance optimizations

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
