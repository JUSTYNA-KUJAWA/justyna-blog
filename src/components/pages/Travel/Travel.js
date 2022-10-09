import React from "react";
import Container from "../../common/Container/Container";
import { Grid } from "@material-ui/core/";
import styles from "./Travel.module.scss";

const Travel = () => {
  return (
    <Container>
      <div className={styles.root}>
        <Grid container spacing={5}>
          <Grid className={styles.box} item xs={2}>
            <h1>Visit Sueden</h1>
            <ul>
              <li>Smogen</li>
              <p>
                blablabbabbbbHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
              </p>
              <li>Smogen</li>
              <p>blablabbabbbb</p>
              <li>Smogen</li>
              <p>blablabbabbbb</p>
              <li>Smogen</li>
              <p>blablabbabbbb</p>
              <li>Smogen</li>
              <p>blablabbabbbb</p>
            </ul>
          </Grid>
          <Grid item xs={7}>
            <div className={styles.gallery}>
              <div className={styles.image}>
                <img alt="justyna" src="images/travel/travel1.jpg" />
                <img alt="justyna" src="images/travel/travel2.jpg" />
                <img alt="justyna" src="images/travel/travel3.jpg" />
                <img alt="justyna" src="images/travel/travel4.jpg" />
              </div>
            </div>
            <div className={styles.gallery}>
              <div className={styles.image1}>
                <img alt="justyna" src="images/travel/travel6.jpg" />
                <img alt="justyna" src="images/travel/travel7.jpg" />
                <img alt="justyna" src="images/travel/travel8.jpg" />
                <img alt="justyna" src="images/travel/travel9.jpg" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <h1>More travelling will come soon.....</h1>
      </div>
    </Container>
  );
};

export default Travel;
