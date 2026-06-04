import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiCheck, FiSend } from 'react-icons/fi';
import { products } from '../data/products';
import { useInquiryCart } from '../context/InquiryCartContext';

const steps = ['Business Details', 'Select Products', 'Quantity & Delivery', 'Requirements'];

const countries = [
  'United States', 'United Kingdom', 'UAE', 'Saudi Arabia', 'Qatar', 'Oman',
  'Kuwait', 'Bahrain', 'Malaysia', 'Singapore', 'Australia', 'Canada',
  'Germany', 'France', 'Italy', 'Netherlands', 'Japan', 'South Korea', 'Other'
];

interface FormData {
  companyName: string;
  buyerName: string;
  country: string;
  email: string;
  phone: string;
  selectedProducts: string[];
  quantities: Record<string, string>;
  deliveryPort: string;
  paymentTerms: string;
  requirements: string;
}

const initialForm: FormData = {
  companyName: '',
  buyerName: '',
  country: '',
  email: '',
  phone: '',
  selectedProducts: [],
  quantities: {},
  deliveryPort: '',
  paymentTerms: '',
  requirements: '',
};

export interface BulkQuoteFormProps {
  initialSelectedProducts?: string[];
  initialQuantities?: Record<string, string>;
  skipProductSelection?: boolean;
}

