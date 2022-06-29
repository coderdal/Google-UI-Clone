import React from "react";

import styles from "./Header.module.css";

const NavItem = ({ href, text }) => {
  return (
    <li className={styles.item}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </li>
  );
};

export default NavItem;
