import React from "react";
import { Link } from "react-router-dom";
import { CardActions } from "@material-ui/core";
import styles from "./Mariana.module.scss";

const Mariana = () => {
  return (
    <div className={styles.root}>
      <img alt="justyna" src="images/mainPage/mariana.png" />
      <div className={styles.banner}>
        <CardActions>
          <Link to="//www.marianarivasmaal.com" className={styles.link}>
            {" "}
            <p>Visit the website of Mariana Rivas</p>
          </Link>
        </CardActions>
      </div>
    </div>
  );
};

export default Mariana;
