import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value.trim();
    const userPassword = e.target.password.value.trim();
    const confirmPassword = e.target["confirm-password"].value.trim();
    //todo: validation
    if (userPassword !== confirmPassword)
      alert("password and confirm password should match");
    else {
      const user = {
        userEmail,
        userPassword,
      };
      try {
        const response = await fetch("http://localhost:4000/auth/signup", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (response.ok) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <main>
      <section className={styles["signup"]}>
        <form onSubmit={handleSignUpSubmit} className={styles["signup-form"]}>
          <h1>SignUp</h1>
          <div className={styles["form-control"]}>
            <label htmlFor="useremail">User Email</label>
            <input type="email" name="email" id="useremail" required />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
            />
          </div>
          <button className="btn" type="submit">
            Sign Up
          </button>
          <p
            onClick={() => navigate("/login")}
            style={{
              cursor: "pointer",
              color: "blue",
              backgroundColor: "white",
              borderRadius: "4px",
              padding: ".5rem",
            }}
          >
            Have account? Login!
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
