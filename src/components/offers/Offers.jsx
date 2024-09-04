import React from "react";
import exclusive_image from "../assets/exclusive_image.png";

const Offers = () => {
  return (
    <>
      {/* Offers Section */}
      <section
        id="offers"
        className="w-[80%] h-[70vh] flex m-auto py-0 px-[140px] mb-[150px] bg-gradient-to-b from-indigo-100 max-[400px]:w-full max-[400px]:px-[30px] max-[400px]:mb-0 ..."
      >
        {/* Offer Left */}
        <div className="offer-left flex flex-[1] flex-col justify-center">
          <h1 className="text-[#171717] text-[60px] font-semibold max-[400px]:text-[20px]">
            Exclusive
          </h1>
          <h1 className="text-[#171717] text-[60px] font-semibold max-[400px]:text-[20px]">
            Offers for you
          </h1>
          <p className="text-[#171717] text-[22px] font-semibold max-[400px]:text-[20px]">
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          {/* Check Now Button */}
          <button className="text-white text-[20px] w-[200px] h-[60px] rounded-[35px] bg-[#ff4141] border-none font-medium mt-[30px] max-[400px]:w-[130px] max-[400px]:h-[40px] max-[400px]:text-[13px]">
            Check Now
          </button>
        </div>
        {/* Offer Right */}
        <div className="offer-right flex flex-[1] items-center justify-end pt-[50px] max-[400px]:pt-[0]">
          <img src={exclusive_image} alt="" />
        </div>
      </section>
    </>
  );
};

export default Offers;
