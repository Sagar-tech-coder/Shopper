import React from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <>
      {/* Product Display Section */}
      <section id="product-display" className="flex my-0 mx-[120px]">
        {/* product display left */}
        <div className="productDisplay-left flex gap-4">
          {/* product left 4 images */}
          <div className="productDisplay-img-list flex flex-col gap-4">
            <img src={product.image} alt="" className="h-32 w-80" />
            <img src={product.image} alt="" className="h-32 w-80" />
            <img src={product.image} alt="" className="h-32 w-80" />
            <img src={product.image} alt="" className="h-32 w-80" />
          </div>
          {/* product left main image */}
          <div className="productDisplay-img">
            <img
              src={product.image}
              alt="product-display-main-img"
              className="w-[1000px] h-[400px]"
            />
          </div>
        </div>
        {/* product display right */}
        <div className="productDisplay-right flex flex-col my-0 mx-[70px]">
          {/* product right heading */}
          <h1 className="text-[#3d3d3d] text-[25px] font-bold">
            {product.name}
          </h1>
          {/* product right all 5 stars */}
          <div className="productDisplay-right-star flex items-center mt-[13px] gap-1 text-[#1c1c1c] text-[16px]">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          {/* product right prices */}
          <div className="productDisplay-right-prices flex my-10 mx-0 gap-7 text-[24px] font-bold">
            {/* product right old price */}
            <div className="productDisplay-right-prices-old text-[#818181] line-through">
              ${product.old_price}
            </div>
            {/* product right new price */}
            <div className="productDisplay-right-prices-new text-[#ff4141]">
              ${product.new_price}
            </div>
          </div>
          {/* product right description */}
          <div className="productDisplay-right-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            recusandae laboriosam at, nostrum itaque mollitia consequuntur,
            laudantium quasi quod id fugit. Error nostrum molestias blanditiis
            consectetur tempora itaque aspernatur dolores.
          </div>
          {/* product right all sizes */}
          <div className="productDisplay-right-size">
            <h1 className="mt-[55px] text-[#656565] text-[20px] font-semibold">
              Select Size
            </h1>
            <div className="product-display-right-sizes flex my-[30px] mx-0 gap-5">
              <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[2px] rounded-[3px] border-[#ebebeb] hover:bg-gray-300 duration-150 cursor-pointer">
                S
              </div>
              <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[2px] rounded-[3px] border-[#ebebeb] hover:bg-gray-300 duration-150 cursor-pointer">
                M
              </div>
              <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[2px] rounded-[3px] border-[#ebebeb] hover:bg-gray-300 duration-150 cursor-pointer">
                L
              </div>
              <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[2px] rounded-[3px] border-[#ebebeb] hover:bg-gray-300 duration-150 cursor-pointer">
                XL
              </div>
              <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[2px] rounded-[3px] border-[#ebebeb] hover:bg-gray-300 duration-150 cursor-pointer">
                XXL
              </div>
            </div>
          </div>
          {/* Add to Cart Button */}
          <button className="py-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-[#ff4141] mb-10 border-none outline-none">
            Add to Cart
          </button>
          <p className="prodoctDisplay-right-category mt-2">
            <span className="font-semibold">Category :</span> Women, T-shirt,
            Crop Top
          </p>
          <p className="prodoctDisplay-right-category mt-2">
            <span className="font-semibold">Tags :</span> Modern, Latest
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductDisplay;
