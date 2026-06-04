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
    grade: 'Export Grade A',
    moq: '25 MT',
    packaging: ['25 kg PP Bags', '50 kg Jute Bags', '5 kg Consumer Pack'],
    countries: ['USA', 'UK', 'UAE', 'Saudi Arabia', 'Qatar'],
    image: 'https://images.pexels.com/photos/7421215/pexels-photo-7421215.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/7421215/pexels-photo-7421215.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Long-grain aromatic basmati rice with natural fragrance, aged to perfection.',
    longDescription: 'Our Premium Basmati Rice is sourced from the fertile plains of Punjab and Haryana. Each grain is long, slender, and aromatic, with a distinctive nutty flavor that sets it apart. Aged for 12-24 months to enhance fragrance and cooking quality, it is ideal for biryanis, pilafs, and fine dining establishments worldwide.',
    specifications: {
      'Grain Length': '8.30 mm (average)',
      'Length After Cooking': '16+ mm',
      'Moisture': 'Max 12.5%',
      'Broken Grains': 'Max 1%',
      'Foreign Matter': 'Nil',
      'Aroma': 'Natural Basmati Fragrance',
      'Variety': '1121 / PB-1 / Pusa',
      'Crop Year': '2024',
    },
    containerCapacity: '25 MT per 20ft Container | 27.5 MT per 40ft Container',
    certifications: ['APEDA', 'FSSAI', 'ISO 9001:2015', 'Phytosanitary Certificate'],
    faqs: [
      { question: 'What is the minimum order quantity?', answer: 'Our MOQ is 25 MT per order. We can accommodate smaller trial orders upon request.' },
      { question: 'Do you provide samples?', answer: 'Yes, we provide free samples (500g-1kg) for qualified buyers. Courier charges apply.' },
      { question: 'What certifications are available?', answer: 'We provide APEDA, FSSAI, ISO, Phytosanitary Certificate, and COA with every shipment.' },
    ],
    popular: true,
    newest: false,
    priceRange: '$450 - $650 / MT',
  },
  {
    id: '2',
    slug: 'ir-64-parboiled-rice',
    name: 'IR 64 Parboiled Rice',
    category: 'rice',
    grade: 'Export Grade A',
    moq: '25 MT',
    packaging: ['25 kg PP Bags', '50 kg Jute Bags'],
    countries: ['UK', 'USA', 'UAE', 'Malaysia', 'Singapore'],
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7421215/pexels-photo-7421215.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'High-quality parboiled non-basmati rice with excellent cooking characteristics.',
    longDescription: 'IR 64 Parboiled Rice is a popular non-basmati variety known for its firm texture, good taste, and high nutritional value. The parboiling process partially boils the rice in husk, locking in nutrients and giving the grain a golden yellow color. Ideal for African and Southeast Asian markets.',
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
    priceRange: '$300 - $450 / MT',
  },
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
  {
    id: '4',
    slug: 'dry-red-chilli',
    name: 'Dry Red Chilli (Teja S17)',
    category: 'chillies',
    grade: 'Export Grade A',
    moq: '5 MT',
    packaging: ['25 kg PP Bags', '50 kg Bales', '10 kg Cartons'],
    countries: ['USA', 'UK', 'UAE', 'Qatar', 'Oman', 'Malaysia'],
    image: 'https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Premium Teja S17 variety red chillies with high pungency and deep red color.',
    longDescription: 'Teja S17 is the most sought-after variety of red chilli globally, known for its extra high pungency (ASTA Color Value 100-120) and brilliant red color. Sourced from the chilli belt of Andhra Pradesh, each batch is carefully dried, cleaned, and sorted to meet international phytosanitary standards.',
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
    priceRange: '$1,200 - $1,800 / MT',
  },
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
  {
    id: '6',
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    category: 'powders',
    grade: 'Premium Export Grade',
    moq: '5 MT',
    packaging: ['1 kg PP Bags', '5 kg Tin', '25 kg PP Bags'],
    countries: ['USA', 'UK', 'UAE', 'Qatar', 'Oman', 'Singapore'],
    image: 'https://images.pexels.com/photos/3296434/pexels-photo-3296434.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3296434/pexels-photo-3296434.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Finely ground premium red chilli powder with consistent color value and pungency.',
    longDescription: 'Our Red Chilli Powder is manufactured using state-of-the-art grinding technology to ensure uniform particle size, consistent color (ASTA 90-100), and precise pungency. Available in extra hot, hot, and mild variants. Manufactured under strict HACCP and GMP conditions.',
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
    priceRange: '$1,500 - $2,500 / MT',
  },
  {
    id: '7',
    slug: 'chilli-flakes',
    name: 'Red Chilli Flakes',
    category: 'flakes',
    grade: 'Premium Export Grade',
    moq: '3 MT',
    packaging: ['100g Shaker', '500g Bag', '1 kg Bag', '25 kg PP Bag'],
    countries: ['USA', 'UK', 'Italy', 'UAE', 'Australia'],
    image: 'https://images.pexels.com/photos/1329546/pexels-photo-1329546.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1329546/pexels-photo-1329546.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3296434/pexels-photo-3296434.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Crushed red chilli flakes with seeds, ideal for pizza toppings and seasoning blends.',
    longDescription: 'Our premium Red Chilli Flakes are produced by crushing dried Teja and Guntur chillies to achieve the ideal flake-to-seed ratio. Preferred by pizza chains, Italian restaurants, and seasoning manufacturers worldwide. Available in various mesh sizes and pungency levels.',
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
    priceRange: '$1,800 - $2,800 / MT',
  },
  {
    id: '8',
    slug: 'byadgi-chilli',
    name: 'Byadgi Chilli (Kaddi)',
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
    priceRange: '$1,400 - $2,000 / MT',
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: string): Product[] =>
  category === 'all' ? products : products.filter((p) => p.category === category);
