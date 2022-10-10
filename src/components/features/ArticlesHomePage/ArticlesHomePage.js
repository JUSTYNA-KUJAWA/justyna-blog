import React from "react";
import ArticleView from "../../common/ArticleView/ArticleView";
import Message from "../../features/Message/Message";
import styles from "./ArticlesHomePage.module.scss";
import { Grid } from "@material-ui/core/";

const ArticlesHomePage = () => {
  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10} md={7}>
          <ArticleView />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Message />
        </Grid>
      </Grid>
    </div>
  );
};

export default ArticlesHomePage;
