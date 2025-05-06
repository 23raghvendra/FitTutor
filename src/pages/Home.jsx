import React from 'react';
import './Home.css';
import image from '../assets/images.jpeg';

const Hero = () => {
  return (
    <div className="main-container">
      <div className="hero-container" style={{ 
        backgroundImage: `url(${image})`,
      }}>
        <div className="hero-content">
          <h1>Transform Your Body,<br />Transform Your Life</h1>
          <p>Experience personalized fitness coaching and achieve your goals with our expert trainers</p>
          <div className="hero-buttons">
            <button className="primary-btn">Start Free Trial</button>
            <button className="secondary-btn">View Programs</button>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-box">
          <h2>Special Offer</h2>
          <p>Limited Time: 50% OFF</p>
          <p>First Month Membership</p>
          <button className="feature-btn">Claim Offer</button>
        </div>

        <div className="feature-box">
          <h3>Expert Trainers</h3>
          <p>Learn from the best in the industry with our certified professional trainers</p>
          <button className="feature-btn">Meet Trainers</button>
        </div>

        <div className="feature-box">
          <h3>Premium Facilities</h3>
          <p>Access to state-of-the-art equipment and modern workout spaces</p>
          <button className="feature-btn">View Facilities</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;