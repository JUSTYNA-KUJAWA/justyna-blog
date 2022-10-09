import React from "react";
import { Grid } from "@material-ui/core/";
import ProjectTitle from "../../features/ProjectTitle/ProjectTitle";
import ProjectDescription from "../../features/ProjectDescription/ProjectDescription";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.root}>
      <h1>Projects</h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ProjectTitle />
        </Grid>
        <Grid item xs={6}>
          <ProjectDescription />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
