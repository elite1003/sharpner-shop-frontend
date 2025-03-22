import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const jwt = localStorage.getItem("jwt");
  const handleDeleteProductFromCart = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/shop/cart/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const data = await response.json();
      if (data) {
        dispatch(cartActions.deleteProductInCart(productId));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOrder = async () => {
    try {
      const response = await fetch(`http://localhost:4000/shop/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = await response.json();
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <section>
        <ul className="cart__item-list">
          {cart.map((product) => (
            <li className="cart__item" key={product.id}>
              <h2>{product.productName}</h2>
              <h3>Quantity:{product.quantity}</h3>
              <button
                type="button"
                className="btn"
                onClick={() => handleDeleteProductFromCart(product.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <button type="button" className="btn centered" onClick={handleOrder}>
          Order Now
        </button>
      </section>
    </main>
  );
};

export default Cart;
