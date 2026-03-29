import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      
      {/* Top Section */}
      <div className="header-top">
        
        {/* Left */}
        <div className="header-left">
          <span className="menu-icon">☰</span>

          {/* Logo Icon */}
          <svg
            className="logo-icon"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path
              d="M18 0L21.6 14.4L36 18L21.6 21.6L18 36L14.4 21.6L0 18L14.4 14.4L18 0Z"
              fill="black"
            />
          </svg>
        </div>

        {/* Center */}
        <div className="header-center">LOGO</div>

        {/* Right */}
        <div className="header-right">
          <span className="icon">🔍</span>
          <span className="icon">♡</span>
          <span className="icon">🛍️</span>
          <span className="icon user-icon">👤</span>
          <span className="lang-select">ENG ⌵</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="main-nav">
        <span>SHOP</span>
        <span>SKILLS</span>
        <span>STORIES</span>
        <span>ABOUT</span>
        <span>CONTACT US</span>
      </nav>
    </header>
  );
};

export default Navbar;