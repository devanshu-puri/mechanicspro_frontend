import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from '../components/Header';

const PaymentQR = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, name, service } = location.state || {};

  const [transactionId, setTransactionId] = useState("");

  const adminUpiId = "vasanthvnr31@oksbi"; // Admin UPI ID (Replace with real one)

  // Generate UPI URL dynamically
  const upiUrl = `upi://pay?pa=${adminUpiId}&pn=Admin&am=${amount}&cu=INR`;

  // Generate QR code URL dynamically
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUrl)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (transactionId.trim() === "") {
      alert("Please enter the Transaction ID after making payment.");
      return;
    }

    // Create booking object
    const newBooking = {
      name,
      service,
      amount,
      transactionId,
      date: new Date().toLocaleDateString(),
    };

    // Get existing bookings
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Update bookings list
    const updatedBookings = [...existingBookings, newBooking];

    // Save updated bookings back to localStorage
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    alert(`Payment Successful!\nTransaction ID: ${transactionId}`);

    
  };

  return (
    <>
    <Header />
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="mb-0">Complete Your Payment</h4>
            </div>

            <div className="card-body text-center">
              <p className="fw-bold mb-2">Scan this QR to pay</p>

              {/* QR Code */}
              <div className="mb-3">
                <img
                  src={qrCodeUrl}
                  alt="UPI QR"
                  className="img-fluid rounded"
                />
              </div>

              {/* Payment Info */}
              <div className="mb-4">
                <h5 className="fw-bold mb-2">Amount: ₹{amount ? amount.toFixed(2) : "0.00"}</h5>
                <p className="mb-0"><strong>UPI ID:</strong> {adminUpiId}</p>
                <p><strong>Service:</strong> {service}</p>
                <p><strong>User Name:</strong> {name}</p>
              </div>

              {/* Transaction ID Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Enter Transaction ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your UPI Transaction ID"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success btn-lg px-4">
                  Submit Payment
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaymentQR;
