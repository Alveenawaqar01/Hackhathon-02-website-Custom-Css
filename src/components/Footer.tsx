
import "../style/Footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand Name */}
        <h2 className="footer__brand-name">Classic Bags Collection</h2>
        <p className="footer__description">
          Your go-to place for the best quality bags designed for style and durability.
        </p>
        
        {/* Social Media Icons */}
        <div className="footer__social-icons">
          <a href="https://facebook.com" className="footer__social-icon">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="footer__social-icon">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="footer__social-icon">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" className="footer__social-icon">
            <FaLinkedin />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="footer__copyright">
          Copy Right Classic Bags All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
