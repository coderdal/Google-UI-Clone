import React from "react";

import styles from "./Header.module.css";
import Menu from "./Menu";
import NavItem from "./NavItem";
import SignIn from "./SignIn";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.items}>
          <NavItem text="Gmail" href="https://linkedin.com/in/muhammederdal" />
          <NavItem text="Images" href="https://linkedin.com/in/muhammederdal" />
          <Menu />
          <SignIn />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
