import { cartActions } from "./cartSlice";

export const fetchCart = () => {
  return (dispatch) => {
    const jwt = localStorage.getItem("jwt");
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/shop/cart", {
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

    fetchData()
      .then((products) => dispatch(cartActions.init(products)))
      .catch((err) => console.log(err));
  };
};
