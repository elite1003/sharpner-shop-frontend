import React, { useEffect, useState } from "react";
import styles from "./SendMessage.module.css";
const SendMessage = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("http://localhost:4000/message");
      const data = await response.json();
      setMessages(data);
    };
    try {
      fetchMessages();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const userName = localStorage.getItem("username");
    const message = e.target.message.value;
    const data = { userName, message };
    const response = await fetch("http://localhost:4000/message", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      console.log("failed to sent the data");
    }
    setMessages((prevState) => [...prevState, data]);
  };
  return (
    <main>
      <section className={styles["message"]}>
        {messages.map((message) => (
          <p>{`${message.userName} : ${message.message}`}</p>
        ))}
      </section>
      <section>
        <form onSubmit={handleSendMessage} className={styles["message-form"]}>
          <div className={styles["form-control"]}>
            <label htmlFor="message">Message : </label>
            <input type="text" name="message" id="message" required />
          </div>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </section>
    </main>
  );
};

export default SendMessage;
