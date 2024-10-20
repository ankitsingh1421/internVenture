import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

//172337
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact us</h4>
          <p>Email: tft@company.com</p>
          <p>Phone: 9659224156</p>
          <p>Toll free : 1800 180 1111</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100069534045314" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/pawanbeniwal536/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/pawan-beniwal-a38327305" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a  href="#" className='cursor-pointer'>Home</a></li>
            <li><Link to="about" smooth={true} duration={100} className='cursor-pointer'>About Us</Link></li>
            <li><Link to="contact" smooth={true} duration={50} className='cursor-pointer'>Contact Us</Link></li>
            <li><Link to="internship" smooth={true} duration={50} className='cursor-pointer'>Internship</Link></li>

          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Notes Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;