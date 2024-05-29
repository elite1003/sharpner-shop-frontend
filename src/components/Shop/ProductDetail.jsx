import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Product.css";
const ProductDetail = () => {
  const products = useSelector((state) => state.product.products);
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  const handleAddCart = (e) => {
    e.preventDefault();
    console.log("add to cart handler called");
  };
  return (
    <main>
      <section className="product-item" style={{ margin: "auto" }}>
        <header className="card__header">
          <h1 className="product__title">{product.title}</h1>
        </header>
        <div className="card__image  ">
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className="card__content">
          <h2 className="product__price">₹{product.price} </h2>
          <p className="product__description">{product.description}</p>
        </div>
        <div className="card__actions">
          {/* http//localhost:4000/add-to-cart , post */}
          <button className="btn" type="button" onClick={handleAddCart}>
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
};
export default ProductDetail;
