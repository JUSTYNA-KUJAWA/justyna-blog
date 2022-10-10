import React from "react";
import { Link } from "react-router-dom";
import Container from "../../common/Container/Container";
import styles from "./ProjectDescription.module.scss";

const ProjectDescription = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.box}>
          <h2>MRM_App</h2>
          <h3>ArtShop website with the hand made paints of Mariana.</h3>
          <h3>
            Technologies: JavaScript, React, Redux, Node.js, Express.js,
            MongoDB.
          </h3>
          <Link
            to="//github.com/JUSTYNA-KUJAWA/project-final"
            className={styles.link}
          >
            <h3>Github Project</h3>
          </Link>
          <Link to="//marianarivasmaal.herokuapp.com" className={styles.link}>
            <h3>Website</h3>
          </Link>
        </div>
        <div className={styles.box}>
          <h2>BulletinB_App</h2>
          <h3>
            {" "}
            On the home page, it shows a list of posts. After clicking on a
            given post, the application will go to the subpage of a single post.
            In addition, on the page of a single post, you can click the "Edit"
            button and go to the post editing subpage or "Delete" post.
          </h3>
          <h3>Technologies: JavaScript, React, Redux.</h3>
          <Link to="//github.com/JUSTYNA-KUJAWA/blog" className={styles.link}>
            <h3>Github Project</h3>
          </Link>
          <Link to="//blog-justi-ququ.herokuapp.com" className={styles.link}>
            <h3>Website</h3>
          </Link>
        </div>
        <div className={styles.box}>
          <h2>Music_App</h2>
          <h3>
            The basis of the entire project is the audio player. There are three
            subpages in the project: the main page with a list of songs and a
            box with information about the possibility of subscribing, a subpage
            to search for songs and a Discover subpage, which will propose one
            random song.
          </h3>
          <h3>Technologies: JavaScript, HTML, CSS</h3>
          <Link
            to="//github.com/JUSTYNA-KUJAWA/PROJECT-TASTE"
            className={styles.link}
          >
            <h3>Github Project</h3>
          </Link>

          <Link
            to="//powerful-hollows-50022.herokuapp.com"
            className={styles.link}
          >
            <h3>Website</h3>
          </Link>
        </div>
        <div className={styles.box}>
          <h2>Pizzeria_App</h2>
          <h3>
            The application of the pizzeria's website, where we have 3 subpages
            from the home page, where we can see information about the store. On
            the other two pages, we can place an order and reserve a table for a
            selected date, time and number of people.
          </h3>
          <h3>Technologies: JavaScript, HTML, CSS</h3>
          <Link
            to="//github.com/JUSTYNA-KUJAWA/project-pizzeria"
            className={styles.link}
          >
            <h3>Github Project</h3>
          </Link>
          <Link
            to="//peaceful-escarpment-94656.herokuapp.com"
            className={styles.link}
          >
            <h3>Website</h3>
          </Link>
        </div>
        <div className={styles.box}>
          <h2>Women_App</h2>
          <h3>Women's clothing store website application using Bootstrap.</h3>
          <h3>Technologies:Bootstrap, HTML, CSS, Github Pages</h3>
          <Link to="//github.com/JUSTYNA-KUJAWA/Women" className={styles.link}>
            <h3>Github Project</h3>
          </Link>
          <Link to="//justyna-kujawa.github.io/Women/" className={styles.link}>
            <h3>Website</h3>
          </Link>
        </div>
        <div className={styles.box}>
          <h2>OurServices_App</h2>
          <h3>
            My first website for an online store using Html and Css. Building a
            simple website with header, content, contact and footer.
          </h3>
          <h3>Technologies: HTML, CSS, Github Pages</h3>
          <Link
            to="//github.com/JUSTYNA-KUJAWA/our_services"
            className={styles.link}
          >
            <h3>Github Project</h3>
          </Link>
          <Link
            to="//justyna-kujawa.github.io/our_services/"
            className={styles.link}
          >
            <h3>Website</h3>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDescription;
