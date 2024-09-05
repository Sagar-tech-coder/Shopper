import React from "react";
import new_collection from "../assets/new_collections";
import Items from "../Items/Items";

const NewCollections = () => {
  return (
    <>
      {/* New Collection Section */}
      <section
        id="new-collections"
        className="flex flex-col items-center gap-[10px] mb-[100px] max-[500px]:mb-[40px]"
      >
        {/* New Collection Heading */}
        <h1 className="text-[#171717] text-[50px] font-semibold max-[400px]:text-[20px] max-[500px]:text-[25px]">
          NEW COLLECTIONS
        </h1>
        <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] max-[400px]:w-[100px]" />
        <div className="collections grid grid-cols-4 mt-[50px] g-[30px] gap-y-10 max-[660px]:grid-cols-1">
          {/* Map Function */}
          {new_collection.map((item) => {
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

export default NewCollections;
