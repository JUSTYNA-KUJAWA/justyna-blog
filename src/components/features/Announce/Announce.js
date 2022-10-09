import React from "react";
import styles from "./Announce.module.scss";

const Announce = () => {
  return (
    <div className={styles.root}>
      <img alt="justyna" src="images/mainPage/banner1.jpg" />
      <div className={styles.banner}>
        <h3>1. When you are brave, the world is on your side!</h3>
        <h3>2. Be ready for hard work!</h3>
        <h3>3. Doing what you love increases the chances of success!</h3>
        <h3>4. Life is too short to delay!</h3>
        <h3>5. Who cares what other people think!</h3>
      </div>
    </div>
  );
};

export default Announce;
