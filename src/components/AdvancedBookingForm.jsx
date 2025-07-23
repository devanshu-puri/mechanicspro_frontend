import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../Api/Apiurl';

const AdvancedBookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [carModel, setCarModel] = useState('');
  const [service, setService] = useState('');
  const [price, setPrice] = useState('');
  const [garageServices, setGarageServices] = useState([]);
  const [garage, setGarage] = useState('');
  const [garageId, setGarageId] = useState('');
  const [allGarages, setAllGarages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [qrCodeFile, setQrCodeFile] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`${API_URL}/api/garages/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setGarageServices(data.GarageServices || []);
          setGarage(data.GarageName || '');
          setGarageId(data._id);
        })
        .catch((err) => console.error('Failed to fetch garage data', err));
    } else {
      fetch(`${API_URL}/api/garages`)
        .then((res) => res.json())
        .then((data) => setAllGarages(data))
        .catch((err) => console.error('Failed to fetch all garages', err));
    }
  }, [id]);

  useEffect(() => {
    const selectedService = garageServices.find((s) => s.ServiceName === service);
    if (selectedService) {
      setPrice(selectedService.ServicePrice);
    } else {
      setPrice('');
    }
  }, [service, garageServices]);

  const handleGarageSelect = (e) => {
    const selectedId = e.target.value;
    const selectedGarage = allGarages.find((g) => g._id === selectedId);
    if (selectedGarage) {
      setGarageId(selectedGarage._id);
      setGarage(selectedGarage.GarageName);
      setGarageServices(selectedGarage.GarageServices);
      setService('');
      setPrice('');
    }
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!name || !email || !carModel || !service || !garageId) {
      alert('Please fill all required fields.');
      return;
    }
    setShowModal(true);
  };

  const handleConfirmPayment = () => {
    if (!transactionId.trim()) {
      alert('Please enter the Transaction ID.');
      return;
    }
    if (!qrCodeFile) {
      alert('Please upload the QR code image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('carModel', carModel);
    formData.append('garage', garage);
    formData.append('garageId', garageId);
    formData.append('service', service);
    formData.append('price', price);
    formData.append('transactionId', transactionId);
    formData.append('qrCodeImage', qrCodeFile);

    fetch(`${API_URL}/api/payment`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to submit booking');
        return res.json();
      })
      .then((data) => {
        alert('Payment & Booking Successful!');
        setShowModal(false);
        setTransactionId('');
        setQrCodeFile(null);
      })
      .catch((error) => {
        alert(error.message || 'Error submitting booking');
      });
  };

  return (
    <div className="container py-5 position-relative">
      <h5 className="fw-bold text-center mb-4">
        Book Now [{id ? `GarageID: ${id}` : 'Choose Garage'}]
      </h5>

      <form className="row g-3" onSubmit={handleConfirmBooking}>
        {!id && (
          <div className="col-md-6">
            <select
              className="form-select"
              required
              value={garageId}
              onChange={handleGarageSelect}
            >
              <option value="">Choose Garage</option>
              {allGarages.map((g) => (
                <option key={g._id} value={g._id}>
                  {g.GarageName} - {g.zone}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Car Model"
            required
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            disabled={!garageServices.length}
          >
            <option value="">Choose Service</option>
            {garageServices.map((svc) => (
              <option key={svc._id} value={svc.ServiceName}>
                {svc.ServiceName}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            value={price}
            readOnly
          />
        </div>
        <div className="col-12">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Additional Notes"
          ></textarea>
        </div>
        <div className="col-12 text-center">
          <button
            type="submit"
            className="btn btn-warning px-4"
            style={{ backgroundColor: '#f97316' }}
          >
            Confirm & Pay
          </button>
        </div>
      </form>

      {/* === Payment Modal === */}
      {showModal && (
  <div
    className="modal fade show d-block"
    tabIndex="-1"
    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content p-3">
        <div className="modal-header">
          <h5 className="modal-title">Payment</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>

        <div className="modal-body text-center">
          <p className="fw-bold" style={{ color: "black" }}>
            Amount: ₹{price}
          </p>

          {/* ✅ Dynamic QR code based on UPI */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(`upi://pay?pa=mechanicpro@ybl&pn=Admin&am=${price}&cu=INR`)}`}
            alt="QR Code"
            className="img-fluid mb-3"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={(e) => setQrCodeFile(e.target.files[0])}
          />
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-success w-100"
            onClick={handleConfirmPayment}
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  </div>
      )}
    </div>
  );
};

export default AdvancedBookingForm;
