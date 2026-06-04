import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!form.name.trim()) return 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Please enter a valid email address.';
    if (form.phone.trim() && !/^[+\d\s()-]{7,}$/.test(form.phone.trim())) return 'Please enter a valid phone number.';
    if (!form.subject.trim()) return 'Please enter a subject.';
    if (!form.message.trim() || form.message.trim().length < 10) return 'Please enter a message with at least 10 characters.';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSending(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/venkataramanakarri.official@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          _subject: `New Contact Request from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('FormSubmit request failed');
      }

      setSent(true);
      setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
    } catch {
      setError('Failed to send. Please email us directly at info@akshyaaglobalexport.com');
    } finally {
      setSending(false);
    }
  };

  const update = (field: string, val: string) => setForm((prev) => ({ ...prev, [field]: val }));

  const contactInfo = [
    { icon: FiPhone, label: 'Phone Number', value: '+44 7763076666', href: 'tel:+447763076666' },
    { icon: FiMail, label: 'Email', value: 'info@akshyaaglobalexport.com', href: 'mailto:info@akshyaaglobalexport.com' },
    { icon: FiMapPin, label: 'Office Address', value: 'Uk', href: '#' },
    { icon: FiClock, label: 'Working Hours', value: 'Monday – Saturday\n09:00 AM – 06:00 PM', href: '#' },
  ];

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
            <span className="section-eyebrow section-eyebrow-light">Get In Touch</span>
            <h1 className="page-banner-title">Contact Us</h1>
            <p className="page-banner-subtitle">Our export team responds within 24 hours. Let's discuss your requirements.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4 px-lg-5 py-5">
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="section-heading-sm mb-4">Reach Our Export Team</h2>
              <p className="text-muted mb-4">
                Whether you're a first-time importer or an established buyer, our team is ready to assist with pricing, documentation, and logistics.
              </p>
              <div className="contact-info-list">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <a key={i} href={info.href} className="contact-info-item" target={info.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      <div className="contact-info-icon">
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="contact-info-label">{info.label}</div>
                        <div className="contact-info-value">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="contact-form-card">
                <h3 className="contact-form-title">Send Us a Message</h3>

                {sent && (
                  <div className="alert-success-custom">
                    Message sent successfully! We'll respond within 24 hours.
                  </div>
                )}
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label-custom">Full Name *</label>
                      <input required className="form-input-custom" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Email *</label>
                      <input required type="email" className="form-input-custom" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="your@email.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Company</label>
                      <input className="form-input-custom" value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Company name" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-custom">Phone</label>
                      <input type="tel" className="form-input-custom" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+1 234 567 8900" />
                    </div>
                    <div className="col-12">
                      <label className="form-label-custom">Subject *</label>
                      <input required className="form-input-custom" value={form.subject} onChange={(e) => update('subject', e.target.value)} placeholder="e.g. Bulk order inquiry for Basmati Rice" />
                    </div>
                    <div className="col-12">
                      <label className="form-label-custom">Message *</label>
                      <textarea required className="form-input-custom" rows={6} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us about your requirements, quantities, and any specific questions..." />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-hero-primary" disabled={sending}>
                        {sending ? 'Sending...' : <><FiSend size={16} /> Send Message</>}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Google Maps placeholder */}
        <div className="mt-5">
          <div className="map-placeholder">
            <div className="map-placeholder-inner">
              <FiMapPin size={32} opacity={0.4} />
              <p>Uk</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-hero-outline">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
