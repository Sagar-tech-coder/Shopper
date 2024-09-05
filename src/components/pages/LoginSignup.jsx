import React from "react";

const LoginSignup = () => {
  return (
    <>
      <section
        id="login-signup"
        className=" w-[100%] h-[100%] pt-40 flex items-center justify-center border-none rounded-xl bg-[#fce3fe] py-[auto] max-[400px]:pt-[12vh] max-[400px]:h-[100vh] max-[400px]:px-[4vw]"
      >
        <div className="loginsignup-container w-[580px] h-[auto] bg-white m-auto py-[30px] px-[60px] max-[400px]:px-[30px] max-[400px]:py-[20px]">
          <h1 className="my-3 mx-0 text-[32px] font-medium max-[400px]:text-[22px] max-[400px]:underline max-[400px]:py-[0]">
            Sign Up
          </h1>
          <div className="loginsignup-fields flex flex-col gap-[30px] mt-[30px]">
            <input
              type="text"
              placeholder="Your name"
              required
              className="h-[50px] w-[100%] pl-5 border-2 border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] max-[400px]:h-[35px] max-[400px]:text-[14px]"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              className="h-[50px] w-[100%] pl-5 border-2 border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] max-[400px]:h-[35px] max-[400px]:text-[14px]"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="h-[50px] w-[100%] pl-5 border-2 border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] max-[400px]:h-[35px] max-[400px]:text-[14px]"
            />
          </div>
          <button className="w-[100%] h-[60px] text-white bg-[#ff4141] mt-[30px] border-none rounded-xl text-[24px] font-medium max-[400px]:w-[60%] max-[400px]:h-[40px] max-[400px]:text-[18px] max-[400px]:mx-[20%]">
            Continue
          </button>
          <div className="loginsignup-login mt-[20px] text-[#5c5c5c] text-[18px] font-medium max-[400px]:text-[13px]">
            Already have an Account?
            <span className="text-[#ff4141] font-semibold"> Login here</span>
            <div className="loginsignup-agree flex items-center justify-center mt-[25px] gap-2 text-[#5c5c5c] text-[15px] font-medium max-[400px]:text-[10px]">
              <input type="checkbox" name="" id="" />
              <p>By continuing, I agree to the terms and condition.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginSignup;
