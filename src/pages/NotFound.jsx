import React from "react";

//Styles
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1 className={styles.title}>Uh-oh! You've hit a snag!</h1>
      <h3 className={styles.text}>
        It seems like you took a wrong turn. Don't worry; even the best
        explorers get lost sometimes.
      </h3>

      <h2 className={styles.text}>
        If you're feeling adventurous, you can attempt to do the moonwalk back
        to the previous page.
      </h2>
      <img src="/images/moonwalk2.webp" alt="" className={styles.image} />
    </div>
  );
};

export default NotFound;
