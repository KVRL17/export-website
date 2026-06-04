import basmatiRice1 from '../images/basmatirice9.jpg';
import basmatiRice2 from '../images/basmatirice2.jpg';
import basmatiRice3 from '../images/basmatirice3.jpg';
import rice21 from '../images/rice21.jpg';
import rice22 from '../images/rice22.jpg';
import rice23 from '../images/rice23.jpg';
import rc31 from '../images/rc31.jpg';
import rc32 from '../images/rc32.jpg';
import rc33 from '../images/rc33.jpg';
import cp41 from '../images/cp41.jpg';
import cp42 from '../images/cp42.jpg';
import cp43 from '../images/cp43.jpg';
import cf51 from '../images/cf51.jpg';
import cf52 from '../images/cf52.jpg';
import cf53 from '../images/cf53.jpg';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'rice' | 'chillies' | 'powders' | 'flakes';
  grade: string;
  moq: string;
  packaging: string[];
  countries: string[];
  image: string;
  gallery: string[];
  description: string;
  longDescription: string;
  specifications: Record<string, string>;
  containerCapacity: string;
  certifications: string[];
  faqs: { question: string; answer: string }[];
  popular: boolean;
  newest: boolean;
  priceRange: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'basmati-rice',
    name: 'Premium Basmati Rice',
    category: 'rice',
    grade: 'A',
    moq: '25 MT',
    packaging: ['25 kg PP Bags', '50 kg Jute Bags', '5 kg Consumer Pack'],
    countries: ['USA', 'UK', 'UAE', 'Saudi Arabia', 'Qatar'],
    image: basmatiRice1,
    gallery: [
      basmatiRice1,
      basmatiRice2,
      basmatiRice3,
    ],
    description: 'Premium Basmati Rice with long grains, natural aroma, and a fluffy finish.',
    longDescription: 'Our Premium Basmati Rice is sourced from the fertile plains of Punjab and Haryana. Each long, slender grain is naturally aromatic, lightly aged, and prized for its soft texture and nutty fragrance. It is ideal for biryanis, pilafs, and premium culinary use where aroma and presentation matter most.',
    specifications: {
      'Grain Length': '8.30 mm (average)',
      'Length After Cooking': '16+ mm',
      'Moisture': 'Max 12.5%',
      'Broken Grains': 'Max 1%',
      'Foreign Matter': 'Nil',
      'Aroma': 'Natural Basmati Fragrance',
      'Variety': '1121 / PB-1 / Pusa',
      'Crop Year': '2026',
    },
    containerCapacity: '25 MT per 20ft Container | 27.5 MT per 40ft Container',
    certifications: ['APEDA', 'FSSAI', 'ISO 9001:2025', 'Phytosanitary Certificate'],
    faqs: [
      { question: 'What is the minimum order quantity?', answer: 'Our MOQ is 25 MT per order. We can accommodate smaller trial orders upon request.' },
      { question: 'Do you provide samples?', answer: 'Yes, we provide free samples (500g-1kg) for qualified buyers. Courier charges apply.' },
      { question: 'What certifications are available?', answer: 'We provide APEDA, FSSAI, ISO, Phytosanitary Certificate, and COA with every shipment.' },
    ],
    popular: true,
    newest: false,
    priceRange: '€450 - €650 / MT',
  },
  {
    id: '2',
    slug: 'ir-64-parboiled-rice',
    name: 'Non-Basmati Rice',
    category: 'rice',
    grade: 'A',
    moq: '25 MT',
    packaging: ['25 kg PP Bags', '50 kg Jute Bags'],
    countries: ['UK', 'USA', 'UAE', 'Malaysia', 'Singapore'],
    image: rice21,
    gallery: [
      rice21,
      rice22,
      rice23,
    ],
    description: 'Non-Basmati Rice with firm grains, excellent texture, and dependable cooking quality.',
    longDescription: 'Our Non-Basmati Rice is a dependable IR 64 parboiled variety with firm grains, excellent cooking texture, and strong market appeal. The parboiling process preserves nutrients and gives the rice a golden appearance, making it a practical choice for food service, wholesale distribution, and large-scale cooking needs.',
    specifications: {
      'Variety': 'IR 64',
      'Type': 'Parboiled',
      'Moisture': 'Max 13%',
      'Broken Grains': 'Max 5% / 25%',
      'Color': 'Golden Yellow',
      'Admixture': 'Max 1%',
    },
    containerCapacity: '25 MT per 20ft Container | 27 MT per 40ft Container',
    certifications: ['APEDA', 'FSSAI', 'ISO 9001:2015'],
    faqs: [
      { question: 'What broken percentages are available?', answer: 'We offer 5%, 25%, and 100% broken options.' },
      { question: 'Can packaging be customized?', answer: 'Yes, we offer private labeling and custom packaging from 1 kg to 50 kg.' },
    ],
    popular: false,
    newest: true,
    priceRange: '€300 - €450 / MT',
  },
  /*
  {
    id: '3',
    slug: 'sona-masoori-rice',
    name: 'Sona Masoori Rice',
    category: 'rice',
    grade: 'Premium Export Grade',
    moq: '20 MT',
    packaging: ['25 kg PP Bags', '10 kg Consumer Pack', '5 kg Vacuum Pack'],
    countries: ['USA', 'Australia', 'UAE', 'Singapore'],
    image: 'https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7421215/pexels-photo-7421215.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lightweight, aromatic medium-grain rice loved by South Indian diaspora worldwide.',
    longDescription: 'Sona Masoori is a lightweight, aromatic medium-grain rice grown primarily in Andhra Pradesh and Karnataka. It is one of the most popular rice varieties among South Indian households globally. Known for its soft texture and easy digestibility, it is ideal for everyday cooking and diabetic-friendly diets.',
    specifications: {
      'Variety': 'Sona Masoori HMT',
      'Grain Type': 'Medium Grain',
      'Moisture': 'Max 14%',
      'Broken': 'Max 2%',
      'Polishing': 'Double Polished',
    },
    containerCapacity: '23 MT per 20ft Container',
    certifications: ['APEDA', 'FSSAI', 'ISO 9001:2015'],
    faqs: [
      { question: 'Is raw and boiled Sona Masoori available?', answer: 'Yes, both raw (white) and boiled/parboiled versions are available.' },
    ],
    popular: true,
    newest: false,
    priceRange: '$350 - $500 / MT',
  },
  */
  {
    id: '4',
    slug: 'dry-red-chilli',
    name: 'Dried Red Chillies',
    category: 'chillies',
    grade: 'A',
    moq: '5 MT',
    packaging: ['25 kg PP Bags', '50 kg Bales', '10 kg Cartons'],
    countries: ['USA', 'UK', 'UAE', 'Qatar', 'Oman', 'Malaysia'],
    image: rc33,
    gallery: [
      rc31,
      rc32,
      rc33,
    ],
    description: 'Dried Red Chillies with deep red color, high pungency, and export-ready quality.',
    longDescription: 'Our Dried Red Chillies are sourced from premium Teja S17 farms in Andhra Pradesh and selected for their deep red color, high pungency, and consistent export quality. Each batch is carefully dried, cleaned, and graded to meet international food safety and phytosanitary standards for spice manufacturers and wholesale buyers.',
    specifications: {
      'Variety': 'Teja S17',
      'ASTA Color Value': '100 - 120',
      'Moisture': 'Max 11%',
      'Pungency (SHU)': '50,000 - 100,000',
      'Stems': 'With stem / De-stemmed',
      'Size': '5-7 cm',
      'Color': 'Deep Red',
    },
    containerCapacity: '14-16 MT per 20ft Container',
    certifications: ['APEDA', 'FSSAI', 'ISO 9001:2015', 'Phytosanitary Certificate'],
    faqs: [
      { question: 'What chilli varieties are available?', answer: 'We export Teja S17, 334 Wrinkled, Byadgi, Guntur Sannam, and more.' },
      { question: 'Do you export with stems or de-stemmed?', answer: 'Both options are available as per buyer preference.' },
    ],
    popular: true,
    newest: false,
    priceRange: '€1,200 - €1,800 / MT',
  },
  /*
  {
    id: '5',
    slug: 'guntur-sannam-chilli',
    name: 'Guntur Sannam Chilli',
    category: 'chillies',
    grade: 'Export Grade A',
    moq: '5 MT',
    packaging: ['25 kg PP Bags', '50 kg Bales'],
    countries: ['USA', 'UK', 'UAE', 'Saudi Arabia'],
    image: 'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Guntur Sannam chilli with medium-high pungency and rich red color for spice industry.',
    longDescription: 'Guntur Sannam (S4) is one of the most popular Indian chilli varieties, widely used in spice blends, hot sauces, and oleoresin extraction. With its characteristic medium-high pungency and rich color, it is the preferred choice for food processors worldwide.',
    specifications: {
      'Variety': 'Guntur Sannam S4',
      'ASTA Color Value': '80 - 100',
      'Moisture': 'Max 12%',
      'Pungency (SHU)': '25,000 - 50,000',
      'Size': '6-8 cm',
    },
    containerCapacity: '14-16 MT per 20ft Container',
    certifications: ['APEDA', 'FSSAI', 'ISO 9001:2015'],
    faqs: [
      { question: 'What is the color value?', answer: 'ASTA color value ranges between 80-100 for our Guntur Sannam.' },
    ],
    popular: false,
    newest: true,
    priceRange: '$900 - $1,400 / MT',
  },
  */
  {
    id: '6',
    slug: 'red-chilli-powder',
    name: 'Chilli Powder',
    category: 'powders',
    grade: 'Premium',
    moq: '5 MT',
    packaging: ['1 kg PP Bags', '5 kg Tin', '25 kg PP Bags'],
    countries: ['USA', 'UK', 'UAE', 'Qatar', 'Oman', 'Singapore'],
    image: cp43,
    gallery: [
      cp41,
      cp42,
      cp43
    ],
    description: 'Chilli Powder with fine grinding, rich color, and consistent pungency.',
    longDescription: 'Our Chilli Powder is produced with fine grinding technology to deliver uniform texture, rich color, and controlled pungency. Available in mild, hot, and extra-hot variants, it is suitable for spice blending, seasoning, sauces, and food processing applications under strict HACCP and GMP standards.',
    specifications: {
      'ASTA Color Value': '90 - 100',
      'Moisture': 'Max 10%',
      'Mesh Size': '60 - 80 Mesh',
      'Aflatoxin': 'Nil (as per EU norms)',
      'Pungency': 'Mild / Hot / Extra Hot',
    },
    containerCapacity: '20 MT per 20ft Container',
    certifications: ['FSSAI', 'ISO 9001:2015', 'HACCP', 'HALAL'],
    faqs: [
      { question: 'Is organic chilli powder available?', answer: 'Yes, we offer certified organic chilli powder on request with minimum 6 MT order.' },
      { question: 'What are the pungency options?', answer: 'We offer mild (10,000-20,000 SHU), hot (30,000-50,000 SHU), and extra hot (70,000+ SHU) variants.' },
    ],
    popular: true,
    newest: false,
    priceRange: '€1,500 - €2,500 / MT',
  },
  {
    id: '7',
    slug: 'chilli-flakes',
    name: 'Red Chilli Flakes',
    category: 'flakes',
    grade: 'Premium',
    moq: '3 MT',
    packaging: ['100g Shaker', '500g Bag', '1 kg Bag', '25 kg PP Bag'],
    countries: ['USA', 'UK', 'Italy', 'UAE', 'Australia'],
    image: cf51,
    gallery: [
      cf51,
      cf52,
      cf53
    ],
    description: 'Red Chilli Flakes with bold heat, bright color, and a crisp texture for seasoning and toppings.',
    longDescription: 'Our Red Chilli Flakes are made by crushing selected dried chillies to create bold flakes with bright color, crisp texture, and balanced heat. They are widely used in pizza toppings, seasoning blends, sauces, and ready-to-cook food products, with options available in different mesh sizes and pungency levels.',
    specifications: {
      'Type': 'Crushed with Seeds',
      'Mesh Size': '5-8 mm flakes',
      'Moisture': 'Max 10%',
      'Pungency': 'Medium to Hot',
      'Color': 'Bright Red',
    },
    containerCapacity: '18 MT per 20ft Container',
    certifications: ['FSSAI', 'ISO 9001:2015', 'HACCP', 'HALAL'],
    faqs: [
      { question: 'Are chilli flakes available without seeds?', answer: 'Yes, de-seeded flakes are available at an additional processing cost.' },
    ],
    popular: false,
    newest: true,
    priceRange: '€1,800 - €2,800 / MT',
  },
  /*
  {
    id: '8',
    slug: 'byadgi-chilli',
    name: 'Chilli Flex',
    category: 'chillies',
    grade: 'Export Grade A',
    moq: '5 MT',
    packaging: ['25 kg PP Bags', '50 kg Bales'],
    countries: ['USA', 'UK', 'UAE', 'Japan', 'South Korea'],
    image: 'https://images.pexels.com/photos/2137019/pexels-photo-2137019.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2137019/pexels-photo-2137019.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Premium Byadgi wrinkled chilli with deep maroon color and mild pungency.',
    longDescription: 'Byadgi Kaddi chilli from Karnataka is famous worldwide for its deep maroon color and mild pungency. With the highest ASTA color value (140+) among Indian chilli varieties, it is the first choice of oleoresin manufacturers and food colorant producers globally.',
    specifications: {
      'Variety': 'Byadgi Kaddi',
      'ASTA Color Value': '140+',
      'Pungency (SHU)': '10,000 - 30,000',
      'Moisture': 'Max 12%',
      'Color': 'Deep Maroon',
    },
    containerCapacity: '14-16 MT per 20ft Container',
    certifications: ['APEDA', 'FSSAI', 'ISO 9001:2015'],
    faqs: [
      { question: 'Why is Byadgi popular for food coloring?', answer: 'It has the highest natural red color value (ASTA 140+) with mild pungency, ideal for food color extraction.' },
    ],
    popular: false,
    newest: false,
    priceRange: '€1,400 - €2,000 / MT',
  },
  */
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: string): Product[] =>
  category === 'all' ? products : products.filter((p) => p.category === category);
