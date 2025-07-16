import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Feedback from "../components/Feedback";
import AdvancedBookingForm from "../components/AdvancedBookingForm";
import { API_URL } from '../Api/Apiurl';

const GarageDetailPage = () => {
  const navigate = useNavigate();

  // State for garage data
  const [garageData, setGarageData] = useState(null);
   const { id } = useParams();

  // Fetch data using Fetch API
  useEffect(() => {
    fetch(`${API_URL}/api/garages/${id}`)
      .then(res => res.json())
      .then(data => {
        setGarageData(data);
      })
      .catch(err => {
        console.error("Error fetching garage data:", err);
      });
  }, [id]);

  if (!garageData) return <div className="text-center py-5">Loading...</div>;

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="position-relative text-white text-center"
        style={{
          height: "300px",
          backgroundImage: `url(${API_URL}/${garageData.GarageMainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-absolute top-50 start-50 translate-middle">
          <h2 className="fw-bold">{garageData.GarageName}</h2>
        </div>
      </div>

      {/* Images/Videos Section */}
      <div className="container py-4">
        <h5 className="fw-bold mb-3">Images/Videos</h5>
        <div className="row g-2">
          {garageData.GarageImage.map((img, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="rounded overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={`${API_URL}/${img}`}
                  alt={`Garage Preview ${i + 1}`}
                  className="img-fluid h-100 w-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div style={{ backgroundColor: "#f97316" }} className="py-4">
        <div className="container text-center">
          <h5 className="fw-bold text-white mb-3">We Are Right Here!</h5>
          <iframe
            title="garage-map"
            src={garageData.GarageLocation}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-4">
        <h5 className="fw-bold mb-3 text-center">Services</h5>
        <div className="d-flex overflow-auto">
          {garageData.GarageServices.map((service, i) => (
            <div key={i} className="card mx-2" style={{ minWidth: "180px" }}>
              <div style={{ height: "150px", overflow: "hidden" }}>
                <img
                  src={`${API_URL}/${service.ServiceImage}`}
                  className="w-100 h-100"
                  alt={service.ServiceName}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-body text-center">
                <p className="card-text small fw-bold">{service.ServiceName}</p>
                <p className="card-text small text-muted">₹{service.ServicePrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <Feedback />

      {/* Booking Section */}
      <AdvancedBookingForm />
    </>
  );
};

export default GarageDetailPage;
