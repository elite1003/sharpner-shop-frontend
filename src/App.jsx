import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useFetchProducts } from "./hooks/useFetchProducts";
import { useFetchCart } from "./hooks/useFetchCart";
import { useFetchOrder } from "./hooks/useFetchOrder";
const App = () => {
  useFetchProducts();
  useFetchCart();
  useFetchOrder();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
