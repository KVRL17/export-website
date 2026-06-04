import { Link } from 'react-router-dom';
import { useInquiryCart } from '../context/InquiryCartContext';
import { BulkQuoteForm } from './BulkQuotePage';

export default function CartQuotePage() {
  const { items } = useInquiryCart();

  const initialSelectedProducts = items.map((item) => item.product.id);
  const initialQuantities = items.reduce<Record<string, string>>((acc, item) => {
    if (item.quantity) acc[item.product.id] = item.quantity;
    return acc;
  }, {});

  if (items.length === 0) {
    return (
      <main className="page-main">
        <div className="container-fluid px-4 px-lg-5 py-5">
          <div className="quote-success">
            <h2>No products in inquiry cart</h2>
            <p className="text-muted">Add items to your inquiry cart first to request a cart quote.</p>
            <Link to="/products" className="btn-hero-outline mt-4">
              Browse Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <BulkQuoteForm
      initialSelectedProducts={initialSelectedProducts}
      initialQuantities={initialQuantities}
      skipProductSelection
    />
  );
}
