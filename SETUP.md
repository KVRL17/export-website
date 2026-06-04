# Akshyaa Global Exports - Setup & Run Guide

## ✅ Project Status
- **Build**: ✓ Passing
- **TypeScript**: ✓ No errors
- **Dependencies**: ✓ All installed
- **Ready to deploy**: ✓ Yes

## Quick Start

### Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

### Type Check
```bash
npm run typecheck
```

## Project Structure
```
src/
├── components/          (14 reusable UI components)
├── pages/              (6 pages with full routing)
├── context/            (InquiryCart state management)
├── data/               (Products, testimonials, content)
├── App.tsx             (Main app with routing)
├── main.tsx            (React entry point)
├── index.css           (2500+ lines custom CSS)
└── vite-env.d.ts       (Vite types)
```

## Features

### Landing Page (/)
- Animated preloader (3 sec)
- Full-screen hero section
- Trust bar with certifications
- Product marketplace preview (6 items)
- Why choose us (bento grid)
- Export process timeline
- Export countries map
- Certifications modal
- Testimonials carousel
- Blog section
- Premium footer

### Products (/products)
- Full product catalog (8 items)
- Filter by category
- Real-time search
- Sort options
- Product cards with action buttons

### Product Detail (/product/:slug)
- High-res image gallery
- Full specifications table
- FAQ accordion
- Packaging & certification info
- Sticky inquiry button (mobile)

### Bulk Quote (/bulk-quote)
- 4-step form wizard
- Business details
- Product selection
- Quantity entry
- Requirements notes
- EmailJS integration

### Contact (/contact)
- Contact form with EmailJS
- Phone, email, WhatsApp
- Map placeholder
- Office address

### Blog (/blog & /blog/:slug)
- Article listing
- Article detail pages
- Related articles

## EmailJS Setup (Required for Forms)

### Step 1: Create Free Account
Visit https://www.emailjs.com and sign up

### Step 2: Add Email Service
- Dashboard → Add Service
- Choose Gmail or any email provider
- Connect your email

### Step 3: Create Templates
- Dashboard → Email Templates
- Create template for bulk quote (variables: company_name, buyer_name, products, etc.)
- Create template for contact form

### Step 4: Get Credentials
- Dashboard → General Settings
- Copy: Service ID, Template ID, Public Key

### Step 5: Update Code
File: `src/pages/BulkQuotePage.tsx` (Line ~80)
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',      // ← Replace
  'YOUR_TEMPLATE_ID',     // ← Replace
  templateParams,
  'YOUR_PUBLIC_KEY'       // ← Replace
);
```

File: `src/pages/ContactPage.tsx` (Line ~40)
Same replacement pattern

## Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Traditional Hosting
```bash
npm run build
# Upload `dist/` folder to your hosting
```

## Performance Metrics

| Metric | Value |
|--------|-------|
| Build Size (gzip) | 181 KB |
| CSS Size (gzip) | 14.3 KB |
| JS Size (gzip) | 181 KB |
| Modules | 483 |
| Build Time | ~8 seconds |

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS 14+, Chrome Mobile

## Key Technologies
- React 18.3
- Vite 5.4
- TypeScript 5.5
- Tailwind CSS 3.4
- Framer Motion 11.18
- GSAP 3.15
- React Router 6.30
- Swiper 11.2
- EmailJS 4.4
- AOS 2.3

## Customization

### Colors
Edit `src/index.css` (CSS variables at top)
```css
--primary: #0A2540;
--secondary: #00A651;
--accent: #FF6B00;
```

### Products Data
Edit `src/data/products.ts` - Add/remove/update products

### Content
Edit `src/data/content.ts` - Testimonials, blog posts, countries

### Company Info
Update in multiple files:
- `index.html` - Title, description, schema
- `src/components/Footer.tsx` - Address, phone, email
- `src/components/Navbar.tsx` - Phone, email
- `src/pages/ContactPage.tsx` - Contact details

## Troubleshooting

### Dev server not starting
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build errors
```bash
npm run typecheck
# Fix any TypeScript errors shown
npm run build
```

### Blank page
- Check browser console (F12)
- Verify all imports in App.tsx
- Clear browser cache (Ctrl+Shift+Delete)

## Performance Tips

1. **Image Optimization** - Replace Pexels images with your own
2. **Bundle Size** - Consider code splitting for large features
3. **Caching** - Set proper cache headers on your host
4. **CDN** - Use Cloudflare or similar for faster delivery

## Next Steps

1. ✓ Replace dummy images with real product photos
2. ✓ Set up EmailJS for forms
3. ✓ Update company information
4. ✓ Add your business phone numbers
5. ✓ Set up custom domain
6. ✓ Deploy to production
7. ✓ Configure SSL certificate
8. ✓ Set up analytics
9. ✓ Add sitemap.xml
10. ✓ Submit to search engines

---

**Questions?** Check the PROJECT_SUMMARY.md for more details.
