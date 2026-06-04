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
        href="https://wa.me/447763076666?text=Hello%20Akshyaa%20Global%20Exports,%20I%20am%20interested%20in%20your%20products.%20Please%20share%20more%20details."
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
        href="tel:+447763076666"
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
