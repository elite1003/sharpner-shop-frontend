import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Product.css";
const ProductDetail = () => {
  const products = useSelector((state) => state.product.products);
  const { productId } = useParams();
  const product = products.find((product) => product._id === productId);
  const jwt = localStorage.getItem("jwt");
  const handleAddCart = async (productId) => {
    const response = await fetch("http://localhost:4000/shop/add-to-cart", {
      method: "POST",
      body: JSON.stringify({ productId }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    const data = await response.json();
    console.log(data.product);
  };
  return (
    <main>
      <section className="product-item" style={{ margin: "auto" }}>
        <header className="card__header">
          <h1 className="product__title">{product.productName}</h1>
        </header>
        <div className="card__image  ">
          <img src={product.imageURL} alt={product.productName} />
        </div>
        <div className="card__content">
          <h2 className="product__price">₹{product.price} </h2>
          <p className="product__description">{product.description}</p>
        </div>
        <div className="card__actions">
          <button
            className="btn"
            type="button"
            onClick={() => handleAddCart(product._id)}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
};
export default ProductDetail;
