import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="brand">
          <img src={logo} alt="Logo" className="logo-img" />
          <span>
            Mechanic<span className="orange-text">Pro</span>
          </span>
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <div className="search-bar">
            <input type="text" placeholder="Search by area or garage name" />
            <FaSearch color="white" />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login/SignUp</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
