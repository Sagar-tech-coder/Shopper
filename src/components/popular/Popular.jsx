import React from "react";
import data_product from "../assets/data";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <>
      <section
        id="popular"
        className="flex flex-col items-center gap-[10px] h-[90vh] max-[400px]:h-[100%] max-[400px]:mb-[40px] max-[500px]:h-full max-[1200px]:h-full max-[1200px]:gap-[2px] max-[1200px]:mb-[40px] max-[1340px]:h-full max-[1340px]:gap-[2px] max-[1340px]:mb-[40px] max-[1620px]:h-full"
      >
        <h1 className="text-[#171717] text-[50px] font-semibold max-[400px]:text-[20px] max-[500px]:text-[22px] max-[1340px]:text-[30px] max-[1340px]:text-[30px]">
          POPULAR IN WOMEN
        </h1>
        <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] max-[400px]:w-[100px] max-[1200px]:h-[4px] max-[1340px]:h-[4px]" />
        <div className="popular-item mt-[50px] flex gap-[30px] max-[660px]:flex-col max-[1200px]:flex-wrap max-[1200px]:items-center max-[1200px]:justify-center max-[1340px]:flex-wrap max-[1340px]:items-center max-[1340px]:justify-center">
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
