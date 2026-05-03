import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isScrolled, isMenuOpen, setIsMenuOpen, logo }) {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Ceylon Cinnamon Logo" className="logo-img" />
        </Link>
        <span className="logo-text">CEYLON CINNAMON</span>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/our-story" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
        <Link to="/benefits" className="nav-link" onClick={() => setIsMenuOpen(false)}>Benefits</Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>

      <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMenuOpen ? (
            <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
          ) : (
            <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
          )}
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
