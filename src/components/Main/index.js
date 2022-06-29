import React from "react";
import Buttons from "./Buttons";
import Logo from "./Logo";

import styles from "./Main.module.css";
import SearchBar from "./SearchBar";

const Main = () => {
  return (
    <main className={styles.main}>
      <Logo />
      <SearchBar />
      <Buttons />
    </main>
  );
};

export default Main;
