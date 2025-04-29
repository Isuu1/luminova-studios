import React from "react";
import { Link } from "react-router-dom";

//Animations
import { useMotionValueEvent, useScroll } from "motion/react";
//Styles
import styles from "./Header.module.css";

const Header = () => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const header = document.getElementById("header");
    if (latest > 100) {
      header.classList.add(`${styles.headerScrolled}`);
    } else {
      header.classList.remove(`${styles.headerScrolled}`);
    }
    if (latest > 300) {
      header.classList.add(`${styles.headerPadding}`);
    } else {
      header.classList.remove(`${styles.headerPadding}`);
    }
  });

  return (
    <header className={styles.header} id="header">
      <div className={styles.logo}>
        <Link to="/" id="title">
          Luminova Studios
        </Link>

        <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>

      <ul className={styles.nav} id="nav">
        <Link to="/">
          <li className={styles.item}>Home</li>
        </Link>
        <Link to="/about">
          <li className={styles.item}>About</li>
        </Link>
        <Link to="/contact">
          <li className={styles.item}>Contact us</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
