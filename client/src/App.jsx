import React from 'react';
import logo from './assets/logo.png';
import mainImage from './assets/mainimage.jpg';
import secondImage from './assets/secondimage.jpg';
import './index.css';

function App() {
  return (
    <>
      <nav className="navbar">
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
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="story-container">
          <div className="story-image-container">
            <img src={secondImage} alt="Cinnamon Sticks" className="story-image" />
          </div>
          <div className="story-content">
            <h2 className="story-title">Our Story</h2>
            <p className="story-text">
              Ceylon Cinnamon is essentially native to the island of Sri Lanka an international name of production
              cinnamon with over 100 years combined history exists ever more personal solution processors
              and minimal production of final products.
            </p>
            <a href="#" className="learn-more">Learn More &gt;</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
