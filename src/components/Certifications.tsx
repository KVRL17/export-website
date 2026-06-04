import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { FiAward, FiShield, FiCheckCircle, FiFileText, FiStar, FiActivity } from 'react-icons/fi';
import { certifications } from '../data/content';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  award: FiAward,
  shield: FiShield,
  'check-circle': FiCheckCircle,
  'file-text': FiFileText,
  star: FiStar,
  activity: FiActivity,
};

export default function Certifications() {
  const [selected, setSelected] = useState<typeof certifications[0] | null>(null);

  return (
    <section className="certs-section py-5" id="certifications">
      <div className="container-fluid px-4 px-lg-5">
        <div className="text-center mb-5">
          <span className="section-eyebrow">Our Credentials</span>
          <h2 className="section-heading">Certifications & Compliance</h2>
          <p className="section-subheading">
            Click any certification card to learn more about our compliance credentials.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || FiAward;
            return (
              <div key={cert.id} className="col-6 col-md-4 col-lg-2">
                <motion.div
                  className="cert-card"
                  whileHover={{ y: -8, scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelected(cert)}
                  style={{ cursor: 'pointer', '--cert-color': cert.color } as React.CSSProperties}
                >
                  <div className="cert-icon" style={{ background: `${cert.color}15`, color: cert.color }}>
                    <Icon size={28} />
                  </div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-hover-text">Click to learn more</div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="cert-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-modal-close" onClick={() => setSelected(null)}>
                <FiX size={20} />
              </button>
              {(() => {
                const Icon = iconMap[selected.icon] || FiAward;
                return (
                  <>
                    <div className="cert-modal-icon" style={{ background: `${selected.color}15`, color: selected.color }}>
                      <Icon size={40} />
                    </div>
                    <h3 className="cert-modal-title">{selected.name}</h3>
                    <p className="cert-modal-fullname">{selected.fullName}</p>
                    <p className="cert-modal-desc">{selected.description}</p>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
