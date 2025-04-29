import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./Hero.module.css";
//Animations
import { motion } from "framer-motion";
import {
  slideBottom,
  slideRight,
  slideTopSpring,
  staggeredChildrenParent,
} from "../../styles/animations";

export const headlineShapeVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
};

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <motion.div
        className={styles.headline}
        variants={staggeredChildrenParent}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h1 variants={slideRight}>
          Igniting Imaginations, Transcending Games
        </motion.h1>
        <motion.p variants={slideRight}>
          A new era of fun on your screen!
        </motion.p>
        <motion.button className={styles.button} variants={slideBottom}>
          <Link to="#tenzies-container">Get started</Link>
        </motion.button>
      </motion.div>

      <div className={styles.headlineImage}>
        <motion.img
          className={styles.image}
          src="./images/tech.webp"
          alt=""
          variants={slideTopSpring}
          initial="hidden"
          whileInView="visible"
        />
        <motion.div
          className={styles.shape}
          variants={headlineShapeVariants}
          initial="hidden"
          whileInView="visible"
        ></motion.div>
      </div>

      <div className={styles.shapeDivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className={styles.shapeDividerPath}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
