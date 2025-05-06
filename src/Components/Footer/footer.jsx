import React from 'react';
import './footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FitTutor</h3>
          <p>Transform your body and mind with our expert guidance and personalized workout plans.</p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Workouts</a></li>
            <li><a href="#">Nutrition Plans</a></li>
            <li><a href="#">Progress Tracking</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Programs</h4>
          <ul>
            <li><a href="#">Weight Loss</a></li>
            <li><a href="#">Muscle Gain</a></li>
            <li><a href="#">Flexibility</a></li>
            <li><a href="#">Personal Training</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li>Email: info@fittutor.com</li>
            <li>Phone: 7300026329</li>
            <li>Address: 123 Fitness Street</li>
            <li>Sonipat , Haryana</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 FitTutor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;