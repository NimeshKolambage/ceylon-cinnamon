import React from 'react';
import secondImage from '../assets/secondimage.jpg';

function OurStory() {
  return (
    <div className="our-story-page">
      <div className="story-container">
        <div className="story-main-content">
          <section className="story-intro reveal">
            <h1 className="page-title">Our Story</h1>
            <p className="story-text">
              Discover the journey of the world's finest cinnamon, from the sun-drenched plantations of Sri Lanka 
              to your kitchen. Our legacy is built on centuries of tradition, sustainable harvesting, 
              and a commitment to bringing you the purest form of this ancient spice.
            </p>
            <a href="#history" className="learn-more">Learn More &rarr;</a>
          </section>

          <section className="story-videos reveal">
            <div className="video-grid">
              <div className="video-wrapper">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/xpdb-k3hS5c?si=W0nm22npGbjS0RHl" 
                  title="Cinnamon Harvesting" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-wrapper">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/CjIHRBUq8Fk?si=SZRWMx0bXiqschIF" 
                  title="Traditional Processing" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>

          <section id="history" className="history-production reveal">
            <div className="history-content">
              <div className="history-text">
                <h2>History and Production</h2>
                <p>
                  Ceylon cinnamon (Cinnamomum zeylanicum) has been prized for millennia. 
                  Unlike common Cassia cinnamon, our true cinnamon is hand-peeled by master craftsmen 
                  using traditional tools. This labor-intensive process ensures the delicate flavor 
                  and medicinal properties remain intact.
                </p>
                <p>
                  Today, we continue this heritage by working directly with local farmers, 
                  ensuring fair trade practices and the highest quality standards at every step 
                  of the production cycle.
                </p>
              </div>
              <div className="history-image">
                <img src={secondImage} alt="Cinnamon Production" className="rounded-img" />
              </div>
            </div>
          </section>
        </div>

        <aside className="story-sidebar reveal">
          <div className="adsense-placeholder">
            <div className="ad-box">
              <svg viewBox="0 0 100 100" className="ad-icon">
                <path d="M20 20h60v60H20z" fill="#f0f0f0" />
                <path d="M30 40h40M30 50h40M30 60h20" stroke="#ccc" strokeWidth="2" />
                <path d="M70 25l5 5-5 5" fill="#4285F4" />
              </svg>
              <span>AdSense ad</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default OurStory;
