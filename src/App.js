import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import styles from "./App.module.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Main />
      <Footer />
    </main>
  );
};

export default App;
