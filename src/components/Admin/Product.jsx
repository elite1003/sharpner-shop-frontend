import React from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
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
          to={`/admin/edit-product/${product.id}`}
          className="btn"
          style={{ textDecoration: "none" }}
        >
          Edit
        </NavLink>
        <button className="btn" type="button">
          Delete
        </button>
      </div>
    </article>
  );
};

export default Product;
