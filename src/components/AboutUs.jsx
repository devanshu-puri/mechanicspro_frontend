import React from 'react';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import Header from "../components/Header";
import Footer from './Footer';
const AboutUs = () => {
    return (
       <>
        <Header />
    <div className="bg-light py-5">
      <h2 className="text-center fw-bold mb-4">About Us</h2>

      <div className="container">
        {/* Top Row: Image and Description */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
            src={service1} // replace with your image path
              className="img-fluid rounded"
              alt="Mechanic working"
            />
          </div>
          <div className="col-md-6">
            <p className="text-justify">
              At <strong>Mechanic Pro</strong>, we are committed to delivering reliable, high-quality vehicle maintenance
              and repair services that you can trust. Our team of skilled and certified technicians is dedicated to
              keeping your car running at its best. From routine oil changes and tire replacements to complex engine
              repairs and diagnostics, we offer a wide range of services to meet all your vehicle’s needs. <br /><br />
              With a focus on convenience, we provide easy online booking, flexible scheduling, and even mobile mechanic
              services that come directly to you. Choose Mechanical Pro for all your vehicle service needs!
            </p>
          </div>
        </div>

        {/* Testimonial and Mechanic Photo */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="fw-medium">
              “Fantastic first experience with Mechanical Pro! Easy booking, professional service, and my car runs
              perfectly!”
            </p>
            <p className="mb-0 fw-bold">K. Arjuna</p>
            <small className="text-muted">First Customer</small>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={service2} // replace with your image path
              className="img-fluid rounded"
              alt="Mechanic"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="text-center">
          <a href="/privacy" className="btn btn-warning me-2 mb-2">
            Privacy Policy
          </a>
          <a href="/terms" className="btn btn-warning mb-2">
            Terms & Conditions
          </a>
        </div>
      </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
