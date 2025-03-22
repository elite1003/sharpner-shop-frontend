import React from "react";
import { useSelector } from "react-redux";
const Order = () => {
  const orders = useSelector((state) => state.order.order);
  return (
    <main>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li>
              {order.id}
              <ul>
                {order.Products.map((product) => (
                  <li>
                    <b>Product Name </b>
                    {product.productName} <b>quantity </b>
                    {product.OrderProduct.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Nothing there!</h1>
      )}
    </main>
  );
};

export default Order;
