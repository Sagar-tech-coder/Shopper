import React from "react";

const NewsLetter = () => {
  return (
    <>
      {/* News Letter Section */}
      <section
        id="newsletter"
        className="w-[80%] h-[40vh] flex flex-col items-center justify-center m-auto py-0 px-[140px] mb-[150px] gap-[30px] bg-gradient-to-b from-indigo-100 max-[400px]:h-[30vh] max-[400px]:w-full max-[400px]:px-[30px] max-[400px]:gap-[5px] max-[400px]:mb-[0] ..."
      >
        {/* heading text */}
        <h1 className="text-[#454545] text-[40px] font-semibold max-[400px]:text-[17px]">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="text-[#454545] text-[18px] max-[400px]:text-[10px]">
          Subscribe to our newsletter and stay updated
        </p>
        <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-[#e3e3e3] max-[400px]:mt-[20px] max-[400px]:w-[300px] max-[400px]:h-[40px]">
          <input
            type="email"
            placeholder="Your Email id ..."
            className="w-[500px] ml-[30px] border-none outline-none text-[#616161] text-[16px] max-[400px]:w-[250px] max-[400px]: max-[400px]:ml-[25px] max-[400px]:text-[12px]"
          />
          {/* Subscribe Button */}
          <button className="w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px] max-[400px]:w-[150px] max-[400px]:h-[40px] max-[400px]:text-[12px]">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
