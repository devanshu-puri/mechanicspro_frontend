import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import companyLogo from '../assets/logo.jpg';
import { API_URL } from '../Api/Apiurl';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const role = "user";

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          type:role
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const result = await response.json();
      console.log('Success:', result);

      // Redirect to login
      navigate('/login');

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Top Bar */}
      <div className="bg-black py-3">
        <div className="container d-flex flex-column align-items-center">
          <img src={companyLogo} alt="Company Logo" style={{ height: '60px' }} />
          <h4>
            <span style={{ color: 'white' }}>Mechanic</span>
            <span style={{ color: 'darkorange' }}>Pro</span>
          </h4>
        </div>
      </div>

      {/* Register Form */}
      <div className="container d-flex align-items-center justify-content-center flex-grow-1">
        <div className="card shadow p-4 w-100" style={{ maxWidth: '400px' }}>
          <h4 className="text-center mb-4" style={{ color: '#e65100', fontWeight: 'bold' }}>
            REGISTER / SIGN UP
          </h4>

          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email ID"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Create your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: '#e65100',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Register
            </button>

            <p className="text-center mt-3" style={{ fontSize: '0.9rem' }}>
              Already have an account?{' '}
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

export default Register;
