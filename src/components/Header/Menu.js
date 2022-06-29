import React from "react";

import { MenuIcon } from "../icons";

import styles from "./Header.module.css";

const Menu = () => {
  return (
    <button className={styles.menu}>
      <MenuIcon />
    </button>
  );
};

export default Menu;
