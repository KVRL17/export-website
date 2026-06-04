import ProductsMarketplace from '../components/ProductsMarketplace';

export default function ProductsPage() {
  return (
    <main className="page-main">
      <div className="page-hero-banner">
        <div className="page-hero-overlay" />
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1400')`,
          }}
        />
        <div className="container-fluid px-4 px-lg-5 position-relative h-100 d-flex align-items-center">
          <div>
            <span className="section-eyebrow section-eyebrow-light">Export Catalog</span>
            <h1 className="page-banner-title">Our Product Range</h1>
            <p className="page-banner-subtitle">
              Browse export-grade rice varieties and premium chilli products ready for international trade.
            </p>
          </div>
        </div>
      </div>
      <ProductsMarketplace showHeader={false} />
    </main>
  );
}
