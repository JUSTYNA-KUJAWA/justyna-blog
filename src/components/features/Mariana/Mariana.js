import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core/";
import { CardActions } from "@material-ui/core";
import Button from "../../common/Button/Button";
import styles from "./Mariana.module.scss";

const Mariana = () => {
  return (
    <div className={styles.root}>
      <Grid container rowSpacing={3}>
        <Grid item xs={4} sm={8} md={10}>
          <img alt="justyna" src="images/mainPage/mariana.png" />
          <div className={styles.banner}>
            <CardActions>
              <Link to="//www.marianarivasmaal.com" className={styles.link}>
                {" "}
                <Button>Website of Mariana </Button>
              </Link>
            </CardActions>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Mariana;
