# FREEMARKET FRONTEND NEXT.JS GUIDELINES

## 1. Core Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Icons**: Lucide React (`lucide-react`)
- **State Management**: Zustand (with `persist` middleware for LocalStorage)
- **Form & Validation**: React Hook Form + Zod
- **Animations**: Framer Motion / Tailwind CSS transitions
- **Notifications**: Sonner (`toast`)

## 2. Project Domain & Visual Vibe
- **Domain**: Two-sided C2C E-commerce Marketplace (Users act seamlessly as both Buyers and Merchants/Sellers).
  - **Buyer Experience**: Product feed, category filters, item details, order tracking, direct seller chat, wishlist/cart.
  - **Merchant Experience**: Quick product listing creation, active listings manager, simple order fulfillment status, sales summary.
  - **Account Mode**: Seamless UI role-switching between "Buyer Mode" (Shopping) and "Merchant Studio" (Selling/Managing).

- **Visual Aesthetic & Motion Rules**:
  - **Utilitarian & Clean**: Practical, distraction-free UI focused on content, price clarity, and fast scanning.
  - **Zero Gloss / No Flashy FX**: STRICTLY NO complex 3D effects, heavy glassmorphism, glowing gradients, or bouncy/fancy animations.
  - **Minimal Motion**: Limit animations strictly to functional UI state changes (e.g., accordion expansion, bottom-sheet slide up, tab switching) with fast durations (`duration-150` or `duration-200`).

- **Color Palette (Light & Approachable)**:
  - **Backgrounds**: Bright, clean, crisp light mode (`bg-white`, `bg-slate-50/80`), subtle slate borders (`border-slate-200`).
  - **Primary Accent**: Friendly, trustworthy high-contrast accent (e.g., Slate/Emerald/Teal or Warm Coral) for key CTAs.
  - **Condition & Status Badges**: Light pastel color-coded badges for item conditions (*New*, *Like New*, *Well Used*) and order states (*Pending*, *Shipped*, *Completed*).

- **Layout & Mobile-First UX Patterns**:
  - **Mobile-First Navigation**: Fixed bottom navigation bar (Home, Search, Sell +, Messages, Profile/Studio).
  - **Touch-Friendly Controls**: Use Bottom Sheets (`drawer`) for mobile filters/actions instead of center popups. Sticky bottom action bar for "Buy Now / Chat with Seller" on product detail pages.
  - **Trust & Micro-Signals**: Always display seller reputation badges (rating, total sales, response speed) and item location/condition clearly on product cards.

## 3. Component & Boundary Rules (RSC vs Client)
- **Server Components (Default)**: All pages (`app/**/page.tsx`), layouts, and static content displays MUST be React Server Components (RSC) by default.
- **Client Components**: Add `"use client"` strictly at the top of files that require browser interactivity (`useState`, `useEffect`, event listeners, Zustand hooks).
- **Isolate Interactivity**: Do NOT mark entire pages as `"use client"` for a single interactive element. Extract interactive components (e.g., `<AddToCartButton />`, `<CartDrawer />`) into separate client files.

## 5. Mock Data & Data Flow (No Backend APIs)
- **No Real API Requests**: Do NOT build backend API routes, Database queries, or external `fetch()` calls.
- **Centralized Mock Data**: Place all mock items in `@/lib/mock-data.ts`.
- **Rich & Realistic Data**: Include high-resolution Unsplash URLs, realistic prices, ratings, stock counts, tags, variant colors, and descriptions.
- **High Quality Images**: Use Unsplash image URLs with query params (`?auto=format&fit=crop&w=800&q=80`) and ensure standard aspect ratios (`aspect-square`, `aspect-[4/5]`).

## 6. State Management & Persistence
- **Cart & Wishlist**: Use Zustand stores with `persist` middleware to preserve items in `localStorage` across page reloads.
- **Immediate Feedback**: Trigger a toast notification (`toast.success("Added to cart!")` or `toast.info(...)`) via `sonner` on every user action (Add to Cart, Save Wishlist, Apply Coupon, Copy Link).

## 7. Edge Cases, Loading & Empty States
- **Skeleton UI**: Always provide `<Skeleton />` variants or `loading.tsx` fallbacks for product cards, details, and lists.
- **Empty States**: Design polished empty state UI with helpful CTA buttons for cases like empty cart, no search results, or empty wishlist.

## 9. Coding & Naming Conventions
- **Naming**:
  - Components & Interfaces: `PascalCase` (e.g., `ProductCard.tsx`, `ProductProps`)
  - Files & Folders: `kebab-case` (e.g., `product-card.tsx`, `use-cart.ts`)
  - Functions & Variables: `camelCase` (e.g., `calculateTotal`, `isCartOpen`)
- **Exports**: Prefer named exports (`export function ProductCard() {}`), reserving default exports ONLY for Next.js route components (`page.tsx`, `layout.tsx`, `loading.tsx`).
- **Strict TypeScript**:
  - NO `any` or implicit `unknown`. Explicitly define all props and type shapes in `@/types/`.
- **Tailwind Helper**: Always use `cn()` from `@/lib/utils` when conditionally merging dynamic class names.

## 10. AI Behavioral & Output Expectations
- **Production-Ready Code**: Output complete, copy-pasteable, runnable code. NEVER use placeholders like `// TODO: Implement later` or truncation comment tags like `// ... rest of code`.
- **Self-Correction**: Automatically check for missing imports, syntax discrepancies, mismatched RSC boundaries, or unhandled TypeScript types before finalizing code output.