import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiTrash2, FiArrowRight, FiPackage } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useInquiryCart } from '../context/InquiryCartContext';

export default function InquiryCartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateItem, clearCart } = useInquiryCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="inquiry-cart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="cart-header">
              <div>
                <h3 className="cart-title">
                  <FiPackage size={20} />
                  Inquiry Cart
                </h3>
                <p className="cart-subtitle">{items.length} product{items.length !== 1 ? 's' : ''} added</p>
              </div>
              <button className="cart-close-btn" onClick={closeCart}>
                <FiX size={20} />
              </button>
            </div>

            <div className="cart-body">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <FiPackage size={48} opacity={0.3} />
                  <p>No products added yet.</p>
                  <p className="small">Browse products and click "Add to Inquiry".</p>
                  <Link to="/products" className="btn-primary-custom" onClick={closeCart}>
                    Browse Products
                  </Link>
                </div>
              ) : (
                <div className="cart-items">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      className="cart-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      layout
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="cart-item-img"
                        loading="lazy"
                      />
                      <div className="cart-item-info">
                        <div className="cart-item-name">{item.product.name}</div>
                        <div className="cart-item-grade">{item.product.grade}</div>
                        <input
                          type="text"
                          className="cart-item-qty"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.product.id, { quantity: e.target.value })}
                          placeholder="Quantity (e.g. 25 MT)"
                        />
                      </div>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="cart-footer">
                <Link
                  to="/cart-quote"
                  className="btn-cart-quote"
                  onClick={closeCart}
                >
                  Request Cart Quote
                  <FiArrowRight size={16} />
                </Link>
                <button className="btn-cart-clear" onClick={clearCart}>
                  Clear All
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}