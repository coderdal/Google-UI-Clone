import React from "react";

import styles from "./Main.module.css";

const Logo = () => {
  return (
    <figure className={styles.logo}>
      <img src="assets/images/main-logo.png" alt="Main logo" />
    </figure>
  );
};

export default Logo;
