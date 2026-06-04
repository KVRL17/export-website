import flagUs from '../images/flag-us.svg';
import flagGb from '../images/flag-gb.svg';
import flagAe from '../images/flag-ae.svg';
import flagSa from '../images/flag-sa.svg';
import flagQa from '../images/flag-qa.svg';
import flagOm from '../images/flag-om.svg';
import flagSg from '../images/flag-sg.svg';
import flagMy from '../images/flag-my.svg';
import flagAu from '../images/flag-au.svg';
import flagCa from '../images/flag-ca.svg';
import worldMap from '../images/worldmapgoods.jpg';
import basmatirice from '../images/basmatirice3.jpg';
import rc33 from '../images/rc32.jpg';

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  country: string;
  flag: string;
  rating: number;
  text: string;
  avatar: string;
  product: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Al-Rashid',
    company: 'Gulf Food Trading LLC',
    country: 'UAE',
    flag: '🇦🇪',
    rating: 5,
    text: 'We have been sourcing Basmati Rice from Akshyaa Global Exports for 3 years. The quality is consistently excellent, documentation is always on time, and pricing is very competitive. Highly recommended partner for Gulf importers.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    product: 'Premium Basmati Rice',
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    company: 'Spice World Imports',
    country: 'UK',
    flag: '🇬🇧',
    rating: 5,
    text: 'Exceptional quality red chilli powder and flakes. ASTA color values are always as specified, and the HACCP certification gives us confidence for our food service clients. Fast turnaround and responsive team.',
    avatar: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=150',
    product: 'Red Chilli Powder',
  },
  {
    id: '3',
    name: 'Rajesh Kumar',
    company: 'Malaysian Grocery Chain',
    country: 'Malaysia',
    flag: '🇲🇾',
    rating: 5,
    text: 'Sona Masoori Rice from Akshyaa is exactly what our South Indian community customers demand. Clean, well-packaged, and arrives in perfect condition. Their private labeling service is a great bonus.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    product: 'Sona Masoori Rice',
  },
  {
    id: '4',
    name: 'Mohammed Al-Qasim',
    company: 'Al Noor Trading Co.',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    rating: 5,
    text: 'Reliable supplier with HALAL certification. We import chilli products monthly and have never had a quality complaint. Their pre-shipment documentation process is smooth and professional.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    product: 'Teja S17 Red Chilli',
  },
  {
    id: '5',
    name: 'Lisa Chen',
    company: 'Pacific Rim Distributors',
    country: 'Singapore',
    flag: '🇸🇬',
    rating: 5,
    text: 'We appreciate the transparency and traceability in their supply chain. Every shipment comes with full COA, phytosanitary certificate, and fumigation certificates. True export professionals.',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
    product: 'IR 64 Parboiled Rice',
  },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'global-basmati-rice-market-2026',
    title: 'Global Basmati Rice Market: Trends & Opportunities in 2026',
    excerpt: 'India dominates 65% of global basmati rice exports. Explore key importing nations, price trends, and how Indian exporters can capitalize on growing demand.',
    content: '',
    image: basmatirice,
    category: 'Market Trends',
    date: 'March 15, 2026',
    readTime: '6 min read',
    author: 'Akshyaa Export Team',
  },
  {
    id: '2',
    slug: 'global-chilli-demand-surge',
    title: 'Red Chilli Demand Surges 18% in Middle East & Southeast Asia',
    excerpt: 'Growing appetite for spicy food across the Middle East and Southeast Asia is driving unprecedented demand for Indian red chillies. Here\'s what importers need to know.',
    content: '',
    image: rc33,
    category: 'Industry News',
    date: 'February 28, 2026',
    readTime: '5 min read',
    author: 'Akshyaa Export Team',
  },
  {
    id: '3',
    slug: 'export-documentation-guide',
    title: 'Complete Guide to Export Documentation for Rice & Spices',
    excerpt: 'Understanding phytosanitary certificates, COA, BL, LC terms, and APEDA requirements is essential for smooth international trade. This comprehensive guide covers everything.',
    content: '',
    image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Export Guide',
    date: 'January 20, 2026',
    readTime: '8 min read',
    author: 'Akshyaa Export Team',
  },
  {
    id: '4',
    slug: 'shipping-update-2026',
    title: 'Global Shipping Updates: Container Availability & Lead Times 2026',
    excerpt: 'Post-pandemic shipping normalization means better container availability from India. Understand current freight rates and lead times for your import planning.',
    content: '',
    image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Shipping',
    date: 'January 10, 2026',
    readTime: '4 min read',
    author: 'Akshyaa Export Team',
  },
  {
    id: '5',
    slug: 'packaging-innovation-exports',
    title: 'Packaging Innovation: How Smart Packaging Reduces Export Losses',
    excerpt: 'Modern moisture-resistant packaging and vacuum sealing have reduced transit damage by 40%. Learn how Akshyaa Global Exports ensures your products arrive perfect.',
    content: '',
    image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Packaging',
    date: 'December 5, 2025',
    readTime: '5 min read',
    author: 'Akshyaa Export Team',
  },
  {
    id: '6',
    slug: 'fssai-apeda-certification-guide',
    title: 'FSSAI & APEDA Certification: Why It Matters for Your Imports',
    excerpt: 'Importing from APEDA-registered and FSSAI-certified exporters protects your business from regulatory non-compliance, border rejections, and quality disputes.',
    content: '',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Certifications',
    date: 'November 20, 2025',
    readTime: '6 min read',
    author: 'Akshyaa Export Team',
  },
];

