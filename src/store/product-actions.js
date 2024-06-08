import { productActions } from "./productSlice";

export const fetchProducts = () => {
  console.log("fetchProducts");
  return async (dispatch) => {
    const jwt = localStorage.getItem("jwt");
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/shop/products", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
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
