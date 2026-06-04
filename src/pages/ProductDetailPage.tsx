import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiCheck, FiPackage, FiGlobe, FiAward, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { getProductBySlug } from '../data/products';
import { useInquiryCart } from '../context/InquiryCartContext';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addItem, items } = useInquiryCart();
  const [activeImg, setActiveImg] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const isAdded = product ? items.some((i) => i.product.id === product.id) : false;

  if (!product) {
    return (
      <main className="page-main d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <h2>Product Not Found</h2>
          <Link to="/products" className="btn-hero-primary mt-3">Back to Products</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-main">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid px-4 px-lg-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
              <li className="breadcrumb-item active">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-5">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row g-5">
            {/* Gallery */}
            <div className="col-lg-6">
              <motion.div
                className="product-detail-main-img"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <img
                  src={product.gallery[activeImg] || product.image}
                  alt={product.name}
                  className="w-100 rounded-3"
                  style={{ height: 400, objectFit: 'cover' }}
                />
              </motion.div>
              <div className="product-detail-thumbs mt-3">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`thumb-btn ${activeImg === i ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="detail-tag">{product.category.toUpperCase()}</span>
                  <span className="detail-tag detail-tag-grade">{product.grade}</span>
                </div>

                <h1 className="detail-title">{product.name}</h1>
                <p className="detail-desc">{product.longDescription}</p>

                <div className="detail-price">{product.priceRange} <span className="detail-price-note">(Indicative FOB Price)</span></div>

                <div className="detail-meta-grid">
                  <div className="detail-meta-item">
                    <FiPackage size={16} />
                    <div>
                      <div className="meta-label">MOQ</div>
                      <div className="meta-val">{product.moq}</div>
                    </div>
                  </div>
                  <div className="detail-meta-item">
                    <FiGlobe size={16} />
                    <div>
                      <div className="meta-label">Container</div>
                      <div className="meta-val">{product.containerCapacity}</div>
                    </div>
                  </div>
                </div>

                <div className="detail-packaging">
                  <h6>Packaging Options</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {product.packaging.map((p) => (
                      <span key={p} className="pack-tag">{p}</span>
                    ))}
                  </div>
                </div>
                <br />

                <div className="detail-countries mb-4">
                  <h6>Countries Exported To</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {product.countries.map((c) => (
                      <span key={c} className="country-chip">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="detail-certs mb-4">
                  <h6><FiAward size={14} /> Certifications</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {product.certifications.map((c) => (
                      <span key={c} className="cert-chip">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="detail-actions">
                  <button
                    className={`btn-detail-inquiry ${isAdded ? 'added' : ''}`}
                    onClick={() => addItem(product)}
                    disabled={isAdded}
                  >
                    {isAdded ? (
                      <><FiCheck size={16} /> Added to Inquiry</>
                    ) : (
                      <><FiPlus size={16} /> Add to Inquiry</>
                    )}
                  </button>
                  <Link to="/bulk-quote" className="btn-detail-quote">
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-5 bg-light">
        <div className="container-fluid px-4 px-lg-5">
          <h2 className="section-heading-sm mb-4">Product Specifications</h2>
          <div className="specs-table">
            {Object.entries(product.specifications).map(([key, val]) => (
              <div key={key} className="spec-row">
                <div className="spec-key">{key}</div>
                <div className="spec-val">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5">
        <div className="container-fluid px-4 px-lg-5">
          <h2 className="section-heading-sm mb-4">Frequently Asked Questions</h2>
          <div className="faq-list">
            {product.faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === i ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                </button>
                {expandedFaq === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Inquiry Button on mobile */}
      <div className="sticky-inquiry-bar d-lg-none">
        <button
          className={`btn-detail-inquiry w-100 ${isAdded ? 'added' : ''}`}
          onClick={() => addItem(product)}
          disabled={isAdded}
        >
          {isAdded ? <><FiCheck size={16} /> Added to Inquiry</> : <><FiPlus size={16} /> Add to Inquiry</>}
        </button>
      </div>
    </main>
  );
}
