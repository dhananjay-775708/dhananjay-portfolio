import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
  
}

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, wire this up to an email service (EmailJS, Formspree, etc.)
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>

        <div className="contact-grid">
          {/* Info Cards */}
          <div className="contact-info">
            <p className="contact-intro">
              I'm currently open to new opportunities and collaborations.
              Whether you have a project idea, a question, or just want to say hi —
              my inbox is always Open
            </p>

            <div className="contact-cards">
              <a href="https://www.linkedin.com/in/dhananjay-suradkar-b8b8a132a/" target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <div>
                  <div className="contact-card-label">LinkedIn</div>
                  <div className="contact-card-value">Dhananjay Suradkar</div>
                </div>
              </a>

              <a href="https://github.com/dhananjay-775708" target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </span>
                <div>
                  <div className="contact-card-label">GitHub</div>
                  <div className="contact-card-value">dhananjay-775708</div>
                </div>
              </a>

              <a href="mailto:dhananjay@example.com" className="contact-card">
                <span className="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">dhananjay@example.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Dhananjay Suradkar"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Hi! I'd love to collaborate on..."
                value={form.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary contact-submit">
              {sent ? '✅ Message Sent!' : 'Send Message'}
              {!sent && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
