import React from "react";

//Styles
import styles from "./DieTile.module.css";

const DieTile = (props) => {
  const shape = () => {
    switch (props.value) {
      case 1:
        return <span className={styles.dot}></span>;
      case 2:
        return (
          <>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
          </>
        );
      case 3:
        return (
          <>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
          </>
        );
      case 4:
        return (
          <>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
          </>
        );
      case 5:
        return (
          <>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
          </>
        );
      case 6:
        return (
          <>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
            <span className={styles.dot}> </span>
          </>
        );
      default:
        return <span className={styles.dot}> </span>;
    }
  };
  return (
    <div
      className={`${styles.dieTile} ${props.isHeld ? styles.active : ""}`}
      onClick={props.onClick}
    >
      <div className={styles.innerWrapper}>{shape()}</div>
    </div>
  );
};

export default DieTile;
