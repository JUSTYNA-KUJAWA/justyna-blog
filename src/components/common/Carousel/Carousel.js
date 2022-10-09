import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import styles from "./Carousel.module.scss";

const CarouselProductPage = ({
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
}) => (
  <div className={styles.carouselContainer}>
    <Carousel
      interval={4000}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      autoFocus={true}
      infiniteLoop={true}
    >
      <div className={styles.slide}>
        <img src={image_1} alt="" />
        <p>HTML</p>
      </div>
      <div className={styles.slide}>
        <img src={image_2} alt="" />
      </div>
      <div className={styles.slide}>
        <img src={image_3} alt="" />
      </div>
      <div className={styles.slide}>
        <img src={image_4} alt="" />
      </div>
      <div className={styles.slide}>
        <img src={image_5} alt="" />
      </div>
      <div className={styles.slide}>
        <img src={image_6} alt="" />
      </div>
    </Carousel>
  </div>
);

CarouselProductPage.propTypes = {
  image_1: PropTypes.string,
  image_2: PropTypes.string,
};

export default CarouselProductPage;
