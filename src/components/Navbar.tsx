import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
import { useInquiryCart } from '../context/InquiryCartContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/bulk-quote', label: 'Bulk Quote' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, toggleCart } = useInquiryCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center py-1">
            <div className="d-flex gap-4">
              <a href="tel:+919999999999" className="topbar-link">
                <FiPhone size={13} />
                <span>+91 99999 99999</span>
              </a>
              <a href="mailto:exports@akshyaaglobal.com" className="topbar-link">
                <FiMail size={13} />
                <span>exports@akshyaaglobal.com</span>
              </a>
            </div>
            <div className="d-none d-md-flex gap-3 align-items-center">
              <span className="topbar-badge">APEDA Registered</span>
              <span className="topbar-badge">ISO 9001:2015</span>
              <span className="topbar-badge">FSSAI Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`main-nav ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center py-3">
            {/* Logo */}
            <Link to="/" className="nav-logo">
              <div className="nav-logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
                  <circle cx="20" cy="20" r="20" fill="#0A2540" />
                  <path d="M20 8 L28 16 L28 28 L12 28 L12 16 Z" fill="#00A651" opacity="0.9"/>
                  <path d="M16 14 Q20 10 24 14 Q28 18 24 22 Q20 26 16 22 Q12 18 16 14Z" fill="#FF6B00" opacity="0.8"/>
                  <circle cx="20" cy="18" r="3" fill="white"/>
                </svg>
              </div>
              <div className="nav-logo-text">
                <span className="nav-logo-name">Akshyaa</span>
                <span className="nav-logo-sub">Global Exports</span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="d-none d-lg-flex align-items-center gap-1">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA + Cart */}
            <div className="d-flex align-items-center gap-3">
              <button className="cart-btn" onClick={toggleCart} aria-label="Inquiry Cart">
                <FiShoppingCart size={18} />
                {count > 0 && <span className="cart-badge">{count}</span>}
              </button>
              <Link to="/bulk-quote" className="btn btn-primary-custom d-none d-md-inline-flex">
                Request Quote
              </Link>
              <button className="mobile-menu-btn d-lg-none" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container-fluid px-4 py-3">
                {navLinks.map((link) => (
                  <NavLink key={link.to} to={link.to} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} end={link.to === '/'}>
                    {link.label}
                  </NavLink>
                ))}
                <Link to="/bulk-quote" className="btn btn-primary-custom w-100 mt-3">
                  Request Bulk Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
