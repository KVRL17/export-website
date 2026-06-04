import { motion } from 'framer-motion';
import { exportCountries } from '../data/content';

export default function ExportCountries() {
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

        {/* Country grid only */}
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
                <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
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
