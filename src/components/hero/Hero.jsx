import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero-image.png";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="pt-[10vh] flex bg-gradient-to-b from-indigo-300 max-[400px]:flex-col max-[400px]:p-7 max-[400px]:pt-[100px] max-[500px]:flex-col max-[1200px]:pt-[14vh] ..."
      >
        {/* hero left */}
        <div className="hero-left flex flex-[1] flex-col justify-center gap-5 pl-[180px] leading-[1.1] max-[400px]:pl-[0] max-[400px]:pt-0 max-[500px]:pl-[4vw] max-[500px]:pr-[4vw] max-[400px]:gap-2 max-[500px]:pt-[6vh] max-[1200px]:pl-[5vw] max-[1280px]:pl-[4vw]">
          <h2 className="text-[#090909] text-[22px] font-semibold max-[400px]:text-[12px] max-[500px]:text-[15px] max-[500px]:font-medium">
            NEW ARRIVALS ONLY
          </h2>
          <>
            <div className="hero-hand-icon flex items-center gap-5">
              <p className="text-[#171717] text-[60px] font-bold max-[400px]:text-[25px] max-[400px]:font-semibold max-[500px]:text-[30px] max-[1280px]:text-[40px]">
                new
              </p>
              {/* hand icon */}
              <img
                src={hand_icon}
                alt=""
                className="w-[70px] max-[400px]:w-[40px] max-[500px]:w-[45px]"
              />
            </div>
            <div className="single-div max-[600px]:flex max-[600px]:gap-2 max-[1280px]:flex max-[1280px]:gap-3">
              <p className="text-[#171717] text-[60px] font-bold max-[400px]:text-[25px] max-[400px]:font-semibold max-[500px]:text-[30px] max-[1280px]:text-[40px]">
                collections
              </p>
              <p className="text-[#171717] text-[60px] font-bold max-[400px]:text-[25px] max-[400px]:font-semibold max-[500px]:text-[30px] max-[1280px]:text-[40px]">
                for everyone
              </p>
            </div>
          </>
          {/* hero latest button */}
          <div className="hero-latest-btn text-white bg-[#ff4141] flex items-center justify-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-[30px] text-[22px] font-medium max-[400px]:w-[200px] max-[400px]:h-[40px] max-[400px]:mt-[15px] max-[400px]:text-[13px] max-[500px]:w-[200px] max-[500px]:h-[40px] max-[500px]:text-[15px] max-[1280px]:h-[60px] max-[1280px]:w-[250px] max-[1280px]:text-[18px]">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" className="max-[500px]:w-[15px]" />
          </div>
        </div>
        {/* hero right */}
        <div className="hero-right flex flex-[1] items-center justify-center">
          {/* hero right image */}
          <img
            src={hero_image}
            alt=""
            className="h-[500px] w-[650px] max-[400px]:h-[250px] max-[400px]:w-[550px] max-[500px]:h-[320px] max-[500px]:w-[500px] max-[1200px]:h-[400px] max-[1200px]:w-[600px] max-[1280px]:h-[400px] max-[1280px]:w-[650px] max-[1280px]:pt-[30px]"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
