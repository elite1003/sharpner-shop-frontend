import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useFetchProducts } from "./hooks/useFetchProducts";

const App = () => {
  useFetchProducts();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
