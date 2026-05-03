import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import mainImage from './assets/mainimage.jpg';
import secondImage from './assets/secondimage.jpg';
import './index.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`loader-container ${!isLoading ? 'fade-out' : ''}`}>
        <img src={logo} alt="Loading..." className="loader-logo" />
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <img src={logo} alt="Ceylon Cinnamon Logo" className="logo-img" />
          <span className="logo-text">CEYLON CINNAMON</span>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link active">Home</a>
          <a href="#story" className="nav-link">Our Story</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#benefits" className="nav-link">Benefits</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

      </nav>

      <section className="hero" style={{ backgroundImage: `url(${mainImage})` }}>
        <div className="hero-content">
          <h1 className="hero-title">
            AUTHENTIC<br />CEYLON CINNAMON
          </h1>
          <p className="hero-subtitle">
            From Sri Lanka, To Your Home. The<br />
            World's Finest, Hand-Harvested Spice.
          </p>
          <button className="btn-shop">SHOP NOW</button>
          
          <div className="trust-badges">
            <div className="badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              <span>100% Organic</span>
            </div>
            <div className="badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              <span>Pure Ceylon</span>
            </div>
            <div className="badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <span>Fair Trade</span>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="benefits-section">
        <h2 className="section-heading">Why Choose Ceylon Cinnamon?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>True Cinnamon</h3>
            <p>Known globally as the only "True Cinnamon", sourced exclusively from the rich soils of Sri Lanka.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
            </div>
            <h3>Ultra-Low Coumarin</h3>
            <p>Significantly safer for daily consumption compared to Cassia cinnamon due to its minimal coumarin content.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </div>
            <h3>Rich Antioxidants</h3>
            <p>Packed with powerful antioxidants that protect your body and promote overall wellness and vitality.</p>
          </div>
        </div>
      </section>

      <section id="products" className="products-section">
        <h2 className="section-heading">Our Featured Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image-wrap">
              <img src="./src/assets/cinnamon-stics.jpg" alt="Cinnamon Sticks" />
            </div>
            <div className="product-info">
              <h3>Premium Cinnamon Sticks</h3>
              <p className="price">$14.99</p>
              <button className="btn-add-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image-wrap">
              <img src="./src/assets/cinnamon-powder.jpg" alt="Cinnamon Powder" />
            </div>
            <div className="product-info">
              <h3>Pure Cinnamon Powder</h3>
              <p className="price">$12.50</p>
              <button className="btn-add-cart">Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image-wrap">
              <img src="./src/assets/cinnamon-oil.jpg" alt="Cinnamon Oil" />
            </div>
            <div className="product-info">
              <h3>Cinnamon Leaf Oil</h3>
              <p className="price">$18.00</p>
              <button className="btn-add-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-minimal">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="Logo" className="footer-logo" />
            <span>CEYLON CINNAMON</span>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ceylon Cinnamon. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
