import React from "react";
import ArticleView from "../../common/ArticleView/ArticleView";
import styles from "./ArticlesHomePage.module.scss";
import { Grid } from "@material-ui/core/";

const ArticlesHomePage = () => {
  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ArticleView />
        </Grid>
      </Grid>
    </div>
  );
};

export default ArticlesHomePage;
