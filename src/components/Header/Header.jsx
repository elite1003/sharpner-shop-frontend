import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles["main-header"]}>
      <nav className={styles["main-header__nav"]}>
        <ul className={styles["main-header__item-list"]}>
          <li className={styles["main-header__item"]}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              Shop
            </NavLink>
          </li>
          <li className={styles["main-header__item"]}>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              Products
            </NavLink>
          </li>
          <li className={styles["main-header__item"]}>
            <NavLink
              to="/admin/add-product"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              Add-Product
            </NavLink>
          </li>
          <li className={styles["main-header__item"]}>
            <NavLink
              to="/admin/products"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              Admin-Product
            </NavLink>
          </li>
          <li className={styles["main-header__item"]}>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              Cart
            </NavLink>
          </li>
          <li className={styles["main-header__item"]}>
            <NavLink
              to="/orders"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              Orders
            </NavLink>
          </li>
          <li className={styles["main-header__item"]}>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              Contact-Us
            </NavLink>
          </li>
          <li className={styles["main-header__item"]}>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              LogIn
            </NavLink>
          </li>
          <li className={styles["main-header__item"]}>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? styles["active"] : "")}
            >
              SignUp
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
