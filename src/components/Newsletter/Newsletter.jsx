import React, { useState } from "react";

//Icons
import { IoSend } from "react-icons/io5";
//Animations
import { motion } from "framer-motion";
import { slideBottom } from "../../styles/animations";
//Styles
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // Add state for email validation

  function handleChange(e) {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //Simple email verification
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (isValid) {
      setModal(true); // Email is valid, show success message
      setIsValidEmail(true); // Reset validation status for next attempt
    } else {
      setIsValidEmail(false); // Email is not valid, show error or take other actions
    }
  };

  return (
    <div className={styles.newsletterContainer}>
      <motion.div
        className={styles.form}
        variants={slideBottom}
        initial="hidden"
        whileInView="visible"
      >
        <div className={styles.text}>
          <h2>Get updates and special offers</h2>
          <p>Be the first to get a latest updates about our games.</p>
        </div>
        {modal && (
          <div className={styles.success}>
            <h2>Succesfully subscribed!</h2>
          </div>
        )}
        {modal === false ? (
          <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              onChange={handleChange}
              value={email}
            />

            <button type="submit">
              Subscribe
              <IoSend style={{ marginLeft: 10 }} />
            </button>
          </form>
        ) : null}
        {!isValidEmail && (
          <p style={{ color: "red" }}>Please enter a valid email address.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Newsletter;
