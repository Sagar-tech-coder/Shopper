import React, { createContext } from "react";
import all_product from "../assets/all_product";

export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  // console.log(all_product);

  return (
    <>
      <shopContext.Provider value={contextValue}>
        {props.children}
      </shopContext.Provider>
    </>
  );
};

export default ShopContextProvider;
