import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../assets/logo.jpg'; // Adjust path if needed

const ForgetPassword = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">

      {/* Top Black Bar */}
      <div className="bg-black py-3">
        <div className="container d-flex flex-column align-items-center">
          <img src={companyLogo} alt="Company Logo" style={{ height: '60px' }} />
          <h4>
            <span style={{ color: 'white' }}>Mechanic</span>
            <span style={{ color: 'darkorange' }}>Pro</span>
          </h4>
        </div>
      </div>

      {/* Forget Password Form */}
      <div className="container d-flex align-items-center justify-content-center flex-grow-1">
        <div className="card shadow p-4 w-100" style={{ maxWidth: '400px' }}>
          
          {/* Title */}
          <h4 className="text-center mb-4" style={{ color: '#e65100', fontWeight: 'bold' }}>
            FORGOT PASSWORD
          </h4>

          {/* Form */}
          <form action="/">
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your registered email ID"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-2">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your registered phone number"
              />
            </div>

            {/* Get OTP Button */}
            <div className="mb-3 text-end">
              <button
                type="button"
                className="btn btn-sm"
                style={{
                  backgroundColor: '#e65100',
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                Get OTP
              </button>
            </div>

            {/* OTP Field */}
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">Enter OTP</label>
              <input
                type="text"
                className="form-control"
                id="otp"
                placeholder="Enter OTP"
              />
            </div>

            {/* New Password Field */}
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                placeholder="Create a new password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: '#e65100',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Reset Password
            </button>

            {/* Back to Login */}
            <p className="text-center mt-3" style={{ fontSize: '0.9rem' }}>
              Remembered your password?{' '}
              <Link to="/login" style={{ color: '#e65100', fontWeight: 'bold' }}>
                Login
              </Link>
            </p>

          </form>
        </div>
      </div>

    </div>
  );
};

export default ForgetPassword;
