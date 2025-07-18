import React from 'react';
import companyLogo from '../assets/logo.jpg'; // Adjust the path to your uploaded logo

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '2rem 0', marginTop: '2rem' }}>
      <div className="container text-center">
        <div className="row justify-content-center">
          
          {/* Quick Links */}
          <div className="col-6 col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/pricing" className="text-white text-decoration-none">Pricing</a></li>
              <li><a href="/discover" className="text-white text-decoration-none">Discover</a></li>
              <li><a href="/testimonials" className="text-white text-decoration-none">Testimonials</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
            </ul>
          </div>

          {/* Others */}
          <div className="col-6 col-md-2 mb-4">
            <h5>Others</h5>
            <ul className="list-unstyled">
              <li><a href="/faqs" className="text-white text-decoration-none">FAQs</a></li>
              <li><a href="/terms" className="text-white text-decoration-none">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="/blog" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="/how-it-works" className="text-white text-decoration-none">How it works</a></li>
            </ul>
          </div>

          {/* Center Logo and Name */}
          <div className="col-12 col-md-4 mb-4 d-flex flex-column align-items-center">
            <img src={companyLogo} alt="Company Logo" style={{ width: '80px', marginBottom: '10px' }} />
            <h4>
              <span style={{ color: 'white' }}>Mechanic</span>
              <span style={{ color: 'darkorange' }}>Pro</span>
            </h4>
          </div>

          {/* Socials */}
          <div className="col-6 col-md-2 mb-4">
            <h5>Socials</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Twitter</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">YouTube</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-6 col-md-2 mb-4">
            <h5>Contact Details</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:support@carzone.com" className="text-white text-decoration-none">support@carzone.com</a></li>
              <li><a href="tel:+15551234607" className="text-white text-decoration-none">+1 (555) 123-4607</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-4" style={{ fontSize: '0.9rem' }}>
          Copyright © 2025 CarZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
