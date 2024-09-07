import React from "react";
// import Items from "../Items/Items";
// import all_product from "../assets/all_product";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;

  //   const { name, image, new_price, old_price } = product;

  return (
    <>
      <div
        id="breadcrum"
        className="flex items-center gap-2 text-[#5e5e5e] text-[16px] font-semibold my-[60px] mx-[170px] capitalize max-[400px]:px-4 max-[520px]:my-0 max-[400px]:pt-[15vh] max-[520px]:pt-[15vh] max-[520px]:mx-[4vw] max-[400px]:text-[10px] max-[520px]:text-[13px] max-[520px]:w-full max-[1280px]:pt-[15vh] max-[1280px]:my-[0] max-[1620px]:mx-[4vw] max-[1620px]:my-0 max-[1620px]:pt-[15vh]"
      >
        HOME <img src={arrow_icon} alt="" />
        SHOP <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" /> {product.name}
      </div>
    </>
  );
};

export default Breadcrums;
