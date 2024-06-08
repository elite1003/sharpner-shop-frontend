import React from "react";
import styles from "./AddProduct.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { productActions } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

const EditProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector((state) => state.product.products);
  const product = products.find((product) => product._id === productId);
  const jwt = localStorage.getItem("jwt");

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const imageURL = e.target.imageUrl.value;
    const description = e.target.description.value;
    const price = e.target.price.value;

    try {
      const newProduct = { productName, imageURL, description, price };
      const response = await fetch(
        `http://localhost:4000/admin/product/${product._id}`,
        {
          method: "PUT",
          body: JSON.stringify({ newProduct }),
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      dispatch(
        productActions.updateProduct({ _id: product._id, ...newProduct })
      );
    } catch (error) {
      console.log(error.message);
    }
    navigate("/admin/products");
  };
  return (
    <main>
      <section>
        <form className={styles["product-form"]} onSubmit={handleUpdateProduct}>
          <h1>Edit Product</h1>
          <div className={styles["form-control"]}>
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              name="productName"
              defaultValue={product.productName}
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="product-price">Price (₹)</label>
            <input
              type="number"
              id="product-price"
              name="price"
              step=".01"
              defaultValue={product.price}
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="imageUrl">Image Url</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              defaultValue={product.imageURL}
            />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              defaultValue={product.description}
            />
          </div>
          <button className="btn" type="submit">
            Update Product
          </button>
        </form>
      </section>
    </main>
  );
};

export default EditProduct;
