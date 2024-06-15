import React from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const handleAddCart = async (productId) => {
    const response = await fetch("http://localhost:4000/shop/cart", {
      method: "POST",
      body: JSON.stringify({ productId }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    const data = await response.json();
    if (data) {
      //update the cart
      dispatch(cartActions.addProductInCart(product));
    }
  };

  return (
    <article className="card product-item">
      <header className="card__header">
        <h1 className="product__title">{product.productName}</h1>
      </header>
      <div className="card__image">
        <img src={product.imageURL} alt={product.productName} />
      </div>
      <div className="card__content">
        <h2 className="product__price">₹{product.price} </h2>
        <p className="product__description">{product.description}</p>
      </div>
      <div className="card__actions">
        <NavLink
          to={`/product/${+product.id}`}
          className="btn"
          style={{ textDecoration: "none" }}
        >
          Detail
        </NavLink>
        <button
          className="btn"
          type="button"
          onClick={() => handleAddCart(product.id)}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default Product;
