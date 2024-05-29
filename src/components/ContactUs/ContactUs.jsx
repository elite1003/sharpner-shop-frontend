import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUs.module.css";
const ContactUs = () => {
  const navigate = useNavigate();
  const handleSendComplaint = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const data = { name, email };
    const response = await fetch("http://localhost:4000/contact-us", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      console.log("failed to sent the data");
    }
    navigate("/success");
  };
  return (
    <main>
      <section>
        <form className={styles["contact-form"]} onSubmit={handleSendComplaint}>
          <h1>Contact Us</h1>
          <p>We will not share your data with anyone.</p>
          <div className={styles["form-control"]}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <button className="btn" type="submit">
            Register Complaint!!
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactUs;
