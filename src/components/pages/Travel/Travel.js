import React from "react";
import { Link } from "react-router-dom";
import Container from "../../common/Container/Container";
import HeroTravel from "../../features/HeroTravel/HeroTravel";
import { Grid } from "@material-ui/core/";
import styles from "./Travel.module.scss";

const Travel = () => {
  return (
    <Container>
      <div className={styles.root}>
        <Grid container spacing={12}>
          <Grid className={styles.box} item xs={10} sm={12} md={12}>
            <h1>Visit Sueden</h1>
            <p>
              Frozen expanses and wooden houses, vast forests and rocky islands,
              Sami people and Viking folklore. Sweden has a generous nature and
              a history of great richness, to which is added a pure and warm art
              of living.
            </p>
            <h3>Places I vsited:</h3>
            <ul>
              <Link
                to="//www.vastsverige.com/en/sotenas/produkter/smogen/"
                className={styles.link}
              >
                <li>Smogen</li>
              </Link>
              <Link to="//www.xn--kustvgen-4za.se/" className={styles.link}>
                <li>Paronamic road Kustvagen</li>
              </Link>
              <Link to="//www.hogakusten.com/en" className={styles.link}>
                <li>Hoga Kusten</li>
              </Link>
              <Link
                to="https://www.vastsverige.com/en/sotenas/produkter/hallo/"
                className={styles.link}
              >
                <li>Island Hallo</li>
              </Link>
              <Link
                to="//www.dafto.se/en/activities/experience-koster/"
                className={styles.link}
              >
                <li>Island Koster</li>
              </Link>
              <Link
                to="//www.tourismesuede.fr/fjallbacka/"
                className={styles.link}
              >
                <li>Fjallbacka</li>
              </Link>
            </ul>
          </Grid>
        </Grid>
      </div>
      <HeroTravel />
      <div>
        <h1>More travelling will come soon.....</h1>
      </div>
    </Container>
  );
};

export default Travel;
