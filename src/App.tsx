import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { InquiryCartProvider } from './context/InquiryCartContext';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InquiryCartSidebar from './components/InquiryCartSidebar';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BulkQuotePage from './pages/BulkQuotePage';
import CartQuotePage from './pages/CartQuotePage';
import ContactPage from './pages/ContactPage';
import { BlogListPage, BlogPostPage } from './pages/BlogPage';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/bulk-quote" element={<BulkQuotePage />} />
          <Route path="/cart-quote" element={<CartQuotePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </PageTransition>
      <Footer />
      <InquiryCartSidebar />
      <FloatingActions />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <InquiryCartProvider>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        {!loading && <AppContent />}
      </InquiryCartProvider>
    </BrowserRouter>
  );
}
