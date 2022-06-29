import React from "react";

import styles from "./Main.module.css";

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.button}>
        <a
          href="https://linkedin.com/in/muhammederdal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Search
        </a>
      </div>

      <div className={styles.button}>
        <a
          href="https://linkedin.com/in/muhammederdal"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm Feeling Lucky
        </a>
      </div>
    </div>
  );
};

export default Buttons;
