import React, { useState } from "react";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");

  // Content for Description and Review
  const descriptionContent = (
    <div
      id="Description-box"
      className="descBox-desc flex flex-col gap-6 border-2 border-[#d0d0d0] p-10 max-[400px]:text-[12px] max-[400px]:p-4"
    >
      <p>
        An e-commerce website is an online platform that facilitate the buying
        and selling of products or services over the internet.It serves as a
        virtual marketplace where businesses and individuals can showcase their
        products, interact with customers, and conduct transations without the
        need for a physical presence.E-comerce websites have gained immense
        popularity due to their convenience, accessibility, and the global reach
        they offer.
      </p>
      <p>
        E-commerce websites typically display products or services along with
        detailed descriptions, images, prices, and any available variations
        (e.g,.sizes, colors).Each product usually has its own dedicated page
        with relevant information.
      </p>
    </div>
  );

  const reviewContent = (
    <div className="descBox-desc flex flex-col gap-6 border-2 border-[#d0d0d0] p-10 max-[400px]:text-[12px] max-[400px]:p-4">
      <p>
        This is the review section. Here you can read reviews from other users
        and see their ratings.
      </p>
    </div>
  );
  return (
    <>
      <section className="my-[120px] mx-[120px] max-[400px]:my-[20px] max-[400px]:mx-[20px]">
        <div style={{ display: "flex", cursor: "pointer", marginBottom: "0" }}>
          <div
            className="descBox-nav-box flex items-center justify-center text-[16px] font-semibold w-[170px] h-[70px] border-2 border-[#d0d0d0] max-[400px]:text-[13px] max-[400px]:w-[130px] max-[400px]:h-[50px]"
            onClick={() => setActiveTab("description")}
            style={{
              marginRight: "0",
              fontWeight: activeTab === "description" ? "bold" : "normal",
              backgroundColor:
                activeTab === "description" ? "white" : "lightgray",
            }}
          >
            Description
          </div>
          <div
            className="descBox-nav-box flex items-center justify-center text-[16px] font-semibold w-[170px] h-[70px] border-2 border-[#d0d0d0] max-[400px]:text-[13px] max-[400px]:w-[130px] max-[400px]:h-[50px]"
            onClick={() => setActiveTab("review")}
            style={{
              fontWeight: activeTab === "review" ? "bold" : "normal",
              backgroundColor: activeTab === "review" ? "white" : "lightgray",
            }}
          >
            Review
          </div>
        </div>
        <div>
          {activeTab === "description" ? descriptionContent : reviewContent}
        </div>
      </section>
      {/* ################################################################ */}
      {/* <section id="descriptionbox" className="my-[120px] mx-[170px]">
        <div className="descBox-navigator flex">
          <div className="descBox-nav-box flex items-center justify-center text-[16px] font-semibold w-[170px] h-[70px] border-2 border-[#d0d0d0]">
            Description
          </div>
          <div className="descBox-nav-fade flex items-center justify-center text-[16px] font-semibold w-[170px] h-[70px] border-2 border-[#d0d0d0] text-[#555] bg-[#eeeded]">
            Review (122)
          </div>
        </div>
        <div className="descBox-desc flex flex-col gap-6 border-2 border-[#d0d0d0] p-12 pb-[70px]">
          <p>
            An e-commerce website is an online platform that facilitate the
            buying and selling of products or services over the internet.It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transations without the need for a physical presence.E-comerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g,.sizes, colors).Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </section> */}
    </>
  );
};

export default DescriptionBox;
