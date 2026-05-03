import React from 'react';
import secondImage from '../assets/secondimage.jpg';

function OurStory() {
  return (
    <div className="our-story-page">
      <div className="story-container">
        <div className="story-main-content">
          <section className="story-intro reveal">
            <h1 className="section-heading left">Our Story</h1>
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

          <section className="harvest-process reveal">
            <h2 className="section-heading">OUR HARVEST PROCESS</h2>
            
            <div className="process-grid">
              <div className="process-card">
                <div className="process-image-box">
                  <img src="./src/assets/mainimage.jpg" alt="Sustainable Farming" />
                  <div className="process-label">SUSTAINABLE FARMING</div>
                </div>
              </div>
              
              <div className="process-card">
                <div className="process-image-box">
                  <img src="./src/assets/secondimage.jpg" alt="Traditional Peeling" />
                  <div className="process-label">TRADITIONAL PEELING</div>
                </div>
              </div>
              
              <div className="process-card">
                <div className="process-image-box">
                  <img src="./src/assets/cinnamon-stics.jpg" alt="Sun Drying" />
                  <div className="process-label">SUN DRYING</div>
                </div>
              </div>
            </div>
          </section>

          <section id="history" className="history-production reveal">
            <div className="history-content">
              <div className="history-text">
                <h2 className="section-heading left">History and Production</h2>
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

    
      </div>
    </div>
  );
}

export default OurStory;
