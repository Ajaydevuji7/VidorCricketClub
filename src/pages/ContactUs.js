import React, { useState } from 'react';
import '../styles/ContactUs.css';
import contactLogo from '../assets/contact-us.jpg'

function ContactUs() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toggleChat = () => setChatOpen(!isChatOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Details:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setChatOpen(false);
  };

  return (
    <div className="contact-us">
      <header className="contact-header">
        <img src={contactLogo} alt="Contact Us" className="contact-image" />
        <h1>Contact Us</h1>
        <p>Reach out to Vidor Cricket Club for player sign-ups, partnerships, or general inquiries. We're always happy to hear from cricket enthusiasts!</p>
        <div className="contact">
          <p>
            Want to join us? Contact us at{' '}
            <a href="tel:+16572547365">+1 (657) 254-7365</a> or visit us on{' '}
            <a
              href="https://www.instagram.com/vidorcricketclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram Logo"
                className="instagram-logo"
              />
            </a>
          </p>
        </div>
      </header>

      <div className={`chat-box ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
        <span className="chat-text">Message Us</span>
      </div>

      {isChatOpen && (
        <div className="chat-form">
          <h3>Drop Your Details</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ContactUs;