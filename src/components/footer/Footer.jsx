import React from "react";
import footer_logo from "../assets/logo_big.png";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <section
        id="footer"
        className="flex flex-col justify-center items-center gap-[50px] max-[400px]:gap-[20px] max-[500px]:gap-[20px]"
      >
        {/* Footer Logo */}
        <div className="footer-logo flex items-center gap-5">
          <img
            src={footer_logo}
            alt=""
            className="max-[400px]:h-[50px] max-[500px]:h-[50px]"
          />
          <p className="text-[#383838] text-[46px] font-bold max-[400px]:text-[20px] max-[500px]:text-[25px]">
            SHOOPER
          </p>
        </div>
        {/* Footer Links */}
        <ul className="footer-links flex list-none text-[#252525] text-[20px] gap-[50px] max-[400px]:gap-[20px] max-[400px]:text-[12px] max-[500px]:gap-[20px] max-[500px]:text-[15px]">
          <Link>
            <li>Company</li>
          </Link>
          <Link>
            <li>Products</li>
          </Link>
          <Link>
            <li>Offers</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
        {/* Footer Social Icons */}
        <div className="footer-social-icon flex gap-5">
          <div className="footer-icon-container flex items-center justify-center p-[10px] pb-[6px] gap-10 border-[#ebebeb]">
            <BsInstagram className="text-[25px] max-[400px]:text-[18px]" />
            <TiSocialPinterestCircular className="text-[25px]" />
            <BsWhatsapp className="text-[25px] max-[400px]:text-[18px]" />
          </div>
        </div>
        {/* Footer Copyright Text */}
        <div className="footer-copyright flex flex-col items-center w-[100%] mb-[30px] text-[#1a1a1a] text-[20px] gap-[30px] max-[400px]:text-[10px] max-[400px]:gap-[15px] max-[400px]:mb-[15px] max-[500px]:text-[12px] max-[500px]:gap-[15px] max-[500px]:mb-[15px]">
          <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
          <p>
            Copyright @ 2024 | Designed by{" "}
            <Link to="https://sagarpatra.vercel.app/" className="text-blue-600">
              Sagar
            </Link>{" "}
            - All Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
