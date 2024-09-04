import React from "react";
import all_product from "../assets/all_product";
import { useParams } from "react-router-dom";
import Breadcrums from "../breadcrums/Breadcrums";
import ProductDisplay from "../productDisplay/ProductDisplay";
import DescriptionBox from "../descriptionBox/Descriptionbox";
import RelatedProduct from "../relatedProduct/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  // console.log("productId:", productId);
  // console.log("product:", product);

  if (!product) {
    return <div>Product not found. Please check the product ID.</div>;
  }

  // const { name, image, new_price, old_price } = product;

  return (
    <>
      <section id="product-details">
        {/* image <img src={image} alt="" />
        name{name}
        old{new_price}
        new{old_price} */}
        <Breadcrums product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProduct />
      </section>
    </>
  );
};

export default Product;
