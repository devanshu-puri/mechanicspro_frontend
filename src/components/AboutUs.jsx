<<<<<<< HEAD
import React from "react";
import aboutImage from "../assets/about.png";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-container" style={{ backgroundColor: "#ffffff", padding: "2rem 1rem" }}>
      <div className="max-width" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading Section */}
        <div className="heading-section" style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1>About Us</h1>
          <p style={{ fontSize: "1rem", maxWidth: "800px", margin: "1rem auto", color: "#444" }}>
            We’re more than just a garage — we’re your EV partners. At Mechanic Pro, we believe every vehicle deserves expert hands and honest service.
            Whether it’s a breakdown, a battery swap, or a full service, our certified team is ready to assist — wherever you are.
          </p>
        </div>

        {/* Main Flex Section */}
        <div
          className="about-main"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* Left Text Content */}
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "#0e0e10" }}>
              Why Choose Mechanic Pro?
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "1rem", color: "#333333" }}>
              <strong>Mechanic Pro</strong> is built for the fast-moving EV world. We understand the value of time and reliability.
              Our services range from diagnostics and repairs to full EV fleet maintenance — all powered by trained professionals.
            </p>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ color: "#ff3e00", fontWeight: "600", marginBottom: "0.5rem" }}>Our Values</h3>
              <ul style={{ paddingLeft: "1rem", lineHeight: "1.7", color: "#444444" }}>
                <li>✔ Transparent Pricing</li>
                <li>✔ Mobile On-Demand Repairs</li>
                <li>✔ Same-Day Service</li>
                <li>✔ Safety and Satisfaction First</li>
              </ul>
            </div>
          </div>

          {/* Right Image Box */}
          <div
            style={{
              flex: "1 1 400px",
              textAlign: "center",
              backgroundColor: "#ff3e00",
              padding: "1rem",
              borderRadius: "16px",
              boxShadow: "0 0 20px rgba(255, 62, 0, 0.2)",
            }}
          >
            <img
              src={aboutImage}
              alt="Mechanics working"
              style={{
                maxWidth: "100%",
                borderRadius: "12px",
                boxShadow: "0 0 12px rgba(0,0,0,0.2)",
              }}
=======
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
>>>>>>> f390404e8bfa606436d2b317729391df70e3f716
            />
          </div>
        </div>

<<<<<<< HEAD
        {/* Customer Quote */}
        <div className="testimonial" style={{ marginTop: "4rem", textAlign: "center" }}>
          <p style={{ fontStyle: "italic", color: "#333", fontSize: "1.1rem" }}>
            “Fantastic first experience with Mechanic Pro! The technician arrived quickly, explained everything clearly, and fixed my EV within an hour.
            Highly recommend!”
          </p>
          <p style={{ marginTop: "1rem", fontWeight: "600", color: "#0e0e10" }}>— K. Arjuna, First Customer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
=======
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
>>>>>>> f390404e8bfa606436d2b317729391df70e3f716
