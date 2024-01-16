import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <a href="#">
            <StaticImage className="footer-logo" src="../images/footer-logo.svg" alt="Travelers Today Footer Logo" />
          </a>
          <p className="footer-copyright">© 1985-2024 MYJOURNEYS · All Rights Reserved</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Categories</h3>
          <ul className="footer-menu">
            <li><a href="#">News</a></li>
            <li><a href="#">Leisure</a></li>
            <li><a href="#">top5</a></li>
            <li><a href="#">Travel Culture</a></li>
            <li><a href="#">Travel Tips</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">About Us</h3>
          <ul className="footer-menu">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Subscribe to Our Newsletter</h3>
          <form className="footer-subscribe-form" action="#" method="post">
            <input type="email" name="email" placeholder="Email Address" required />
            <button type="submit">Sign Up</button>
          </form>
          <p className="footer-subscribe-text">
            By subscribing to this newsletter, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
