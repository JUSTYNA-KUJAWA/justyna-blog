import React from "react";
import styles from "./Message.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className={styles.root}>
      <div className={styles.socialMedia}>
        <p>Justyna KUJAWA - Junior Web Developer</p>
        <div className={styles.root}>
          <img alt="justyna" src="images/mainPage/logo.jpg" />
        </div>
        <p>
          My goal is to change the industry to Web Developer. I have been
          successfully implementing it since October 2021.
        </p>
        <p>
          During this time, I got to know HTML, CSS, SCSS, Bootstrap,
          JavaScript, React, Redux, Express, MongoDb, Node.js and TypeScript and
          I am learning the SQL.
        </p>
        <p>
          I have knowledge and understanding of two different cultures: polish
          and french. I can take the positives of each of these cultures to my
          advantage.
        </p>

        <h4>Follow me on social media</h4>
        <ul>
          <li>
            <Link to="//www.linkedin.com/in/justyna-kujawa">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          <li>
            <Link to="//twitter.com/kujawa_justyna">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link to="//www.facebook.com/justyna.kujawa">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Message;
