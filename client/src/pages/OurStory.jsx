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
            <a href="https://en.wikipedia.org/wiki/Cinnamon" className="learn-more">Learn More &rarr;</a>
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
                  <img src="./src/assets/Farming.png" alt="Sustainable Farming" />
                </div>
                <div className="process-info">
                  <h3>Sustainable Farming</h3>
                  <p>We partner with local farmers who practice eco-friendly cultivation, preserving the soil's natural nutrients for future generations.</p>
                </div>
              </div>

              <div className="process-card">
                <div className="process-image-box">
                  <img src="./src/assets/Peeling.png" alt="Traditional Peeling" />
                </div>
                <div className="process-info">
                  <h3>Traditional Peeling</h3>
                  <p>Our skilled artisans use age-old techniques to delicately peel the inner bark, ensuring the cinnamon's essential oils remain pure.</p>
                </div>
              </div>

              <div className="process-card">
                <div className="process-image-box">
                  <img src="./src/assets/Drying.png" alt="Sun Drying" />
                </div>
                <div className="process-info">
                  <h3>Sun Drying</h3>
                  <p>The cinnamon quills are naturally dried under the tropical sun of Sri Lanka, developing their signature golden color and sweet aroma.</p>
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

          <section className="cinnamon-map-section reveal">
            <h2 className="section-heading">THE CEYLON CINNAMON BELT</h2>
            <div className="map-content">
              <div className="map-description">
                <p>
                  True Ceylon Cinnamon grows exclusively in the southwestern coastal belt of Sri Lanka.
                  From <strong>Negombo</strong> and <strong>Colombo</strong> down to <strong>Galle</strong> and <strong>Matara</strong>,
                  this unique "Cinnamon Belt" provides the perfect combination of sandy soil and tropical climate
                  required to produce the world's highest quality spice.
                </p>
                <p>
                  The coastal breeze and the specific mineral content of these regions give our cinnamon
                  its distinctively sweet, delicate flavor and ultra-low coumarin levels that set it apart
                  from all other varieties.
                </p>
              </div>
              <div className="map-image-wrapper">
                <img src="./src/assets/map.png" alt="Ceylon Cinnamon Belt Map" className="vintage-map" />
              </div>
            </div>
          </section>
        </div>


      </div>
    </div>
  );
}

export default OurStory;
