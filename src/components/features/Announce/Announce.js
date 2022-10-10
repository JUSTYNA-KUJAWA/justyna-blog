import React from "react";
import { Grid } from "@material-ui/core/";
import styles from "./Announce.module.scss";

const Announce = () => {
  return (
    <div className={styles.root}>
      <Grid container rowSpacing={1}>
        <Grid item xs={4} sm={6} md={12}>
          <div>
            <img alt="justyna" src="images/mainPage/banner1.jpg" />
            <div className={styles.banner}>
              <p>1. When you are brave, the world is on your side!</p>
              <p>2. Be ready for hard work!</p>
              <p>3. Doing what you love increases the chances of success!</p>
              <p>4. Life is too short to delay!</p>
              <p>5. Who cares what other people think!</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Announce;
