import React from "react";

import Container from "../../common/Container/Container";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <Container>
      <div className={styles.root}>
        <p>©Copyright 2022 JustiInIT | All Rights Reserved </p>
      </div>
    </Container>
  );
};

export default Footer;
