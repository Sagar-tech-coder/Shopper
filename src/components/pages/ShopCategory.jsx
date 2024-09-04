import React from "react";
// import { shopContext } from "../context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import all_product from "../assets/all_product";
import Items from "../Items/Items";

const ShopCategory = (props) => {
  // const { all_product } = useContext(shopContext);

  return (
    <>
      <section id="shop-category">
        {/* shop category banner */}
        <img src={props.banner} alt="" /* block my-[30px] mx-auto w-[82%] */ />
        <div className="shopcategory-indexShort flex my-0 mx-[170px] justify-between items-center">
          <p>
            <span className="font-semibold">Showing 1-12</span>out of 36
            products
          </p>
          <div className="shopcategory-sort py-[10px] px-[20px] rounded-[40px] border-[#888]">
            Sort by <RiArrowDropDownLine />
          </div>
        </div>
        <div className="shopcategory-products mx-5 my-[170px] grid grid-cols-4 gap-y-20">
          {all_product.map((item) => {
            if (props.category === item.category) {
              return (
                <Items
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        {/* load more button */}
        <div className="shopcategory-loadmore flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium">
          Explore More
        </div>
      </section>
    </>
  );
};

export default ShopCategory;
