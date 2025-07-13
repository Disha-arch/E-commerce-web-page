import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--content">
        <div className="footer--section">
          <h4 className="footer--heading">PRODUCTS</h4>
          <ul className="footer--ul">
            <li>Footwear</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Outlet-Sale</li>
            <li>New Arrivals</li>
            <li>Flat 50% Off!</li>
          </ul>
        </div>

        <div className="footer--section">
          <h4 className="footer--heading">SPORTS</h4>
          <ul className="footer--ul">
            <li>Running</li>
            <li>Football</li>
            <li>Gym/Training</li>
            <li>Basketball</li>
            <li>Swimming</li>
            <li>Skateboarding</li>
          </ul>
        </div>

        <div className="footer--section">
          <h4 className="footer--heading">SUPPORT</h4>
          <ul className="footer--ul">
            <li>Help</li>
            <li>Customer Service</li>
            <li>Returns & Exchanges</li>
            <li>Shipping</li>
            <li>Order Tracker</li>
            <li>Store Finder</li>
          </ul>
        </div>

        <div className="footer--section">
          <h4 className="footer--heading">COMPANY INFO</h4>
          <ul className="footer--ul">
            <li>About Us</li>
            <li>Drip Step Stories</li>
            <li>Apps</li>
            <li>Press</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer--social">
          <h4 className="footer--heading">FOLLOW US</h4>
          <div className="social--icon">
            <a href="#" aria-label="Instagram">
              <FaInstagram className="instagram--icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer--bottom">
        <div className="footer--links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms and Conditions</a>
          <span>|</span>
          <a href="#">Cookies</a>
        </div>
        <p>©{new Date().getFullYear()} Drip Step Pvt. Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
