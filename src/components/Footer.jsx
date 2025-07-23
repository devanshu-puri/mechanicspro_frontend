import React from 'react';
import './Footer.css';
import companyLogo from '../assets/logo.jpg'; // adjust path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Quick Links */}
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/discover">Discover</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Others */}
        <div className="footer-section">
          <h5>Others</h5>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/how-it-works">How it works</a></li>
          </ul>
        </div>

        {/* Logo */}
        <div className="footer-logo">
          <img src={companyLogo} alt="Company Logo" />
          <h4><span style={{ color: 'white' }}>Mechanic</span><span style={{ color: 'darkorange' }}>Pro</span></h4>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h5>Socials</h5>
          <ul>
            <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
            <li><a href="https://youtube.com" target="_blank">YouTube</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:support@carzone.com">support@carzone.com</a></li>
            <li><a href="tel:+15551234607">+1 (555) 123-4607</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 CarZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
