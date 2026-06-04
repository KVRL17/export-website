import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiShoppingCart } from 'react-icons/fi';
import { useInquiryCart } from '../context/InquiryCartContext';

export default function FloatingActions() {
  const { count, toggleCart } = useInquiryCart();

  return (
    <div className="floating-actions">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919999999999?text=Hello%2C%20I%27m%20interested%20in%20your%20export%20products."
        target="_blank"
        rel="noreferrer"
        className="fab fab-whatsapp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="WhatsApp Us"
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Call */}
      <motion.a
        href="tel:+919999999999"
        className="fab fab-call"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Call Us"
      >
        <FiPhone size={20} />
      </motion.a>

      {/* Inquiry Cart */}
      <motion.button
        className="fab fab-cart"
        onClick={toggleCart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Inquiry Cart"
      >
        <FiShoppingCart size={20} />
        {count > 0 && <span className="fab-badge">{count}</span>}
      </motion.button>
    </div>
  );
}
