import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Product.css";
import ProductSkeleton from "./ProductSkeleton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const { productId } = useParams();
  const product = products.find((product) => product.id === +productId);
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
      dispatch(cartActions.addProductInCart(product));
    }
  };
  if (products.length > 0) {
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
              onClick={() => handleAddCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <div>
        {[...Array(1)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }
};
export default ProductDetail;
