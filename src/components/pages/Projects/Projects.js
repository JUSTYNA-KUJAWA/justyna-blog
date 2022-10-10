import React from "react";
import { Grid } from "@material-ui/core/";
import ProjectDescription from "../../features/ProjectDescription/ProjectDescription";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={10} sm={12} md={12}>
          <ProjectDescription />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
