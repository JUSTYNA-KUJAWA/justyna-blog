import React from "react";
import Container from "../../common/Container/Container";
import styles from "./ProjectTitle.module.scss";

const ProjectTitle = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div>
          <h2>MarianaRivasMaal_App</h2>
        </div>
        <div>
          <h2>Blog_App</h2>
        </div>
        <div>
          <h2>Music_App</h2>
        </div>
        <div>
          <h2>Pizzeria_App</h2>
        </div>
        <div>
          <h2>Women_app</h2>
        </div>
        <div>
          <h2>Our_Services_App</h2>
        </div>
      </div>
    </Container>
  );
};

export default ProjectTitle;
