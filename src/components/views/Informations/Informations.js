import React from "react";
import { Grid } from "@material-ui/core/";
import ArticlesHomePage from "../../features/ArticlesHomePage/ArticlesHomePage";
import styles from "./Informations.module.scss";

const Informations = () => {
  return (
    <div className={styles.root}>
      <Grid container rowSpacing={3}>
        <Grid item xs={12} sm={12} md={12} className="justify-content-center">
          <ArticlesHomePage />
        </Grid>
      </Grid>
    </div>
  );
};

export default Informations;
