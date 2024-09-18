import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Restaurant</h1>
        <p className="home-intro">
          Experience a premier dining adventure. Our chefs use only the freshest ingredients to craft meals that delight and satisfy. Whether you’re here for a quick bite or a leisurely meal, we’ve got you covered!
        </p>
      </header>

      <section className="home-gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://www.bostonmagazine.com/wp-content/uploads/sites/2/2022/11/ess_diningbydesign.jpg" alt="Elegant Dining Area" />
            <p>Elegant Dining Area</p>
          </div>
          <div className="gallery-item">
            <img src="https://pics.craiyon.com/2023-06-20/cf7fbd300a244b849ecedc81854b62d9.webp" alt="Cozy Atmosphere" />
            <p>Cozy Atmosphere</p>
          </div>
          <div className="gallery-item">
            <img src="https://www.blueorbiting.com/wp-content/uploads/2022/03/TacosBeerInteriorVibe.png" alt="Warm Ambiance" />
            <p>Warm Ambiance</p>
          </div>
          {/* Add more gallery items as needed */}
        </div>
      </section>

      <section className="home-testimonials">
        <h2>What Our Guests Are Saying</h2>
        <div className="testimonial">
          <p>"The best dining experience I've ever had! The food was amazing and the service was impeccable."</p>
          <span>- Alex R.</span>
        </div>
        <div className="testimonial">
          <p>"A fantastic place for a special dinner. The ambiance and food were top-notch."</p>
          <span>- Jamie L.</span>
        </div>
        {/* Add more testimonials */}
      </section>

      <section className="home-sections">
        <div className="home-section">
          <h2>Our Specials</h2>
          <p>
            Explore our daily specials, crafted with creativity and passion to offer you something unique each day.
          </p>
        </div>
        <div className="home-section">
          <h2>Dining Experience</h2>
          <p>
            Enjoy a cozy ambiance and exceptional service that make every dining experience memorable.
          </p>
        </div>
        <div className="home-section">
          <h2>Events & Catering</h2>
          <p>
            Planning a special occasion? We offer customized catering and private dining options to make your event unforgettable.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
