# Aurora Step - Phase 1 Frontend

Premium footwear e-commerce store built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

### Pages (13 Routes)
- **Home** (`/`) — Hero section, trending products, featured categories, brand showcase
- **Shop** (`/shop`) — All products grid with filters
- **Men** (`/men`) — Men's footwear collection
- **Women** (`/women`) — Women's footwear collection
- **Kids** (`/kids`) — Kids' footwear collection
- **Product Detail** (`/product/[id]`) — Full product view with images, sizes, colors, reviews
- **Cart** (`/cart`) — Cart management with quantity controls
- **Wishlist** (`/wishlist`) — Saved items management
- **Checkout** (`/checkout`) — Order form with payment method selection
- **Order Confirmation** (`/order-confirmation`) — Post-purchase success page
- **Search** (`/search?q=`) — Real-time search results
- **404** — Custom not-found page

### Core Components
- **Navbar** — Responsive navigation with search modal, theme toggle, cart/wishlist badges, user menu, mobile drawer
- **Footer** — Newsletter signup, brand info, contact details, social links, payment methods, trust badges
- **ProductCard** — Product grid card with trending badge, wishlist toggle, star rating, discount tag
- **UI Components** — Reusable `Button`, `Input`, `Modal`, `Toast`

### State Management
- **ThemeContext** — Light/dark mode with localStorage persistence
- **CartContext** — Add/remove/update cart items with quantity
- **WishlistContext** — Toggle wishlist items with heart button

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16.2.9 | React framework (App Router) |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |

## 📦 Product Data

21 products across 3 categories (Men, Women, Kids) with:
- Realistic Pakistani pricing (Rs.)
- Multiple sizes (7–12)
- Color variants with hex codes
- Ratings and reviews
- Discount percentages
- High-quality compressed product images

## 🎨 Design Highlights

- Responsive design (mobile-first with Tailwind breakpoints)
- Dark/light mode with smooth transitions
- Glassmorphism navbar with backdrop blur
- Animated page transitions with Framer Motion
- Custom SVG icons for social media
- Bento grid layout for feature sections

## 🚦 Getting Started

## 📁 Project Structure

```
shoe-store/
├── public/
│   ├── products/       # Compressed product images (21 files)
│   └── logo.png        # Aurora Step logo
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── kids/
│   │   ├── men/
│   │   ├── order-confirmation/
│   │   ├── product/[id]/
│   │   ├── search/
│   │   ├── shop/
│   │   ├── wishlist/
│   │   └── women/
│   ├── components/
│   │   ├── layout/     # Navbar, Footer
│   │   ├── product/    # ProductCard
│   │   └── ui/         # Button, Input, Modal, Toast
│   ├── contexts/       # Theme, Cart, Wishlist providers
│   ├── data/           # Product data (21 items)
│   ├── lib/            # Utility functions
│   └── types/          # TypeScript interfaces
```

## 🔧 Phase 1 Scope

- ✅ Complete frontend UI with all pages
- ✅ Responsive design (mobile + desktop)
- ✅ Dark/light theme
- ✅ Cart & wishlist state management
- ✅ Product browsing & search
- ✅ Checkout form (UI only, no backend)
- ✅ Image optimization (compressed from ~45MB to ~1.2MB)
- ✅ TypeScript — zero build errors
- ✅ All 13 routes build successfully

+ Thought: 1.5s
→Read gitignore 
+ Thought: 379ms
# Wrote shoe-store\README.md
# Aurora Step - Phase 1 Frontend

Premium footwear e-commerce store built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Pages

- **Home** — Hero, trending products, categories, brand showcase
- **Shop** — All products grid with filters
- **Men / Women / Kids** — Category-specific product listings
- **Product Detail** (`/product/[id]`) — Full product view
- **Cart** — Cart management with quantity controls
- **Wishlist** — Saved items
- **Checkout** — Order form with payment selection
- **Order Confirmation** — Post-purchase success page
- **Search** — Search results page

## Tech Stack

Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React
Done. Created README.md at the repo root with full project description, features list, tech stack, structure, and setup instructions. Also updated shoe-store/README.md.
Ab dono files ko commit karo:
