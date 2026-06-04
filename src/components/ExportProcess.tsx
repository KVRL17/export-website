import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';

const steps = [
  {
    number: '01',
    title: 'Product Selection',
    description: 'Browse our catalog and select products with required specifications, grade, and packaging.',
    icon: '🔍',
    color: '#3b8cdd',
  },
  {
    number: '02',
    title: 'Quotation',
    description: 'Receive a detailed pro-forma invoice with FOB/CIF pricing, packaging, and lead time.',
    icon: '📋',
    color: '#00A651',
  },
  {
    number: '03',
    title: 'Order Confirmation',
    description: 'Sign the purchase agreement and provide 30% advance payment to confirm your order.',
    icon: '✅',
    color: '#FF6B00',
  },
  {
    number: '04',
    title: 'Packaging',
    description: 'Products are cleaned, graded, packed in your specified bags, and quality-checked.',
    icon: '📦',
    color: '#3b8cdd',
  },
  {
    number: '05',
    title: 'Shipping',
    description: 'Container loading, phytosanitary inspection, customs clearance, and BL issuance.',
    icon: '🚢',
    color: '#00A651',
  },
  {
    number: '06',
    title: 'Delivery',
    description: 'Real-time tracking shared with buyer. Balance payment released and goods delivered.',
    icon: '🏭',
    color: '#FF6B00',
  },
];

export default function ExportProcess() {
  useEffect(() => {
    AOS.init({ once: true, offset: 80 });
  }, []);

  return (
    <section className="process-section py-5" id="process">
      <div className="process-bg" />
      <div className="container-fluid px-4 px-lg-5 position-relative">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-eyebrow section-eyebrow-light">How It Works</span>
          <h2 className="section-heading text-white">Our Export Process</h2>
          <p className="section-subheading text-white opacity-75">
            A seamless, transparent 6-step process from your inquiry to your warehouse.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={`process-step ${i % 2 === 0 ? 'step-left' : 'step-right'}`}
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={i * 100}
            >
              <div className="process-connector" />
              <div className="process-node" style={{ borderColor: step.color }}>
                <span className="process-icon">{step.icon}</span>
              </div>
              <div className="process-card" style={{ borderTopColor: step.color }}>
                <div className="process-number" style={{ color: step.color }}>{step.number}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
