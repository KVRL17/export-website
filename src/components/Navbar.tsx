import { useState, useEffect } from 'react';
import logo1 from '../images/logo1.jpg';
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
                <span>+44 7763076666</span>
              </a>
              <a href="mailto:info@akshyaaglobalexport.com" className="topbar-link">
                <FiMail size={13} />
                <span>info@akshyaaglobalexport.com</span>
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
                <img src={logo1} alt="Akshyaa Global Exports logo" width={38} height={38} className="rounded" />
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
