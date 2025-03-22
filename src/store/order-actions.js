import { orderActions } from "./orderSlice";

export const fetchOrder = () => {
  return (dispatch) => {
    const jwt = localStorage.getItem("jwt");
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/shop/order", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      console.log(data);
      return data;
    };

    fetchData()
      .then((products) => dispatch(orderActions.init(products)))
      .catch((err) => console.log(err));
  };
};
