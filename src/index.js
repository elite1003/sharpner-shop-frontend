import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductListShop from "./components/Shop/ProductList";
import ProductListAdmin from "./components/Admin/ProductLIst";
import Success from "./components/Success/Success";
import LogIn from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
import ContactUs from "./components/ContactUs/ContactUs";
import AddProduct from "./components/Admin/AddProduct";
import Admin from "./components/Admin/Admin";
import SendMessage from "./components/SendMessage/SendMessage";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import ProductDetail from "./components/Shop/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import EditProduct from "./components/Admin/EditProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Shop /> },
      { path: "product/:productId", element: <ProductDetail /> },
      { path: "products", element: <ProductListShop /> },
      { path: "cart", element: <Cart /> },
      { path: "orders", element: <Order /> },
      { path: "login", element: <LogIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "success", element: <Success /> },
      { path: "message", element: <SendMessage /> },
      { path: "*", element: <NotFound /> },
      {
        path: "admin",
        element: <Admin />,
        children: [
          { path: "", element: <NotFound /> },
          { path: "add-product", element: <AddProduct /> },
          { path: "products", element: <ProductListAdmin /> },
          { path: "edit-product/:productId", element: <EditProduct /> },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
