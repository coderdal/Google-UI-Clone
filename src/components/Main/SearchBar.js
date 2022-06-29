import React, { useState } from "react";
import { MicrophoneIcon, SearchIcon, CloseIcon } from "../icons";

import styles from "./Main.module.css";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const clearInput = () => {
    setInput("");
  };

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <section className={styles.searchbar}>
      <span className={styles.searchIcon}>
        <SearchIcon />
      </span>
      <input type="text" value={input} onChange={updateInput} />
      {input.length > 0 && (
        <button className={styles.clearIcon} onClick={clearInput}>
          <CloseIcon />
        </button>
      )}
      <span className={styles.microphoneIcon}>
        <MicrophoneIcon />
      </span>
    </section>
  );
};

export default SearchBar;
