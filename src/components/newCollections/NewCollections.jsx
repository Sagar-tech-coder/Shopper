import React from "react";
import new_collection from "../assets/new_collections";
import Items from "../Items/Items";

const NewCollections = () => {
  return (
    <>
      {/* New Collection Section */}
      <section
        id="new-collections"
        className="flex flex-col items-center gap-[10px] mb-[100px] max-[500px]:mb-[40px] max-[1200px]:gap-[2px] max-[1200px]:mb-[40px] max-[1340px]:gap-[2px] max-[1340px]:mb-[40px]"
      >
        {/* New Collection Heading */}
        <h1 className="text-[#171717] text-[50px] font-semibold max-[400px]:text-[20px] max-[500px]:text-[25px] max-[1200px]:text-[30px] max-[1340px]:text-[30px]">
          NEW COLLECTIONS
        </h1>
        <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] max-[400px]:w-[100px] max-[1340px]:h-[4px]" />
        <div className="collections grid grid-cols-4 mt-[50px] g-[30px] gap-y-10 max-[660px]:grid-cols-1 max-[1200px]:mt-[20px] max-[1200px]:gap-[30px] max-[1200px]:gap-x-[10px] max-[1200px]:grid-cols-3">
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
