// src/app/(components)/sections/ContactSection.jsx
'use client'; // For form handling
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    try {
      const response = await fetch('/api/contact', { // API route we'll create
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: result.message || 'Your message has been sent. Thank you!', error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus({ loading: false, error: result.message || 'An error occurred. Please try again.', success: '' });
      }
    } catch (err) {
      setStatus({ loading: false, error: 'An unexpected error occurred. Please try again.', success: '' });
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Let's connect! I'm always open to discussing new projects...</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              {/* ... info items ... */}
               <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div><h3>Address</h3><p>A108 Adam Street, New York, NY 535022</p></div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div><h3>Call Us</h3><p>+1 5589 55488 55</p></div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div><h3>Email Us</h3><p>info@example.com</p></div>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameBorder="0" style={{ border:0, width: '100%', height: '270px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" id="message-field" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  {status.loading && <div className="loading">Loading</div>}
                  {status.error && <div className="error-message">{status.error}</div>}
                  {status.success && <div className="sent-message">{status.success}</div>}
                  <button type="submit" disabled={status.loading}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}