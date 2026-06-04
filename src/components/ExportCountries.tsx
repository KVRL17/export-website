import { useState } from 'react';
import { motion } from 'framer-motion';
import { exportCountries } from '../data/content';

export default function ExportCountries() {
  const [hovered, setHovered] = useState<string | null>(null);
  const selected = exportCountries.find((c) => c.name === hovered);

  return (
    <section className="countries-section py-5" id="countries">
      <div className="container-fluid px-4 px-lg-5">
        <div className="text-center mb-5">
          <span className="section-eyebrow">Global Reach</span>
          <h2 className="section-heading">Countries We Export To</h2>
          <p className="section-subheading">
            From the Middle East to Southeast Asia, we deliver premium Indian agricultural products worldwide.
          </p>
        </div>

        <div className="world-map-container">
          {/* World Map SVG */}
          <div className="world-map-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png"
              alt="World Map"
              className="world-map-img"
            />
            {/* Animated pins */}
            {exportCountries.map((country) => (
              <motion.div
                key={country.code}
                className="map-pin"
                style={{ left: `${country.x}%`, top: `${country.y}%` }}
                onMouseEnter={() => setHovered(country.name)}
                onMouseLeave={() => setHovered(null)}
                animate={{ scale: hovered === country.name ? 1.5 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`pin-dot ${hovered === country.name ? 'pin-active' : ''}`} />
                <motion.div
                  className="pin-ring"
                  animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="pin-label">{country.name}</div>
              </motion.div>
            ))}
          </div>

          {/* Tooltip */}
          {selected && (
            <motion.div
              className="map-tooltip"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <strong>{selected.name}</strong>
              <div className="tooltip-products">
                {selected.products.map((p) => (
                  <span key={p} className="tooltip-product-tag">{p}</span>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Country grid */}
        <div className="row g-3 mt-4">
          {exportCountries.map((country, i) => (
            <div key={country.code} className="col-6 col-md-4 col-lg-2">
              <motion.div
                className="country-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="country-flag">
                  {country.code === 'US' && '🇺🇸'}
                  {country.code === 'GB' && '🇬🇧'}
                  {country.code === 'AE' && '🇦🇪'}
                  {country.code === 'SA' && '🇸🇦'}
                  {country.code === 'QA' && '🇶🇦'}
                  {country.code === 'OM' && '🇴🇲'}
                  {country.code === 'SG' && '🇸🇬'}
                  {country.code === 'MY' && '🇲🇾'}
                  {country.code === 'AU' && '🇦🇺'}
                  {country.code === 'CA' && '🇨🇦'}
                </div>
                <div className="country-name">{country.name}</div>
                <div className="country-products">{country.products.length} Products</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
