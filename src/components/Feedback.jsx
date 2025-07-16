// Feedback.jsx
import React, { useEffect, useState } from "react";
import { API_URL } from '../Api/Apiurl';
const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch(`${API_URL}/api/feedbacks`);
        if (!res.ok) throw new Error("Failed to fetch feedbacks");
        const data = await res.json();
        setFeedbacks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="bg-dark py-4 text-white">
      <div className="container">
        <h5 className="fw-bold text-center mb-4">What our Customers are saying</h5>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-danger text-center">{error}</div>
        ) : feedbacks.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 180 }}>
            <div className="text-center p-4 bg-secondary rounded-3 shadow-sm" style={{ opacity: 0.95 }}>
              <img src="https://cdn-icons-png.flaticon.com/512/7486/7486790.png" alt="No Feedback" width="60" height="60" style={{ opacity: 0.7 }} />
              <div className="fw-bold mt-3 mb-1" style={{ fontSize: 20 }}>No Feedback Found</div>
              <div className="text-light small">Be the first to share your experience!</div>
            </div>
          </div>
        ) : (
          <div
            className="d-flex gap-3 pb-2"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
              WebkitOverflowScrolling: "touch", // Smooth scroll
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              {feedbacks.map((review, i) => (
                <div
                  key={review._id || i}
                  className="card text-dark p-3"
                  style={{
                    minWidth: "280px",
                    maxWidth: "280px",
                    flex: "0 0 auto",
                    borderRadius: "10px",
                    backgroundColor: "#f97316",
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={
                        review.img && !review.img.startsWith("http")
                          ? `${API_URL}/${review.img.replace(/\\/g, "/")}`
                          : review.img || "https://randomuser.me/api/portraits/men/32.jpg"
                      }
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                      alt="User"
                    />
                    <div><strong>{review.name}</strong></div>
                  </div>
                  <p className="mb-1 small">{review.text}</p>
                  <small className="text-end d-block">Reviewed on {review.date}</small>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
