import React from "react";
import { Link } from "react-router-dom";

const Items = ({ id, image, name, new_price, old_price }) => {
  return (
    <>
      <Link to={`/product/${id}`}>
        <section
          id="item"
          className="w-[300px] mx-4 hover:scale-105 duration-[0.6s] border max-[400px]:w-[320px]"
        >
          <img src={image} alt="" onClick={window.scrollTo(0, 0)} />
          <p className="my-[6px] mx-0">{name}</p>
          <div className="item-prices flex gap-5">
            <div className="item-price-new text-[#374151] text-[18px] font-semibold">
              ${new_price}
            </div>
            <div className="item-price-old text-[#8c8c8c] text-[18px] font-medium line-through">
              ${old_price}
            </div>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Items;
