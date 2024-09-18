import React from 'react';
import '../styles/Contact.css'; // Importing the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      <div className="contact-details">
        <h2>Our Location</h2>
        <p>123 Main Street, Your City, Country</p>
        <h2>Call Us</h2>
        <p>+123 456 7890</p>
      </div>
    </div>
  );
};

export default Contact;
