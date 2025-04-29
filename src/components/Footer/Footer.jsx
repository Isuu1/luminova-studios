import React from "react";
import { Link, useLocation } from "react-router-dom";

//Icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
//Styles
import styles from "./Footer.module.css";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer>
      {pathname !== "/tictactoe" && (
        <div className={styles.footer}>
          <div className={styles.shapeDivider}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className={styles.shapeDividerFill}
              ></path>
            </svg>
          </div>
          <div className={styles.logo}>
            <h2 className="header__logo__title" id="title">
              <Link to="/">Luminova Studios</Link>
            </h2>
            <div className={styles.dots}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
          <div className={styles.socials}>
            <i>
              <FaFacebookSquare size={30} />
            </i>
            <i>
              <FaSquareInstagram size={30} />
            </i>
            <i>
              <FaTwitterSquare size={30} />
            </i>
          </div>
          <ul className={styles.nav}>
            <h2>Links</h2>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
      <h3 className={styles.copyright}>Copyright 2023 All rights reserved</h3>
    </footer>
  );
};

export default Footer;
