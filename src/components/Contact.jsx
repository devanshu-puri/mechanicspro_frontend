import React, { useState } from 'react';
import {API_URL} from '../Api/Apiurl';

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
        headers: {
          'Content-Type': 'application/json'
        },
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
    </div>
  );
};

export default Contact;
