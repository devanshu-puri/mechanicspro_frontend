import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.jpg'; // adjust path if needed

function Header() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2C3E50' }}>
      <div className="container-fluid px-4">

        {/* Logo and Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center text-white fs-3 fw-bold">
          <img
            src={logo}
            alt="MechanicPro Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          Mechanic<span style={{ color: '#E67E22' }}>Pro</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search bar - visible on large screens */}
          <div className="d-none d-lg-flex align-items-center ms-auto me-3">
            <input
              type="text"
              className="form-control me-2"
              style={{ borderRadius: '20px', width: '300px' }}
              placeholder="Search by area or garage name"
            />
            <FaSearch color="white" />
          </div>

          {/* Navigation links */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-lg-center">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white mx-2">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-link text-white mx-2">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white mx-2">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white mx-2">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white mx-2">Login/SignUp</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
