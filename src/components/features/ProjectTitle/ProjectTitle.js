import React from "react";
import Container from "../../common/Container/Container";
import styles from "./ProjectTitle.module.scss";

const ProjectTitle = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.box}>
          <h2>MarianaRivasMaal_App</h2>
        </div>
        <div className={styles.box}>
          <h2>Blog_App</h2>
        </div>
        <div className={styles.box}>
          <h2>Music_App</h2>
        </div>
        <div className={styles.box}>
          <h2>Pizzeria_App</h2>
        </div>
        <div className={styles.box}>
          <h2>Women_app</h2>
        </div>
        <div className={styles.box}>
          <h2>Our_Services_App</h2>
        </div>
      </div>
    </Container>
  );
};

export default ProjectTitle;
