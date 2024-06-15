import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useFetchProducts } from "./hooks/useFetchProducts";
import { useFetchCart } from "./hooks/useFetchCart";
const App = () => {
  useFetchProducts();
  useFetchCart();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
