import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import styles from "./Justyna.module.scss";

const Justyna = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.postContainer}>
          <img alt="justyna" src="images/mainPage/justithomas.jpg" />
          <div className={styles.infoContainer}>
            <h1>Justy_In_IT</h1>
            <div className={styles.address}>
              <h1>If you would like to share your story please write to me.</h1>
            </div>
            <div className={styles.text}>
              <p>post</p>
            </div>
            <div className={styles.contactInfo}>
              <h3>Contact info:</h3>
              <p>
                <span>email: justy.kujawa@gmail.com</span>{" "}
              </p>
              <p>
                <span>phone number: 0048 511 561 536</span>{" "}
              </p>
            </div>
            <div className={styles.dates}>
              <p>Published:10-10-2022</p>
            </div>
            <Link to={`/`} className={styles.link}>
              <p>Home</p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Justyna;
