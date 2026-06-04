import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter, FiEye, FiPlus, FiArrowRight } from 'react-icons/fi';
import { products } from '../data/products';
import { useInquiryCart } from '../context/InquiryCartContext';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'rice', label: 'Rice' },
  { value: 'chillies', label: 'Chillies' },
  { value: 'powders', label: 'Powders' },
  { value: 'flakes', label: 'Flakes' },
];

const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'newest', label: 'Newest' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'moq-asc', label: 'MOQ: Low to High' },
];

interface ProductsMarketplaceProps {
  limit?: number;
  showHeader?: boolean;
}

export default function ProductsMarketplace({ limit, showHeader = true }: ProductsMarketplaceProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const { addItem } = useInquiryCart();

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.grade.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'newest') result = [...result].filter((p) => p.newest).concat(result.filter((p) => !p.newest));
    else if (sortBy === 'popular') result = [...result].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));

    return limit ? result.slice(0, limit) : result;
  }, [activeCategory, searchQuery, sortBy, limit]);

  return (
    <section className="marketplace-section py-5" id="products">
      <div className="container-fluid px-4 px-lg-5">
        {showHeader && (
          <div className="text-center mb-5">
            <span className="section-eyebrow">Product Catalog</span>
            <h2 className="section-heading">Export Product Marketplace</h2>
            <p className="section-subheading">
              Browse our full range of export-grade rice and chilli products. All items available for bulk export.
            </p>
          </div>
        )}

        {/* Filters Row */}
        <div className="marketplace-filters">
          {/* Category tabs */}
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`cat-tab ${activeCategory === cat.value ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search + Sort */}
          <div className="marketplace-controls">
            <div className="search-input-wrap">
              <FiSearch size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="sort-select-wrap">
              <FiFilter size={14} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          <div className="products-grid">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                className="product-card"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                whileHover={{ y: -6 }}
              >
                {product.popular && <div className="product-badge badge-popular">Popular</div>}
                {product.newest && <div className="product-badge badge-new">New</div>}

                <div className="product-img-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                    loading="lazy"
                  />
                  <div className="product-img-overlay">
                    <Link to={`/product/${product.slug}`} className="product-overlay-btn">
                      <FiEye size={16} /> Quick View
                    </Link>
                  </div>
                </div>

                <div className="product-info">
                  <div className="product-cat-tag">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>

                  <div className="product-meta">
                    <div className="product-meta-item">
                      <span className="meta-label">Grade</span>
                      <span className="meta-value">{product.grade}</span>
                    </div>
                    <div className="product-meta-item">
                      <span className="meta-label">MOQ</span>
                      <span className="meta-value">{product.moq}</span>
                    </div>
                    <div className="product-meta-item">
                      <span className="meta-label">Countries</span>
                      <span className="meta-value">{product.countries.length}+</span>
                    </div>
                  </div>

                  <div className="product-countries">
                    {product.countries.slice(0, 4).map((c) => (
                      <span key={c} className="product-country-tag">{c}</span>
                    ))}
                    {product.countries.length > 4 && (
                      <span className="product-country-tag">+{product.countries.length - 4}</span>
                    )}
                  </div>

                  <div className="product-price">{product.priceRange}</div>

                  <div className="product-actions">
                    <Link to={`/product/${product.slug}`} className="btn-product-view">
                      <FiArrowRight size={14} /> View Details
                    </Link>
                    <button
                      className="btn-product-inquiry"
                      onClick={() => addItem(product)}
                    >
                      <FiPlus size={14} /> Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="no-results">
            <p>No products found. Try adjusting your filters.</p>
          </div>
        )}

        {limit && products.length > limit && (
          <div className="text-center mt-5">
            <Link to="/products" className="btn-hero-outline">
              View All Products <FiArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
