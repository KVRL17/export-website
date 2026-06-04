import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiTag, FiArrowRight } from 'react-icons/fi';
import { blogPosts } from '../data/content';
import basmatiRice1 from '../images/basmatirice1.jpg';
import rc33 from '../images/rc33.jpg';
function BlogListPage() {
  return (
    <main className="page-main">
      <div className="page-hero-banner page-hero-sm">
        <div className="page-hero-overlay" />
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: `url(${basmatiRice1})`,
          }}
        />
        <div className="container-fluid px-4 px-lg-5 position-relative h-100 d-flex align-items-center">
          <div>
            <span className="section-eyebrow section-eyebrow-light">Insights</span>
            <h1 className="page-banner-title">Export Blog</h1>
            <p className="page-banner-subtitle">Market intelligence, export guides, and industry updates for importers.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4 px-lg-5 py-5">
        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="blog-img-wrap">
                <img src={post.image} alt={post.title} className="blog-img" loading="lazy" />
                <div className="blog-category-tag">
                  <FiTag size={11} />
                  {post.category}
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><FiClock size={12} /> {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="blog-read-more">
                  Read Article <FiArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="page-main d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <h2>Article Not Found</h2>
          <Link to="/blog" className="btn-hero-primary mt-3">Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-main">
      <div className="page-hero-banner page-hero-sm">
        <div className="page-hero-overlay" />
        <div className="page-hero-bg" style={{ backgroundImage: `url('${post.image}')` }} />
        <div className="container-fluid px-4 px-lg-5 position-relative h-100 d-flex align-items-end pb-5">
          <div>
            <div className="d-flex gap-3 mb-3">
              <span className="section-eyebrow section-eyebrow-light"><FiTag size={11} /> {post.category}</span>
              <span className="section-eyebrow section-eyebrow-light"><FiClock size={11} /> {post.readTime}</span>
            </div>
            <h1 className="page-banner-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>{post.title}</h1>
            <p className="page-banner-subtitle">{post.date} · By {post.author}</p>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4 px-lg-5 py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <Link to="/blog" className="blog-back-link">
              <FiArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="blog-article-body mt-4">
              <p className="lead">{post.excerpt}</p>
              <p>
                India is one of the world's largest producers and exporters of rice and spices, with annual rice exports exceeding 22 million tonnes and chilli exports surpassing 400,000 tonnes. The export ecosystem is well-regulated, with APEDA overseeing quality and compliance.
              </p>
              <h3>Key Market Drivers</h3>
              <p>
                Growing diaspora populations in North America, Europe, and the Middle East are driving demand for authentic Indian rice varieties. The UAE and Saudi Arabia together account for over 30% of India's basmati exports, driven by both local consumption and re-export to neighboring markets.
              </p>
              <p>
                For chillies, the industrial demand from oleoresin manufacturers, hot sauce producers, and food processing companies is the primary growth driver. India's unique chilli varieties — particularly Teja and Byadgi — command premium prices due to their high pungency and color values.
              </p>
              <h3>Export Compliance & Documentation</h3>
              <p>
                Successful export from India requires APEDA registration, phytosanitary certificates, COA from accredited labs, and increasingly, HALAL or organic certifications for specific markets. Akshyaa Global Exports maintains all required certifications for seamless exports.
              </p>
              <div className="blog-cta-box">
                <h4>Ready to Import?</h4>
                <p>Contact our export team for competitive pricing and product specifications.</p>
                <Link to="/bulk-quote" className="btn-hero-primary">Request Bulk Quote</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-5">
          <h3 className="section-heading-sm mb-4">Related Articles</h3>
          <div className="blog-grid">
            {blogPosts.filter((p) => p.slug !== slug).slice(0, 3).map((p, i) => (
              <motion.div key={p.id} className="blog-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}>
                <div className="blog-img-wrap">
                  <img src={p.image} alt={p.title} className="blog-img" loading="lazy" />
                  <div className="blog-category-tag"><FiTag size={11} />{p.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta"><span><FiClock size={12} /> {p.readTime}</span><span>{p.date}</span></div>
                  <h3 className="blog-title">{p.title}</h3>
                  <Link to={`/blog/${p.slug}`} className="blog-read-more">Read Article <FiArrowRight size={14} /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export { BlogListPage, BlogPostPage };
