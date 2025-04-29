import React from "react";

//Animations
import { motion } from "framer-motion";
//Styles
import styles from "./GamesAvailability.module.css";
import {
  slideBottom,
  slideLeft,
  staggeredChildrenParent,
} from "../../styles/animations";

export const phoneIconTwoAnimation = {
  visible: {
    y: 0,
    x: 110,
    opacity: 1,
    rotate: 10,
    transition: {
      duration: 0.3,
      delay: 0.2,
      x: {
        delay: 1.2,
        duration: 1,
      },
      rotate: {
        delay: 2.2,
        duration: 1,
      },
    },
  },
  hidden: {
    y: 300,
    opacity: 0,
  },
};

export const phoneIconOneAnimation = {
  visible: {
    y: 0,
    opacity: 1,
    rotate: -6,
    transition: {
      duration: 0.3,
      delay: 0.2,
      rotate: {
        delay: 2,
        duration: 0.5,
      },
    },
  },
  hidden: {
    y: 300,
    opacity: 0,
  },
};

const GamesAvailability = () => {
  return (
    <div className={styles.gamesAvailabilityContainer}>
      <div className={styles.images}>
        <motion.img
          className={styles.image2}
          src="/images/phone1.png"
          alt=""
          variants={phoneIconTwoAnimation}
          initial="hidden"
          whileInView="visible"
        />
        <motion.img
          className={styles.image1}
          src="/images/phone2.png"
          alt=""
          variants={phoneIconOneAnimation}
          initial="hidden"
          whileInView="visible"
        />
      </div>

      <motion.div
        className={styles.description}
        variants={staggeredChildrenParent}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h2
          className="game-availability-container__desc__title"
          variants={slideLeft}
        >
          All games now available on a full range of devices!
        </motion.h2>
        <motion.p
          className="game-availability-container__desc__content"
          variants={slideLeft}
        >
          Enjoy our games on computer, console, tablet or mobile phone
        </motion.p>
        <motion.p
          className="game-availability-container__desc__content"
          variants={slideLeft}
        >
          Where you can play our games
        </motion.p>
        <motion.div
          className={styles.icons}
          variants={staggeredChildrenParent}
          initial="hidden"
          whileInView="visible"
        >
          <motion.img
            className={styles.icon}
            src="/images/appstore-logo.png"
            alt=""
            variants={slideBottom}
          />
          <motion.img
            className={styles.icon}
            src="/images/psstore-logo.png"
            alt=""
            variants={slideBottom}
          />
          <motion.img
            className={styles.icon}
            src="/images/nintendostore-logo.png"
            alt=""
            variants={slideBottom}
          />
          <motion.img
            className={styles.icon}
            src="/images/playstore-logo1.png"
            alt=""
            variants={slideBottom}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GamesAvailability;
