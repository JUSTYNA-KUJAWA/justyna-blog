import React from "react";
import Announce from "../../features/Announce/Announce";
import Mariana from "../../features/Mariana/Mariana";
import styles from "./ArticlesHomePageSub.module.scss";
import { Grid } from "@material-ui/core/";

const ArticlesHomePageSub = () => {
  return (
    <div className={styles.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Announce />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Mariana />
        </Grid>
      </Grid>
    </div>
  );
};

export default ArticlesHomePageSub;
