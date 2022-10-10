import React from "react";
import styles from "./HeroTravel.module.scss";
import Carousel from "../../common/Carousel/Carousel";

const HeroTravel = () => {
  return (
    <div className={styles.root}>
      <Carousel
        image_1={`${process.env.PUBLIC_URL}/images/travel/travel1.jpg`}
        image_2={`${process.env.PUBLIC_URL}/images/travel/travel2.jpg`}
        image_3={`${process.env.PUBLIC_URL}/images/travel/travel3.jpg`}
        image_4={`${process.env.PUBLIC_URL}/images/travel/travel4.jpg`}
        image_5={`${process.env.PUBLIC_URL}/images/travel/travel5.jpg`}
        image_6={`${process.env.PUBLIC_URL}/images/travel/travel6.jpg`}
        image_7={`${process.env.PUBLIC_URL}/images/travel/travel7.jpg`}
        image_8={`${process.env.PUBLIC_URL}/images/travel/travel8.jpg`}
      />
    </div>
  );
};

export default HeroTravel;
