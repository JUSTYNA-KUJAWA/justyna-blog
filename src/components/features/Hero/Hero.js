import React from "react";
import styles from "./Hero.module.scss";
import Carousel from "../../common/Carousel/Carousel";
import { Link } from "react-router-dom";
import { CardActions } from "@material-ui/core";
import OutlinedButton from "../../views/OfflineButton/OfflineButton";

const Hero = () => {
  return (
    <div className={styles.root}>
      <Carousel
        image_1={`${process.env.PUBLIC_URL}/images/mainPage/html.jpg`}
        image_2={`${process.env.PUBLIC_URL}/images/mainPage/css.jpg`}
        image_3={`${process.env.PUBLIC_URL}/images/mainPage/bootstrap.jpg`}
        image_4={`${process.env.PUBLIC_URL}/images/mainPage/javascript.jpg`}
        image_5={`${process.env.PUBLIC_URL}/images/mainPage/react.jpg`}
        image_6={`${process.env.PUBLIC_URL}/images/mainPage/nodejs.jpg`}
      />
      <div className={styles.banner}>
        <CardActions>
          <Link to={"/Projects"} className={styles.link}>
            {" "}
            <OutlinedButton>See all projects</OutlinedButton>
          </Link>
        </CardActions>
      </div>
    </div>
  );
};

export default Hero;
