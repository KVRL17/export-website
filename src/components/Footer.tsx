import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const productLinks = [
  { label: 'Premium Basmati Rice', slug: 'basmati-rice' },
  { label: 'IR 64 Parboiled Rice', slug: 'ir-64-parboiled-rice' },
  { label: 'Sona Masoori Rice', slug: 'sona-masoori-rice' },
  { label: 'Dry Red Chilli (Teja S17)', slug: 'dry-red-chilli' },
  { label: 'Red Chilli Powder', slug: 'red-chilli-powder' },
  { label: 'Chilli Flakes', slug: 'chilli-flakes' },
];

const quickLinks = [
  { label: 'About Us', to: '/#about' },
  { label: 'Products', to: '/products' },
  { label: 'Export Countries', to: '/#countries' },
  { label: 'Certifications', to: '/#certifications' },
  { label: 'Bulk Quote', to: '/bulk-quote' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Blog', to: '/blog' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row g-5">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
                    <circle cx="20" cy="20" r="20" fill="#00A651" />
                    <path d="M20 8 L28 16 L28 28 L12 28 L12 16 Z" fill="white" opacity="0.9"/>
                    <path d="M16 14 Q20 10 24 14 Q28 18 24 22 Q20 26 16 22 Q12 18 16 14Z" fill="#FF6B00" opacity="0.9"/>
                    <circle cx="20" cy="18" r="3" fill="white"/>
                  </svg>
                  <div>
                    <div className="footer-logo-name">Akshyaa Global Exports</div>
                    <div className="footer-logo-sub">India's Trusted Export Partner</div>
                  </div>
                </div>
                <p className="footer-desc">
                  Premium quality rice and red chilli exporter from India. APEDA Registered, FSSAI & ISO Certified. Serving importers across 25+ countries with reliable supply chains since 2015.
                </p>
                <div className="footer-socials">
                  <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                  <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                  <a href="#" aria-label="Facebook"><FaFacebook /></a>
                  <a href="#" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="col-lg-2 col-md-6">
              <h5 className="footer-heading">Our Products</h5>
              <ul className="footer-links">
                {productLinks.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/product/${p.slug}`}>
                      <FiArrowRight size={13} />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h5 className="footer-heading">Quick Links</h5>
              <ul className="footer-links">
                {quickLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>
                      <FiArrowRight size={13} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div className="col-lg-4 col-md-6">
              <h5 className="footer-heading">Get In Touch</h5>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <FiMapPin size={16} />
                  <span>123 Export Hub, Guntur, Andhra Pradesh - 522001, India</span>
                </div>
                <div className="footer-contact-item">
                  <FiPhone size={16} />
                  <a href="tel:+919999999999">+91 99999 99999</a>
                </div>
                <div className="footer-contact-item">
                  <FiMail size={16} />
                  <a href="mailto:exports@akshyaaglobal.com">exports@akshyaaglobal.com</a>
                </div>
                <div className="footer-contact-item">
                  <FaWhatsapp size={16} />
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">WhatsApp Us</a>
                </div>
              </div>
              <div className="footer-newsletter">
                <h6>Get Export Updates</h6>
                <div className="newsletter-form">
                  <input type="email" placeholder="Your business email" />
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-fluid px-4 px-lg-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="mb-0">© 2024 Akshyaa Global Exports. All rights reserved.</p>
            <div className="footer-cert-badges">
              <span>APEDA Registered</span>
              <span>FSSAI Certified</span>
              <span>ISO 9001:2015</span>
              <span>HALAL Certified</span>
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Trade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
