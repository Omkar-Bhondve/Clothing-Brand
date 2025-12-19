import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="fade-in">Get in Touch</h1>
          <p className="hero-subtitle fade-in">
            We'd love to hear from you. Let's connect.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="mb-md">Send Us a Message</h2>
              <p className="mb-lg">
                Have a question, feedback, or just want to say hi? Fill out the
                form below and we'll get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="success-message">
                  <p>✓ Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <h2 className="mb-md">Contact Information</h2>

              <div className="info-card">
                <div className="info-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:contact@omiicollections.com">
                    contact@omiicollections.com
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <h4>Instagram</h4>
                  <a
                    href="https://instagram.com/omiicollections"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @omiicollections
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </div>
                <div>
                  <h4>TikTok</h4>
                  <a
                    href="https://tiktok.com/@omiicollections"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @omiicollections
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div>
                  <h4>YouTube</h4>
                  <a
                    href="https://youtube.com/@omiicollections"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @omiicollections
                  </a>
                </div>
              </div>

              <div className="business-hours">
                <h3 className="mb-md">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section bg-soft-gray">
        <div className="container">
          <div className="section-header text-center mb-xl">
            <h2 className="mb-md">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long does shipping take?</h4>
              <p>
                We offer free standard shipping on all orders, which typically
                takes 5-7 business days. Express shipping is available for an
                additional fee.
              </p>
            </div>

            <div className="faq-item">
              <h4>What's your return policy?</h4>
              <p>
                We accept returns within 30 days of purchase for unworn items
                with tags attached. Visit our Returns page for more details.
              </p>
            </div>

            <div className="faq-item">
              <h4>Do you ship internationally?</h4>
              <p>
                Yes! We ship to over 50 countries worldwide. International
                shipping times vary by location.
              </p>
            </div>

            <div className="faq-item">
              <h4>How do I track my order?</h4>
              <p>
                Once your order ships, you'll receive a tracking number via
                email. You can use this to track your package.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
