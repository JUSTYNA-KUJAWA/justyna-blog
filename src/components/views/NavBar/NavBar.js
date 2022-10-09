import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import clsx from "clsx";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <h3>Justi_In_IT</h3>
        <h5>How to enjoy programming </h5>
      </div>
      <div className={styles.navLinks}>
        <ul className={clsx(isNavExpanded && styles.isExpanded)}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Articles"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Travel"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              Travel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inActive
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
