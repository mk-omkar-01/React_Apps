import React from 'react';
import '../styles/About.css';  // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Restaurant</h1>
      <p>
        Welcome to our restaurant! We take pride in offering a dining experience like no other.
        Established in 2024, our restaurant blends the finest ingredients, innovative recipes, 
        and a warm atmosphere to provide an unforgettable experience.
      </p>
      <h2>Our Story</h2>
      <p>
        Our journey began with a passion for food and a love for community. What started as a 
        small family business has grown into a culinary destination, known for its commitment 
        to quality and customer satisfaction. Each dish is crafted with care, ensuring that every 
        bite tells a story of tradition and innovation.
      </p>
      <h2>Our Mission</h2>
      <p>
        We aim to serve delicious, freshly prepared meals that bring people together. Whether you're 
        here for a special occasion or just a casual night out, we want to ensure every guest feels 
        welcome and leaves satisfied.
      </p>
      <h2>Meet Our Team</h2>
      <p>
        Our team of chefs and staff work tirelessly to create the best dining experience possible. 
        From the moment you step through our doors, you'll be greeted with friendly faces and 
        exceptional service.
      </p>
    </div>
  );
};

export default About;
