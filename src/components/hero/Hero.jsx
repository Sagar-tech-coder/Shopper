import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="flex bg-gradient-to-b from-indigo-100 max-[400px]:flex-col max-[400px]:p-7 ..."
      >
        {/* hero left */}
        <div className="hero-left flex flex-[1] flex-col justify-center gap-5 pl-[180px] leading-[1.1] max-[400px]:pl-[0]">
          <h2 className="text-[#090909] text-[22px] font-semibold max-[400px]:text-[12px]">
            NEW ARRIVALS ONLY
          </h2>
          <>
            <div className="hero-hand-icon flex items-center gap-5">
              <p className="text-[#171717] text-[60px] font-bold max-[400px]:text-[25px] max-[400px]:font-semibold">
                new
              </p>
              {/* hand icon */}
              <img
                src={hand_icon}
                alt=""
                className="w-[70px] max-[400px]:w-[40px]"
              />
            </div>
            <p className="text-[#171717] text-[60px] font-bold max-[400px]:text-[25px] max-[400px]:font-semibold">
              collections
            </p>
            <p className="text-[#171717] text-[60px] font-bold max-[400px]:text-[25px] max-[400px]:font-semibold">
              for everyone
            </p>
          </>
          {/* hero latest button */}
          <div className="hero-latest-btn text-white bg-[#ff4141] flex items-center justify-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-[30px] text-[22px] font-medium max-[400px]:w-[200px] max-[400px]:h-[40px] max-[400px]:text-[13px]">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        {/* hero right */}
        <div className="hero-right flex flex-[1] items-center justify-center">
          {/* hero right image */}
          <img
            src={hero_image}
            alt=""
            className="h-[600px] max-[400px]:h-[500px]"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
