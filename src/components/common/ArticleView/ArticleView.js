import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import OfflineButton from "../../views/OfflineButton/OfflineButton";
import styles from "./ArticleView.module.scss";

const ArticleView = () => {
  return (
    <div className={styles.root}>
      <Card elevation={12}>
        <CardHeader title="Justi_In_IN " subheader="October 10, 2022" />
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary" component="p">
            Once upon the time there was a princess Justyna.....hmmm do not
            worry it will not be a love story I invite you to read my road to
            become a women changing profession to IT.... Why this photo? I would
            like to promote the work of my best friend Mariana, you can follow
            her on the social media:
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/justyna`} className={styles.link}>
            <OfflineButton>Read more</OfflineButton>
          </Link>
        </CardActions>
        <CardMedia
          component="img"
          height="700"
          weight="1580"
          image="images/mainPage/justithomas.jpg"
          alt=""
        />
      </Card>
    </div>
  );
};

export default ArticleView;
