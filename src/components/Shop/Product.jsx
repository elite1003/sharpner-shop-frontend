import React from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const handleAddCart = (e) => {
    e.preventDefault();
    console.log("add to cart handler called");
  };
  return (
    <article className="card product-item">
      <header className="card__header">
        <h1 className="product__title">{product.title}</h1>
      </header>
      <div className="card__image">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="card__content">
        <h2 className="product__price">₹{product.price} </h2>
        <p className="product__description">{product.description}</p>
      </div>
      <div className="card__actions">
        <NavLink
          to={`/product/${product.id}`}
          className="btn"
          style={{ textDecoration: "none" }}
        >
          Detail
        </NavLink>
        {/* http//localhost:4000/add-to-cart , post */}
        <button className="btn" type="button" onClick={handleAddCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default Product;
