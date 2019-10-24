import React from "react"
import ApplyButton from "../ApplyButton"

import css from "./Navbar.module.css";
import logoImg from "../../images/logo.png";

function Navbar() {
  return (
    <header className={css.header}>
      <nav className={css.container}>
        <div className={css.left}>
            <img
              className={css.logo}
              src={logoImg}
              alt="The School of Code logo"
            />
        </div>
        <div className={css.right}>
          <ApplyButton/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
