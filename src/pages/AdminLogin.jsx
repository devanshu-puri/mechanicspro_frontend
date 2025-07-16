import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import companyLogo from "../assets/logo.jpg";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, name } = formData;

    // Hardcoded admin login validation
    if (email === "mechanicpro@JNN" && password === "15102004") {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Top Black Bar */}
      <div className="bg-black py-3">
        <div className="container d-flex flex-column align-items-center">
          <img
            src={companyLogo}
            alt="Company Logo"
            style={{ height: "60px" }}
          />
          <h4>
            <span style={{ color: "white" }}>Mechanic</span>
            <span style={{ color: "darkorange" }}>Pro</span>
          </h4>
        </div>
      </div>

      {/* Login Form */}
      <div className="container d-flex align-items-center justify-content-center flex-grow-1">
        <div className="card shadow p-4 w-100" style={{ maxWidth: "400px" }}>
          <h4
            className="text-center mb-4"
            style={{ color: "#e65100", fontWeight: "bold" }}
          >
           ADMIN LOGIN
          </h4>

          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
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
              <label htmlFor="password" className="form-label">
                Password
              </label>
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

            {/* Submit */}
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#e65100",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
