import React from "react";
import data_product from "../assets/data";
import Items from "../Items/Items";

const RelatedProduct = () => {
  return (
    <>
      <section
        id="related-product"
        className="flex flex-col items-center gap-2 h-[90vh] max-[400px]:hidden"
      >
        <h1 className="text-[#171717] text-[50px] font-semibold">
          Related Products
        </h1>
        <hr className="w-[200px] h-2 rounded-xl bg-[#252525]" />
        <div className="relatedProduct-item mt-12 flex gap-7">
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
