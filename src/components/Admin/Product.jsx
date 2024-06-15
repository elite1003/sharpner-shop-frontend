import React from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/productSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const handleProductDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/admin/product/${product.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (response.ok) {
        dispatch(productActions.deleteProduct(product.id));
      } else {
        if (response.status === 404) {
          console.log("product not found");
        } else if (response.status === 500) {
          console.log("internal server error");
        }
      }
    } catch (error) {
      console.log(error);
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
          to={`/admin/edit-product/${product.id}`}
          className="btn"
          style={{ textDecoration: "none" }}
        >
          Edit
        </NavLink>
        <button className="btn" type="button" onClick={handleProductDelete}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default Product;
