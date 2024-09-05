import React from "react";
import data_product from "../assets/data";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <>
      <section
        id="popular"
        className="flex flex-col items-center gap-[10px] h-[90vh] max-[400px]:h-[100%] max-[400px]:mb-[40px] max-[500px]:h-full"
      >
        <h1 className="text-[#171717] text-[50px] font-semibold max-[400px]:text-[20px] max-[500px]:text-[22px]">
          POPULAR IN WOMEN
        </h1>
        <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] max-[400px]:w-[100px]" />
        <div className="popular-item mt-[50px] flex gap-[30px] max-[660px]:flex-col">
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

export default Popular;