export function BulkQuoteForm({
  initialSelectedProducts = [],
  initialQuantities = {},
  skipProductSelection = false,
}: BulkQuoteFormProps) {
  const { items } = useInquiryCart();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({
    ...initialForm,
    selectedProducts: initialSelectedProducts,
    quantities: initialQuantities,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const skipSelection = skipProductSelection && initialSelectedProducts.length > 0;
  const visibleSteps = skipSelection
    ? ['Business Details', 'Quantity & Delivery', 'Requirements']
    : steps;
  const displayStep = step;
  const isProductSelectionStep = !skipSelection && step === 1;
  const isQuantityStep = step === (skipSelection ? 1 : 2);
  const isRequirementsStep = step === (skipSelection ? 2 : 3);

  const updateField = (field: keyof FormData, value: string) => {
    setError('');
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleProduct = (id: string) => {
    setError('');
    setForm((prev) => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(id)
        ? prev.selectedProducts.filter((p) => p !== id)
        : [...prev.selectedProducts, id],
    }));
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const canNext = () => {
    if (step === 0) {
      return (
        form.companyName.trim()
        && form.buyerName.trim()
        && form.country.trim()
        && validateEmail(form.email)
        && form.phone.trim()
      );
    }

    if (isProductSelectionStep) {
      return form.selectedProducts.length > 0;
    }

    if (isQuantityStep) {
      const allQuantitiesValid = form.selectedProducts.every(
        (id) => form.quantities[id]?.trim()
      );
      return form.deliveryPort.trim() && allQuantitiesValid;
    }

    return true;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');

    if (!form.selectedProducts.length) {
      setError('Please select at least one product before submitting.');
      setSubmitting(false);
      return;
    }

    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      setSubmitting(false);
      return;
    }

    if (form.selectedProducts.some((id) => !form.quantities[id]?.trim())) {
      setError('Please enter quantities for all selected products.');
      setSubmitting(false);
      return;
    }

    if (!form.deliveryPort.trim()) {
      setError('Please provide the destination port.');
      setSubmitting(false);
      return;
    }

    const selectedItems = form.selectedProducts.map((id) => {
      const p = products.find((pr) => pr.id === id);
      const qty = form.quantities[id] || p?.moq || 'N/A';
      return { name: p?.name || id, qty };
    });

    const tableRows = selectedItems.map((item) => `
      <tr>
        <td style="padding:8px 10px; border:1px solid #dbe4ee;">${item.name}</td>
        <td style="padding:8px 10px; border:1px solid #dbe4ee; text-align:center;">${item.qty}</td>
      </tr>
    `).join('');

    const htmlMessage = `
      <h2 style="font-family:Arial,sans-serif; color:#0A2540; margin-bottom:8px;">New Bulk Quote Request</h2>
      <p style="font-family:Arial,sans-serif; color:#334155; margin:0 0 12px;">A new bulk export inquiry has arrived from Akshyaa Global Exports.</p>
      <table style="width:100%; border-collapse:collapse; font-family:Arial,sans-serif; border:1px solid #dbe4ee; background:#ffffff;">
        <tr style="background:#0A2540; color:#ffffff; text-align:left;">
          <th style="padding:10px; border:1px solid #dbe4ee;">Product</th>
          <th style="padding:10px; border:1px solid #dbe4ee; text-align:center;">Quantity</th>
        </tr>
        ${tableRows}
      </table>
      <p style="font-family:Arial,sans-serif; color:#334155; margin-top:12px;"><strong>Company:</strong> ${form.companyName}</p>
      <p style="font-family:Arial,sans-serif; color:#334155; margin:4px 0;"><strong>Buyer:</strong> ${form.buyerName}</p>
      <p style="font-family:Arial,sans-serif; color:#334155; margin:4px 0;"><strong>Country:</strong> ${form.country}</p>
      <p style="font-family:Arial,sans-serif; color:#334155; margin:4px 0;"><strong>Email:</strong> ${form.email}</p>
      <p style="font-family:Arial,sans-serif; color:#334155; margin:4px 0;"><strong>Phone:</strong> ${form.phone}</p>
      <p style="font-family:Arial,sans-serif; color:#334155; margin:4px 0;"><strong>Destination Port:</strong> ${form.deliveryPort}</p>
      <p style="font-family:Arial,sans-serif; color:#334155; margin:4px 0;"><strong>Payment Terms:</strong> ${form.paymentTerms || 'Not specified'}</p>
      <p style="font-family:Arial,sans-serif; color:#334155; margin:4px 0;"><strong>Requirements:</strong> ${form.requirements || 'None'}</p>
      <p style="font-family:Arial,sans-serif; color:#334155; margin-top:12px;"><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
    `;

    const payload = {
      company_name: form.companyName,
      buyer_name: form.buyerName,
      country: form.country,
      email: form.email,
      phone: form.phone,
      products: selectedItems.map((item) => `${item.name}: ${item.qty}`).join('\n'),
      delivery_port: form.deliveryPort,
      payment_terms: form.paymentTerms || 'Not specified',
      requirements: form.requirements || 'None',
      timestamp: new Date().toLocaleString(),
      _subject: `New Bulk Quote Request from ${form.buyerName} (${form.companyName || 'No Company'})`,
      _replyto: form.email,
      _message: htmlMessage,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/venkataramanakarri.official@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('FormSubmit request failed');
      }

      setSubmitted(true);
    } catch {
      setError('Failed to send inquiry. Please email us directly at venkataramanakarri.official@gmail.com');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="page-main">
        <div className="container-fluid px-4 px-lg-5 py-5">
          <div className="quote-success">
            <motion.div
              className="success-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <FiCheck size={48} />
            </motion.div>
            <h2>Quote Request Received!</h2>
            <p>Thank you, <strong>{form.buyerName}</strong>. We have received your bulk quote request and our export team will respond within <strong>24 hours</strong> with a detailed pro-forma invoice.</p>
            <p className="text-muted">Check your email at <strong>{form.email}</strong></p>
            <button onClick={() => { setSubmitted(false); setForm(initialForm); setStep(0); }} className="btn-hero-outline mt-4">
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page-main">
      <div className="page-hero-banner page-hero-sm">
        <div className="page-hero-overlay" />
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1400')`,
          }}
        />
        <div className="container-fluid px-4 px-lg-5 position-relative h-100 d-flex align-items-center">
          <div>
            <span className="section-eyebrow section-eyebrow-light">B2B Export Inquiry</span>
            <h1 className="page-banner-title">Request Bulk Quote</h1>
            <p className="page-banner-subtitle">Get competitive FOB/CIF pricing for bulk export orders.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4 px-lg-5 py-5">
        <div className="quote-form-wrapper">
          {/* Step indicators */}
          <div className="step-indicators">
            {visibleSteps.map((s, i) => (
              <div key={s} className={`step-indicator ${i === displayStep ? 'active' : i < displayStep ? 'done' : ''}`}>
                <div className="step-bubble">
                  {i < displayStep ? <FiCheck size={14} /> : <span>{i + 1}</span>}
                </div>
                <span className="step-label">{s}</span>
              </div>
            ))}
          </div>

          {/* Form Steps */}
          <div className="quote-form-body">
            <AnimatePresence mode="wait">
              {displayStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="step-content"
                >
                  <h3 className="step-title">Business Details</h3>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label-custom">Company Name *</label>
                      <input
                        type="text"
                        className="form-input-custom"
                        value={form.companyName}
                        onChange={(e) => updateField('companyName', e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Buyer Name *</label>
                      <input
                        type="text"
                        className="form-input-custom"
                        value={form.buyerName}
                        onChange={(e) => updateField('buyerName', e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Country *</label>
                      <select
                        className="form-input-custom"
                        value={form.country}
                        onChange={(e) => updateField('country', e.target.value)}
                      >
                        <option value="">Select your country</option>
                        {countries.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Business Email *</label>
                      <input
                        type="email"
                        className="form-input-custom"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="business@company.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        className="form-input-custom"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {isProductSelectionStep && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="step-content"
                >
                  <h3 className="step-title">Select Products</h3>
                  <div className="products-select-grid">
                    {products.map((p) => (
                      <div
                        key={p.id}
                        className={`product-select-card ${form.selectedProducts.includes(p.id) ? 'selected' : ''}`}
                        onClick={() => toggleProduct(p.id)}
                      >
                        <img src={p.image} alt={p.name} />
                        <div className="product-select-info">
                          <div className="product-select-name">{p.name}</div>
                          <div className="product-select-moq">MOQ: {p.moq}</div>
                        </div>
                        {form.selectedProducts.includes(p.id) && (
                          <div className="product-select-check"><FiCheck size={14} /></div>
                        )}
                      </div>
                    ))}
                  </div>
                  {items.length > 0 && (
                    <p className="text-muted small mt-3">
                      Tip: You had {items.length} item(s) in your inquiry cart. They are pre-selectable above.
                    </p>
                  )}
                </motion.div>
              )}

              {skipSelection && isQuantityStep && (
                <motion.div
                  key="step1-skip"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="step-content"
                >
                  <h3 className="step-title">Selected Products</h3>
                  <div className="quote-summary mt-3">
                    {form.selectedProducts.map((id) => {
                      const p = products.find((pr) => pr.id === id);
                      return (
                        <div key={id} className="summary-row"><strong>{p?.name || id}:</strong> {form.quantities[id] || p?.moq || 'N/A'}</div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {isQuantityStep && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="step-content"
                >
                  <h3 className="step-title">Quantity & Delivery</h3>
                  <div className="row g-3">
                    {form.selectedProducts.map((id) => {
                      const p = products.find((pr) => pr.id === id);
                      if (!p) return null;
                      return (
                        <div key={id} className="col-md-6">
                          <label className="form-label-custom">{p.name} Quantity</label>
                          <input
                            type="text"
                            className="form-input-custom"
                            value={form.quantities[id] || ''}
                            onChange={(e) =>
                              setForm((prev) => ({
                                ...prev,
                                quantities: { ...prev.quantities, [id]: e.target.value },
                              }))
                            }
                            placeholder={`e.g. ${p.moq}`}
                          />
                        </div>
                      );
                    })}
                    <div className="col-md-6">
                      <label className="form-label-custom">Destination Port *</label>
                      <input
                        type="text"
                        className="form-input-custom"
                        value={form.deliveryPort}
                        onChange={(e) => updateField('deliveryPort', e.target.value)}
                        placeholder="e.g. Dubai Port, Jebel Ali"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Preferred Payment Terms</label>
                      <select
                        className="form-input-custom"
                        value={form.paymentTerms}
                        onChange={(e) => updateField('paymentTerms', e.target.value)}
                      >
                        <option value="">Select payment terms</option>
                        <option value="LC at Sight">LC at Sight</option>
                        <option value="30% TT advance + 70% BL">30% TT advance + 70% BL</option>
                        <option value="100% TT Advance">100% TT Advance</option>
                        <option value="CAD / DA 30">CAD / DA 30</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {isRequirementsStep && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="step-content"
                >
                  <h3 className="step-title">Additional Requirements</h3>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label-custom">Special Requirements / Notes</label>
                      <textarea
                        className="form-input-custom"
                        rows={6}
                        value={form.requirements}
                        onChange={(e) => updateField('requirements', e.target.value)}
                        placeholder="e.g. Custom packaging, Private labeling, Specific certifications required, Delivery urgency, Quality standards..."
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="quote-summary mt-4">
                    <h5>Order Summary</h5>
                    <div className="summary-row"><strong>Company:</strong> {form.companyName}</div>
                    <div className="summary-row"><strong>Buyer:</strong> {form.buyerName}</div>
                    <div className="summary-row"><strong>Country:</strong> {form.country}</div>
                    <div className="summary-row"><strong>Email:</strong> {form.email}</div>
                    <div className="summary-row"><strong>Products:</strong> {form.selectedProducts.length} selected</div>
                    <div className="summary-row"><strong>Destination:</strong> {form.deliveryPort}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </div>

          {/* Navigation */}
          <div className="quote-form-footer">
            <button
              className="btn-step-back"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={displayStep === 0}
            >
              <FiArrowLeft size={16} /> Back
            </button>

            {displayStep < visibleSteps.length - 1 ? (
              <button
                className="btn-step-next"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext()}
              >
                Next <FiArrowRight size={16} />
              </button>
            ) : (
              <button
                className="btn-step-submit"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? 'Sending...' : (
                  <><FiSend size={16} /> Submit Request</>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function BulkQuotePage() {
  return <BulkQuoteForm />;
}
