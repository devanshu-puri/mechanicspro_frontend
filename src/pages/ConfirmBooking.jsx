import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, carModel, service } = location.state || {};

  // Garage Name (static for now)
  const garageName = "CarZone Garage";

  // Example Pricing
  const baseAmount = 1000;
  const gst = baseAmount * 0.18; // 18% GST
  const totalAmount = baseAmount + gst;
  const advancePayment = totalAmount * 0.3; // 30% advance payment

  const handlePayNow = () => {
    navigate("/paymentqr", {
      state: {
        amount: advancePayment,
        name: name,
        service: service,
      }
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-header bg-dark text-white text-center">
              <h4 className="mb-0">Booking Confirmation</h4>
            </div>
            <div className="card-body">
              
              {/* User & Garage Details */}
              <div className="mb-3">
                <h5 className="fw-bold mb-3 text-center text-uppercase">User Details</h5>
                <div className="row mb-2">
                  <div className="col-6"><strong>Name:</strong></div>
                  <div className="col-6">{name}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-6"><strong>Email:</strong></div>
                  <div className="col-6">{email}</div>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-3 text-center text-uppercase">Garage Details</h5>
                <div className="row mb-2">
                  <div className="col-6"><strong>Garage Name:</strong></div>
                  <div className="col-6">{garageName}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-6"><strong>Selected Service:</strong></div>
                  <div className="col-6">{service}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-6"><strong>Car Model:</strong></div>
                  <div className="col-6">{carModel}</div>
                </div>
              </div>

              <hr />

              {/* Pricing Details */}
              <div className="mb-3">
                <h5 className="fw-bold mb-3 text-center text-uppercase">Pricing</h5>
                <div className="row mb-2">
                  <div className="col-6"><strong>Service Amount:</strong></div>
                  <div className="col-6">₹{baseAmount.toFixed(2)}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-6"><strong>GST (18%):</strong></div>
                  <div className="col-6">₹{gst.toFixed(2)}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-6"><strong>Total Amount:</strong></div>
                  <div className="col-6 fw-bold text-success">₹{totalAmount.toFixed(2)}</div>
                </div>
                <div className="row">
                  <div className="col-6"><strong>Advance Payment (30%):</strong></div>
                  <div className="col-6 fw-bold text-danger">₹{advancePayment.toFixed(2)}</div>
                </div>
              </div>

              <div className="text-center mt-4">
                <button onClick={handlePayNow} className="btn btn-success btn-lg px-5">
                  Pay Now
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
