import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import companyLogo from '../images/logo.jpg';

const productLinks = [
  { label: 'Premium Basmati Rice', slug: 'basmati-rice' },
  { label: 'Non-Basmati Rice', slug: 'ir-64-parboiled-rice' },
  { label: 'Dried Red Chillies', slug: 'dry-red-chilli' },
  { label: 'Red Chilli Powder', slug: 'red-chilli-powder' },
  { label: 'Chilli Flakes', slug: 'chilli-flakes' },
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Export Countries', href: '/#countries' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Bulk Quote', to: '/bulk-quote' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Blog', to: '/blog' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setSubscribeMessage('Please enter a valid business email.');
      return;
    }

    setSubmitting(true);
    setSubscribeMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/akshay_aa@outlook.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: trimmed,
          message: 'I would like to subscribe to receive export updates, product availability updates, and company news from Akshyaa Global Exports.',
          _subject: 'New Newsletter Subscription Request',
          _replyto: trimmed,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) throw new Error('Subscription request failed');

      setSubscribeMessage('Thank you for subscribing. We will send export updates to your email soon.');
      setEmail('');
    } catch {
      setSubscribeMessage('Subscription failed. Please email us directly at akshay_aa@outlook.com');
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row g-5">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <img src={companyLogo} alt="Akshyaa Global Exports" width="44" height="44" style={{ borderRadius: 10, objectFit: 'cover' }} />
                  <div>
                    <div className="footer-logo-name">Akshyaa Global Exports</div>
                    <div className="footer-logo-sub">India's Trusted Export Partner</div>
                  </div>
                </div>
                <p className="footer-desc">
                  Akshyaa Global Exports Private Limited is an Indian export company specializing in premium-quality Rice, Red Chillies. We supply agricultural products to international buyers while maintaining high standards of quality, hygiene, packaging and timely delivery.
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
                  <li key={l.label}>
                    {l.href ? (
                      <a href={l.href}>
                        <FiArrowRight size={13} />
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to!}>
                        <FiArrowRight size={13} />
                        {l.label}
                      </Link>
                    )}
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
                  <span>United Kingdom</span>
                </div>
                <div className="footer-contact-item">
                  <FiPhone size={16} />
                  <a href="tel:+447763076666">+44 7763076666</a>
                </div>
                <div className="footer-contact-item">
                  <FiMail size={16} />
                  <a href="mailto:akshay_aa@outlook.com">akshay_aa@outlook.com</a>
                </div>
                <div className="footer-contact-item">
                  <FaWhatsapp size={16} />
                  <a
                    href="https://wa.me/447763076666?text=Hello%20Akshyaa%20Global%20Exports,%20I%20am%20interested%20in%20your%20export%20products.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noreferrer"
                  >
                    Whatsapp Us
                  </a>
                  </div>
              </div>
              <div className="footer-newsletter">
                <h6>Get Export Updates</h6>
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setSubscribeMessage(''); }}
                    placeholder="Your business email"
                    required
                  />
                  <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Subscribe'}</button>
                </form>
                {subscribeMessage && <p className="newsletter-message">{subscribeMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-fluid px-4 px-lg-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="mb-0">
              © {new Date().getFullYear()} Akshyaa Global Exports. Connecting Markets Worldwide.
            </p>
            <div className="footer-cert-badges">
              <span>APEDA Registered</span>
              <span>FSSAI Certified</span>
              <span>ISO 9001:2025</span>
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
