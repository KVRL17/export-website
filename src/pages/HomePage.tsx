import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProductsMarketplace from '../components/ProductsMarketplace';
import WhyChooseUs from '../components/WhyChooseUs';
import ExportCountries from '../components/ExportCountries';
import Certifications from '../components/Certifications';
import ExportProcess from '../components/ExportProcess';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600, offset: 60 });
  }, []);

  return (
    <main>
      <Hero />
      <TrustBar />
      <ProductsMarketplace limit={6} showHeader={true} />
      <WhyChooseUs />
      <ExportProcess />
      <ExportCountries />
      <Certifications />
      <Testimonials />
      <BlogSection limit={3} />
    </main>
  );
}
