import React from "react";
import styles from "./AddProduct.module.css";
import { useNavigate } from "react-router-dom";
import { productActions } from "../../store/productSlice";
import { useDispatch } from "react-redux";
const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const handleSendProduct = async (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const imageURL = e.target.imageUrl.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    try {
      const product = { productName, imageURL, description, price };
      const response = await fetch("http://localhost:4000/admin/product", {
        method: "POST",
        body: JSON.stringify({ product }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = await response.json();
      dispatch(productActions.addProduct({ _id: data._id, ...product }));
    } catch (error) {
      console.log(error.message);
    }

    navigate("/");
  };
  return (
    <main>
      <section>
        <form className={styles["product-form"]} onSubmit={handleSendProduct}>
          <h1>Add Product</h1>
          <div className={styles["form-control"]}>
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" name="productName" />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="product-price">Price (₹)</label>
            <input type="number" id="product-price" name="price" step=".01" />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="imageUrl">Image Url</label>
            <input type="url" id="imageUrl" name="imageUrl" />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="5" />
          </div>
          <button className="btn" type="submit">
            Add Product
          </button>
        </form>
      </section>
    </main>
  );
};

export default AddProduct;
