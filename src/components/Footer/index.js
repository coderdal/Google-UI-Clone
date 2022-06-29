import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>Turkey</div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <a
            href="https://linkedin.com/in/muhammederdal"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            href="https://linkedin.com/in/muhammederdal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Advertising
          </a>
          <a
            href="https://linkedin.com/in/muhammederdal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Business
          </a>
          <a
            href="https://linkedin.com/in/muhammederdal"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Search works
          </a>
        </div>
        <div className={styles.right}>
          <a
            href="https://linkedin.com/in/muhammederdal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
          <a
            href="https://linkedin.com/in/muhammederdal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>
          <a
            href="https://linkedin.com/in/muhammederdal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
