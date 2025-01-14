import React, { useState, useEffect } from 'react';
import '../styles/ContactUs.css';
import emailjs from '@emailjs/browser';

function ContactUs() {
useEffect(() => {
    document.title = "Contact US | Vidor Cricket Club";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        return '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return 'Email is required.';
        if (!emailRegex.test(value)) return 'Invalid email address.';
        return '';
      case 'phone':
        const phoneRegex = /^\d{10}$/;
        if (!value.trim()) return 'Phone number is required.';
        if (!phoneRegex.test(value)) return 'Invalid phone number.';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required.';
        return '';
      case 'inquiryType':
        if (!value.trim()) return 'Please select an inquiry type.';
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      validationErrors[key] = validateField(key, formData[key]);
    });

    if (Object.values(validationErrors).some((error) => error)) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        'service_k244tuj',
        'template_w80dtt4',
        formData,
        '3DAgSV3nrVFDZZVq5'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '', inquiryType: '' });
          setIsSubmitting(false);
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          console.error('EmailJS Error:', error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="contact-us">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>All enquiries welcome. Get in touch with us using the form below.</p>
      </header>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <div className="form-group">
            <label>
              Inquiry Type <span className="required">*</span>
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select an option</option>
              <option value="Join Team">Join Team</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Other">Other</option>
            </select>
            {errors.inquiryType && <p className="error-text">{errors.inquiryType}</p>}
          </div>
          <div className="form-group">
            <label>
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
           <div className="form-group">
               <label>Phone Number</label>
               <input
               type="tel"
               name="phone"
               placeholder="Enter your phone number"
               value={formData.phone}
               onChange={handleInputChange}
               />
                {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
          <div className="form-group">
            <label>
              Message <span className="required">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="animate-bounceIn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;