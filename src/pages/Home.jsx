import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Feedback from "../components/Feedback";
import ChooseUs from "../components/ChooseUs";
import "bootstrap/dist/css/bootstrap.min.css";
import AdvancedBookingForm from "../components/AdvancedBookingForm";
import Footer from "../components/Footer";
import { API_URL } from "../Api/Apiurl";

const Home = () => {
  const navigate = useNavigate();

  // State to hold zones fetched from API
  const [zones, setZones] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch zones from API
  useEffect(() => {
    async function fetchZones() {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/zones`);
        if (!response.ok) throw new Error("Failed to fetch zones");
        const data = await response.json();
        setZones(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchZones();
  }, []);

  // Filter zones based on search term
  const filteredZones = zones.filter(
    (zone) =>
      zone.zoneName &&
      zone.zoneName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAreaClick = (name, img) => {
    navigate(`/area/${encodeURIComponent(name)}/${encodeURIComponent(img)}`);
  };

  return (
    <>
      <Header />
      
      <div
  className="hero-section d-flex align-items-center justify-content-center text-white"
  style={{
    backgroundImage: `url(${require('../assets/garage1.jpg')})`, // adjust path if needed
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}
>
  <div className="text-center px-3">
    <span className="badge bg-warning text-dark fw-semibold mb-3">
      #1 Best Services In India
    </span>
    <h1 className="fw-bold display-5 mb-2">Best Car Repair & Maintenance</h1>
    <p className="lead mb-4">One-Click away Services Are Here!</p>
    <div className="d-flex justify-content-center gap-3 flex-wrap">
  <a
    href="/book"
    className="btn btn-lg fw-semibold"
    style={{
      backgroundColor: "#ff6b00",  // Custom orange
      color: "white",
      border: "none",
    }}
  >
    Book Now <i className="bi bi-send ms-1"></i>
  </a>
  <a
    href="/services"
    className="btn btn-lg fw-semibold"
    style={{
      backgroundColor: "transparent",
      color: "white",
      border: "2px solid white",
    }}
  >
    Services
  </a>
</div>

  </div>
</div>


      {/* Zones Near You Section */}
      <div className="container-fluid my-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold">Zones near you</h4>
            <div className="d-none d-md-block">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ maxWidth: "250px" }}
              />
            </div>
          </div>

          {loading && <p>Loading zones...</p>}
          {error && <p className="text-danger">Error: {error}</p>}

          {!loading && !error && (
            <div
              className="d-flex gap-3 pb-2"
              style={{
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {filteredZones.map((zone, index) => (
                <div
                  key={index}
                  className="position-relative rounded overflow-hidden shadow-sm area-card flex-shrink-0"
                  style={{
                    minWidth: "250px",
                    height: "220px",
                    backgroundImage: `url(${API_URL}/${zone.zoneImage.replaceAll(
                      "\\",
                      "/"
                    )})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onClick={() =>
                    handleAreaClick(
                      zone.zoneName,
                      `${API_URL}/${zone.zoneImage}`
                    )
                  }
                >
                  <div className="position-absolute top-0 start-0 m-2 text-warning">
                    {"★".repeat(5)}
                  </div>
                  <div className="position-absolute top-0 end-0 m-2">
                    <i className="bi bi-heart-fill text-white"></i>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h5 className="fw-bold">{zone.zoneName}</h5>
                  </div>
                  <div className="position-absolute bottom-0 start-0 m-2 text-white small">
                    Service • 1-2 miles
                  </div>
                </div>
              ))}
            </div>
          )}

          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
              .area-card:hover {
                transform: scale(1.05);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
              }
            `}
          </style>
        </div>
      </div>

      <ChooseUs />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
