import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPackage } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';
import { gsap } from 'gsap';

const floatingCards = [
  {
    icon: '🌾',
    title: 'Premium Basmati',
    sub: 'Grade A Export',
    color: '#00A651',
    delay: 0,
  },
  {
    icon: '🌶️',
    title: 'Teja Red Chilli',
    sub: 'ASTA 100-120',
    color: '#FF6B00',
    delay: 0.3,
  },
  {
    icon: '🌶️',
    title: 'Chilli Powder',
    sub: 'HACCP Certified',
    color: '#0A2540',
    delay: 0.6,
  },
];

const stats = [
  { value: '25+', label: 'Countries' },
  { value: '500+', label: 'Importers' },
  { value: '10K+', label: 'MT Shipped' },
  { value: '99%', label: 'On-Time' },
];

export default function Hero() {
  const counterRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const targets = [25, 500, 10000, 99];
    counterRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { textContent: 0 },
        {
          textContent: targets[i],
          duration: 2,
          delay: 0.5 + i * 0.15,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate() {
            const v = Math.round(parseFloat(el.textContent || '0'));
            if (i === 2) el.textContent = v >= 1000 ? `${Math.round(v / 1000)}K+` : `${v}+`;
            else if (i === 3) el.textContent = `${v}%`;
            else el.textContent = `${v}+`;
          },
        }
      );
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg-overlay" />

      {/* Background Image */}
      <div
        className="hero-bg-image"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />

      <div className="container-fluid px-4 px-lg-5 h-100">
        <div className="row h-100 align-items-center">
          {/* Left side */}
          <div className="col-lg-6">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="hero-badge">
                <FaLeaf size={12} />
                <span>India's #1 Trusted Agri Exporter</span>
              </div>

              <h1 className="hero-heading">
                Export Premium Rice &<br />
                <span className="hero-heading-accent">Red Chillies</span> Worldwide
              </h1>

              <p className="hero-subheading">
                Trusted by importers across <strong>25+ countries</strong>. APEDA Registered, FSSAI Certified with consistent Grade A quality and reliable on-time delivery.
              </p>

              <div className="hero-cta-group">
                <Link to="/products" className="btn-hero-primary">
                  Explore Products
                  <FiArrowRight size={18} />
                </Link>
                <Link to="/bulk-quote" className="btn-hero-outline">
                  <FiPackage size={18} />
                  Request Bulk Quote
                </Link>
              </div>

              {/* Stats */}
              <div className="hero-stats">
                {stats.map((s, i) => (
                  <div key={s.label} className="hero-stat">
                    <span className="hero-stat-value" ref={(el) => { if (el) counterRefs.current[i] = el; }}>
                      {s.value}
                    </span>
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side — 3D floating cards */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="hero-showcase">
              {/* Main product image */}
              <motion.div
                className="hero-product-main"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="https://images.pexels.com/photos/7421215/pexels-photo-7421215.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Premium Basmati Rice"
                  loading="eager"
                />
                <div className="hero-product-overlay" />
              </motion.div>

              {/* Floating cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className={`hero-floating-card hero-card-${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -12, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.6 + card.delay },
                    y: { duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: card.delay },
                  }}
                >
                  <span className="card-icon">{card.icon}</span>
                  <div>
                    <div className="card-title">{card.title}</div>
                    <div className="card-sub">{card.sub}</div>
                  </div>
                  <div className="card-dot" style={{ background: card.color }} />
                </motion.div>
              ))}

              {/* Globe decoration */}
              <motion.div
                className="hero-globe-deco"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="38" stroke="#00A651" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
                  <circle cx="40" cy="40" r="25" stroke="#FF6B00" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  <circle cx="40" cy="40" r="12" stroke="#0A2540" strokeWidth="1" opacity="0.3" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="hero-scroll-line" />
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}