export const exportCountries = [
  { name: 'USA', code: 'US', flag: flagUs, x: 22, y: 38, products: ['Basmati Rice', 'Red Chilli', 'Chilli Powder'] },
  { name: 'UK', code: 'GB', flag: flagGb, x: 47, y: 28, products: ['Basmati Rice', 'Chilli Flakes', 'Red Chilli Powder'] },
  { name: 'UAE', code: 'AE', flag: flagAe, x: 60, y: 43, products: ['Basmati Rice', 'Teja Chilli', 'Sona Masoori'] },
  { name: 'Saudi Arabia', code: 'SA', flag: flagSa, x: 58, y: 46, products: ['Basmati Rice', 'Red Chilli', 'Chilli Powder'] },
  { name: 'Qatar', code: 'QA', flag: flagQa, x: 61, y: 45, products: ['Basmati Rice', 'Red Chilli Powder'] },
  { name: 'Oman', code: 'OM', flag: flagOm, x: 63, y: 47, products: ['Basmati Rice', 'Red Chilli'] },
  { name: 'Singapore', code: 'SG', flag: flagSg, x: 77, y: 58, products: ['Sona Masoori', 'Chilli Products'] },
  { name: 'Malaysia', code: 'MY', flag: flagMy, x: 76, y: 56, products: ['IR 64 Parboiled', 'Red Chilli'] },
  { name: 'Australia', code: 'AU', flag: flagAu, x: 82, y: 72, products: ['Sona Masoori', 'Chilli Flakes'] },
  { name: 'Canada', code: 'CA', flag: flagCa, x: 18, y: 30, products: ['Basmati Rice', 'Chilli Products'] },
];

export const worldMapImage = worldMap;

export const certifications = [
  {
    id: '1',
    name: 'APEDA Registered',
    fullName: 'Agricultural and Processed Food Products Export Development Authority',
    description: 'Officially registered with APEDA under Ministry of Commerce, Government of India. This certification authorizes us to export agricultural commodities including rice and spices.',
    color: '#0A2540',
    icon: 'award',
  },
  {
    id: '2',
    name: 'FSSAI Certified',
    fullName: 'Food Safety and Standards Authority of India',
    description: 'FSSAI license ensures all our products meet the highest Indian food safety standards for processing, packaging, and storage before export.',
    color: '#00A651',
    icon: 'shield',
  },
  {
    id: '3',
    name: 'ISO 9001:2015',
    fullName: 'International Organization for Standardization',
    description: 'ISO certification validates our quality management systems, ensuring consistent product quality, process efficiency, and continuous improvement.',
    color: '#FF6B00',
    icon: 'check-circle',
  },
  {
    id: '4',
    name: 'Export License',
    fullName: 'Director General of Foreign Trade (DGFT)',
    description: 'Holding a valid DGFT Export License under Government of India, authorizing us to conduct international trade operations.',
    color: '#0A2540',
    icon: 'file-text',
  },
  {
    id: '5',
    name: 'HALAL Certified',
    fullName: 'HALAL Certification for Food Products',
    description: 'Our processing units are HALAL certified, ensuring compliance with Islamic dietary laws. Essential for exports to the Middle East and Southeast Asian markets.',
    color: '#00A651',
    icon: 'star',
  },
  {
    id: '6',
    name: 'HACCP Compliant',
    fullName: 'Hazard Analysis Critical Control Points',
    description: 'HACCP certification demonstrates our systematic preventive approach to food safety, identifying physical, chemical, and biological hazards in the production process.',
    color: '#FF6B00',
    icon: 'activity',
  },
];
