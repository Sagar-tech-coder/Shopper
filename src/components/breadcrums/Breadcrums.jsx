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
        className="flex items-center gap-2 text-[#5e5e5e] text-[16px] font-semibold my-[60px] mx-[170px] capitalize max-[400px]:my-0 max-[400px]:pt-[20vh] max-[400px]:mx-[4vw] max-[400px]:text-[10px] max-[400px]:w-full"
      >
        HOME <img src={arrow_icon} alt="" />
        SHOP <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" /> {product.name}
      </div>
      {/* <div className="product-list">
        {all_product.map((product) => (
          <Items
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div> */}
    </>
  );
};

export default Breadcrums;
