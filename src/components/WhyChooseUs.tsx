import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import {
  FiAward, FiGlobe, FiTrendingDown, FiPackage, FiClock, FiHeadphones
} from 'react-icons/fi';

const features = [
  {
    icon: FiAward,
    title: 'Premium Quality',
    description: 'Every batch undergoes rigorous quality testing. Grade A certified with full COA documentation.',
    color: '#00A651',
    large: true,
    image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: FiGlobe,
    title: 'Global Logistics',
    description: 'Experienced in sea freight, air cargo, and multimodal transport to 25+ countries.',
    color: '#0A2540',
    large: false,
  },
  {
    icon: FiTrendingDown,
    title: 'Competitive Pricing',
    description: 'Direct farm-to-export model eliminates middlemen, giving you the best FOB/CIF rates.',
    color: '#FF6B00',
    large: false,
  },
  {
    icon: FiPackage,
    title: 'Secure Packaging',
    description: 'Moisture-resistant bags, vacuum sealing, and industry-standard packaging for safe transit.',
    color: '#00A651',
    large: false,
  },
  {
    icon: FiClock,
    title: 'Fast Delivery',
    description: 'Typical lead time: 10-15 days from order confirmation to container loading.',
    color: '#0A2540',
    large: false,
  },
  {
    icon: FiHeadphones,
    title: '24x7 Support',
    description: 'Dedicated account managers available round-the-clock for your inquiries and updates.',
    color: '#FF6B00',
    large: true,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ once: true, offset: 80, duration: 600 });
  }, []);

  return (
    <section className="why-section py-5" id="why">
      <div className="container-fluid px-4 px-lg-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-eyebrow">Why Partner With Us</span>
          <h2 className="section-heading">The Akshyaa Advantage</h2>
          <p className="section-subheading">
            From farm to port, we manage every step with precision, transparency, and commitment to quality.
          </p>
        </div>

        <div className="bento-grid">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                className={`bento-card ${f.large ? 'bento-card-large' : ''}`}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                {f.image && (
                  <div className="bento-bg">
                    <img src={f.image} alt={f.title} loading="lazy" />
                    <div className="bento-bg-overlay" />
                  </div>
                )}
                <div className="bento-content">
                  <div className="bento-icon" style={{ background: `${f.color}20`, color: f.color }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="bento-title">{f.title}</h3>
                  <p className="bento-desc">{f.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
