import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value.trim();
    const userPassword = e.target.password.value.trim();
    //todo: validation

    const user = {
      userEmail,
      userPassword,
    };
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    localStorage.setItem("jwt", data.jwtToken);
    navigate("/");
  };

  return (
    <main>
      <section className={styles["login"]}>
        <form onSubmit={handleLoginSubmit} className={styles["login-form"]}>
          <h1>Login</h1>
          <div className={styles["form-control"]}>
            <label htmlFor="useremail">User Email</label>
            <input type="email" name="email" id="useremail" required />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
          <p
            onClick={() => navigate("/signup")}
            style={{
              cursor: "pointer",
              color: "blue",
              backgroundColor: "white",
              borderRadius: "4px",
              padding: ".5rem",
            }}
          >
            Have No Account? Create New Account!
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
