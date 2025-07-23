import React, { useState } from 'react';
<<<<<<< HEAD
import { API_URL } from '../Api/Apiurl';
import "../Styles/Contact.css";
import mapImage from '../assets/map.jpg';

=======
import {API_URL} from '../Api/Apiurl';
>>>>>>> f390404e8bfa606436d2b317729391df70e3f716

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
<<<<<<< HEAD
        headers: { 'Content-Type': 'application/json' },
=======
        headers: {
          'Content-Type': 'application/json'
        },
>>>>>>> f390404e8bfa606436d2b317729391df70e3f716
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
<<<<<<< HEAD
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

=======
    <div className="container py-5">
      <h5 className="text-center text-muted mb-1">We’re available 24/7 for you</h5>
      <h3 className="text-center fw-bold mb-4">
        For any query/problems fill this form
      </h3>

      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="col-12">
          <label className="form-label fw-semibold">Name <span className="text-danger">*</span></label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Email */}
        <div className="col-12">
          <label className="form-label fw-semibold">Email <span className="text-danger">*</span></label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Mobile Number */}
        <div className="col-12">
          <label className="form-label fw-semibold">Mobile Number <span className="text-danger">*</span></label>
          <input
            type="text"
            name="mobileNumber"
            className="form-control"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        {/* Message */}
        <div className="col-12">
          <label className="form-label fw-semibold">Your Message <span className="text-danger">*</span></label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary px-4">
            Submit Form
          </button>
        </div>
      </form>
>>>>>>> f390404e8bfa606436d2b317729391df70e3f716
    </div>
  );
};

export default Contact;
