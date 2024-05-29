import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = function (e) {
    e.preventDefault();
    localStorage.setItem("username", e.target.username.value);
    navigate("/message");
  };

  return (
    <main>
      <section className={styles["login"]}>
        <form onSubmit={handleLoginSubmit} className={styles["login-form"]}>
          <h1 >Login</h1>
          <div className={styles["form-control"]}>
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" id="username" required />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
