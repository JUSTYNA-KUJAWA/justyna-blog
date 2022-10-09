import React from "react";
import { Grid } from "@material-ui/core/";
import ArticlesHomePage from "../../features/ArticlesHomePage/ArticlesHomePage";
import Message from "../../features/Message/Message";
import Announce from "../../features/Announce/Announce";
import Mariana from "../../features/Mariana/Mariana";
import styles from "./Informations.module.scss";

const Informations = () => {
  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <ArticlesHomePage />
        </Grid>
        <Grid item xs={4}>
          <Message />
        </Grid>
        <Grid item xs={6}>
          <Announce />
        </Grid>
        <Grid item xs={6}>
          <Mariana />
        </Grid>
      </Grid>
    </div>
  );
};

export default Informations;
