import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import ProductSkeleton from "./ProductSkeleton";
const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const listOfProduct = products.map((product) => (
    <Product key={product.id} product={product} />
  ));
  const listOfProductSkeleton = (
    <div>
      {[...Array(6)].map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
  return (
    <main>
      <section>
        {products.length > 0 ? listOfProduct : listOfProductSkeleton}
      </section>
    </main>
  );
};

export default ProductList;
