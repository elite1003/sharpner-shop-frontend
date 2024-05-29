import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const listOfProduct = products.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return (
    <main>
      <section>
        {products.length > 0 ? listOfProduct : <h1>No product found</h1>}
      </section>
    </main>
  );
};

export default ProductList;
