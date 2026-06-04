import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { FiArrowRight, FiClock, FiTag } from 'react-icons/fi';
import { blogPosts } from '../data/content';

interface BlogSectionProps {
  limit?: number;
}

export default function BlogSection({ limit = 3 }: BlogSectionProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className="blog-section py-5">
      <div className="container-fluid px-4 px-lg-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-eyebrow">Resources</span>
          <h2 className="section-heading">Export Insights & Market News</h2>
          <p className="section-subheading">
            Stay updated with rice and chilli market trends, export documentation guides, and shipping news.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={i * 100}
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

        {limit && blogPosts.length > limit && (
          <div className="text-center mt-5">
            <Link to="/blog" className="btn-hero-outline">
              View All Articles <FiArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
