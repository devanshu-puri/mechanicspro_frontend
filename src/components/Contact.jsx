import React, { useState } from 'react';
import { API_URL } from '../Api/Apiurl';
import "../Styles/Contact.css";
import mapImage from '../assets/map.jpg';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', mobileNumber: '', message: '' });
      } else {
        alert('Something went wrong. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error.');
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-heading">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out via phone, email, or the form below!</p>
      </div>

      <div className="contact-grid">
        {/* Left: Form */}
        <div className="contact-form-card">
          <h5>Get in Touch</h5>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Enter your name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="mobileNumber"
                placeholder="Enter your phone number*"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message*"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
            <button type="submit" className="send-button">SEND MESSAGE</button>
          </form>
        </div>

        {/* Right: Info Cards */}
        <div className="contact-info-card">
          <div className="info-section">
            {/* Contact Info */}
            <div className="info-box">
              <h6>Contact Information</h6>
              <div className="info-pair">
                <div>
                  <p><strong>📞 Phone:</strong></p>
                  <p>773-365-1240</p>
                </div>
                <div>
                  <p><strong>📍 Address:</strong></p>
                  <p>1425 N McLean Blvd. Elgin, IL</p>
                </div>
              </div>
              <div className="info-single">
                <p><strong>📧 Email:</strong> office@steponetrans.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="info-box">
              <h6>Business Hours</h6>
              <div className="hours-grid">
                <div>
                  <p><strong>Monday - Friday</strong></p>
                  <p>9:00 am - 8:00 pm</p>
                </div>
                <div>
                  <p><strong>Saturday</strong></p>
                  <p>9:00 am - 6:00 pm</p>
                </div>
                <div>
                  <p><strong>Sunday</strong></p>
                  <p>9:00 am - 5:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Map Image */}
      <div className="map-container">
        <img src={mapImage} alt="Map" />
      </div>

    </div>
  );
};

export default Contact;
