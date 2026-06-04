import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import { FiStar } from 'react-icons/fi';
import { testimonials } from '../data/content';

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="testimonials-section py-5">
      <div className="container-fluid px-4 px-lg-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-eyebrow">Client Reviews</span>
          <h2 className="section-heading">Trusted by Importers Worldwide</h2>
          <p className="section-subheading">
            What our international partners say about working with Akshyaa Global Exports.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div className="testimonial-card" whileHover={{ y: -5 }}>
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FiStar key={i} size={14} fill="#FF6B00" color="#FF6B00" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-footer">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="testimonial-avatar"
                    loading="lazy"
                  />
                  <div>
                    <div className="testimonial-name">
                      {t.flag} {t.name}
                    </div>
                    <div className="testimonial-company">{t.company}</div>
                    <div className="testimonial-product">{t.product}</div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
