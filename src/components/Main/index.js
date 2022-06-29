import React from "react";
import Logo from "./Logo";

import styles from "./Main.module.css";
import SearchBar from "./SearchBar";

const Main = () => {
  return (
    <main className={styles.main}>
      <Logo />
      <SearchBar />
    </main>
  );
};

export default Main;
