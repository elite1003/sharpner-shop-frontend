import { productActions } from "./productSlice";

export const fetchProducts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/shop/products");
      if (!response.ok) {
        throw new Error("Could not fetch product data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const productData = await fetchData();
      dispatch(productActions.init(productData));
    } catch (error) {
      console.log(error.message);
    }
  };
};
