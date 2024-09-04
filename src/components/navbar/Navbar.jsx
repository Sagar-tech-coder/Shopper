import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">BrandName</div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <div className="close-ba">
            <IoClose />
          </div> // Close icon (X)
        ) : (
          <>
            <IoMenu />
            {/* <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span> */}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
