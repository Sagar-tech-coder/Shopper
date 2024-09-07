import React from "react";
import data_product from "../assets/data";
import Items from "../Items/Items";

const RelatedProduct = () => {
  return (
    <>
      <section
        id="related-product"
        className="flex flex-col items-center gap-2 h-[90vh] max-[520px]:h-full max-[1620px]:h-full"
      >
        <h1 className="text-[#171717] text-[40px] font-semibold max-[520px]:text-[20px] max-[1280px]:text-[35px]">
          Related Products
        </h1>
        <hr className="w-[200px] h-1 rounded-xl bg-[#252525] max-[520px]:w-[100px] max-[520px]:h-1 max-[1280px]:h-1" />
        <div className="relatedProduct-item mt-12 flex gap-7 max-[520px]:flex-col max-[520px]:my-4 max-[1400px]:gap-0 max-[1280px]:mt-8">
          {data_product.map((item) => {
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
          })}
        </div>
      </section>
    </>
  );
};

export default RelatedProduct;
