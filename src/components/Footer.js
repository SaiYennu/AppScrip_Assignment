import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">

      {/* TOP */}
      <div className="footer-top">

        <div className="footer-newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          <div className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h3>CALL US</h3>
          <p>+44 221 133 5360 • customercare@mettamuse.com</p>

          <h3>CURRENCY</h3>
          <p className="currency-info">🇺🇸 • USD</p>
        </div>
      </div>

      {/* LINKS */}
      <div className="footer-links">

        {/* mettā muse */}
        <div className="footer-col">
          <div className="footer-title" onClick={() => toggleSection('muse')}>
            <h3>mettā muse</h3>
            <span>⌵</span>
          </div>

          <ul className={openSection === 'muse' ? 'open' : ''}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <div className="footer-title" onClick={() => toggleSection('links')}>
            <h3>QUICK LINKS</h3>
            <span>⌵</span>
          </div>

          <ul className={openSection === 'links' ? 'open' : ''}>
            <li>Orders & Shipping</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* FOLLOW */}
        <div className="footer-col">
          <div className="footer-title" onClick={() => toggleSection('social')}>
            <h3>FOLLOW US</h3>
            <span>⌵</span>
          </div>

          <div className={`social-section ${openSection === 'social' ? 'open' : ''}`}>
            <div className="social-icons">
              <span>📷</span>
              <span>🔗</span>
            </div>

            <h4 className="payment-heading">mettā muse ACCEPTS</h4>

            <div className="payment-methods">
              <span className="pay-tag">GPay</span>
              <span className="pay-tag">Mastercard</span>
              <span className="pay-tag">PayPal</span>
              <span className="pay-tag">Amex</span>
              <span className="pay-tag">ApplePay</span>
              <span className="pay-tag">ShopPay</span>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;