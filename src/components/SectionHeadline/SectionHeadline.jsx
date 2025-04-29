import React from "react";

//Animations
import { motion } from "motion/react";
//Styles
import styles from "./SectionHeadline.module.css";

const SectionHeadline = (props) => {
  return (
    <motion.h2
      className={styles.sectionHeadline}
      //variants={headlineAnimation}
      initial="hidden"
      whileInView="visible"
    >
      {props.sectionName}
    </motion.h2>
  );
};

export default SectionHeadline;
