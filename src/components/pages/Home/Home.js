import React from "react";
import Description from "../../features/Description/Description";
import Hero from "../../features/Hero/Hero";
import Container from "../../common/Container/Container";
import Informations from "../../views/Informations/Informations";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.root}>
      <Container>
        <Description />
        <Informations />
        <Hero />
      </Container>
    </div>
  );
};

export default Home;
