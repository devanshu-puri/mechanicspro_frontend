import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import companyLogo from '../assets/logo.jpg';
import { API_URL } from '../Api/Apiurl';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      const userData = data.user
      if(userData.type === "admin"){
        navigate("/admin")
      }
      else if(userData.type === "user"){
        navigate("/")
      }
      localStorage.setItem("userData",data.user)
    } catch (err) {
      setError(err.message);
    }
  };

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

      {/* Login Form */}
      <div className="container d-flex align-items-center justify-content-center flex-grow-1">
        <div className="card shadow p-4 w-100" style={{ maxWidth: '400px' }}>
          <h4 className="text-center mb-4" style={{ color: '#e65100', fontWeight: 'bold' }}>
            LOGIN / SIGN IN
          </h4>

          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email ID"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="d-flex justify-content-end mb-3">
              <Link to="/forgot-password" style={{ color: '#e65100', fontSize: '0.9rem' }}>
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: '#e65100',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Login
            </button>

            {/* Signup */}
            <p className="text-center mt-3" style={{ fontSize: '0.9rem' }}>
              Don&apos;t have an account?{' '}
              <Link to="/signup" style={{ color: '#e65100', fontWeight: 'bold' }}>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
