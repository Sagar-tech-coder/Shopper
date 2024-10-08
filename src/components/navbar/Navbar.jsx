import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling
import { IoMenu, IoClose } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbarl bg-[#947fd4] w-full h-[12vh] fixed z-50 flex justify-between px-[5vw] shadow-gray-300 max-[660px]:justify-between max-[660px]:items-center max-[400px]:py-4 max-[400px]:px-5">
      <div className="nav-logo flex items-center gap-2">
        <img src={Logo} alt="" className="h-[50px] max-[400px]:h-[40px]" />
        <p className="text-white text-[30px] font-semibold max-[400px]:font-medium max-[400px]:text-[20px]">
          SHOPPER
        </p>
      </div>
      <div id="ham-nav" className={`navbar-links ${isOpen ? "active" : ""}`}>
        <div className="py-10 flex gap-6 items-center justify-center max-[520px]:flex max-[520px]:flex-col max-[400px]:">
          <ul className="nav-menu text-white flex items-center list-none gap-6 font-medium max-[520px]:flex max-[520px]:flex-col">
            <li
              className="flex flex-col items-center justify-center gap-1"
              onClick={() => {
                setMenu("shop");
              }}
            >
              <Link to="/">
                Shop{menu === "shop" ? <hr className="hr" /> : <></>}
              </Link>
            </li>
            <li
              className="flex flex-col items-center justify-center gap-1"
              onClick={() => {
                setMenu("men");
              }}
            >
              <Link to="/men">
                Men{menu === "men" ? <hr className="hr" /> : <></>}
              </Link>
            </li>
            <li
              className="flex flex-col items-center justify-center gap-1"
              onClick={() => {
                setMenu("women");
              }}
            >
              <Link to="/women">
                Women{menu === "women" ? <hr className="hr" /> : <></>}
              </Link>
            </li>
            <li
              className="flex flex-col items-center justify-center gap-1"
              onClick={() => {
                setMenu("kids");
              }}
            >
              <Link to="/kids">
                Kids{menu === "kids" ? <hr className="hr" /> : <></>}
              </Link>
            </li>
          </ul>
          <div className="nav-login-cart flex items-center gap-10 max-[520px]:flex max-[520px]:flex-col">
            <button className="w-[140px] h-12 outline-none border-2 text-[20px] font-medium bg-white text-[#515151] border-[#7a7a7a] rounded-[75px] active:bg-[#f3f3f3] max-[400px]:w-[120px] max-[400px]:h-[42px] max-[400px]:text-[17px]">
              <Link to="/login">Login</Link>
            </button>
            <Link to="/cart">
              <FaOpencart className="text-white" />
            </Link>
            <div className="nav-cart-count w-[20px] h-[20px] flex items-center justify-center mt-[-25px] ml-[-45px] max-[400px]:mt-[-72px] max-[400px]:ml-[35px] rounded-[10px] text-[14px] bg-[#ec3c3c] text-white">
              0
            </div>
          </div>
          {/* justify-center ends */}
        </div>
        {/* <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a> */}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <div className="close-ba">
            <IoClose className="" />
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
