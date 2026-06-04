import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_CONTACT_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY');
      setSent(true);
      setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
    } catch {
      setError('Failed to send. Please email us directly at exports@akshyaaglobal.com');
    } finally {
      setSending(false);
    }
  };

  const update = (field: string, val: string) => setForm((prev) => ({ ...prev, [field]: val }));

  const contactInfo = [
    { icon: FiPhone, label: 'Call Us', value: '+91 99999 99999', href: 'tel:+919999999999' },
    { icon: FiMail, label: 'Email Us', value: 'exports@akshyaaglobal.com', href: 'mailto:exports@akshyaaglobal.com' },
    { icon: FaWhatsapp, label: 'WhatsApp', value: '+91 99999 99999', href: 'https://wa.me/919999999999' },
    { icon: FiMapPin, label: 'Office Address', value: '123 Export Hub, Guntur, AP - 522001, India', href: '#' },
    { icon: FiClock, label: 'Working Hours', value: 'Mon–Sat: 9 AM – 7 PM IST', href: '#' },
  ];

  return (
    <main className="page-main">
      <div className="page-hero-banner page-hero-sm">
        <div className="page-hero-overlay" />
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400')`,
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
              <p>123 Export Hub, Guntur, Andhra Pradesh - 522001, India</p>
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
