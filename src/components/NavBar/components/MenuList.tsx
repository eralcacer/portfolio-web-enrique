import React from "react";

import "../style/navbar.css";

function MenuList() {
  return (
    <>
      {/* <div className={`${isMenuOpen ? "mob-menu" : ""}`}> */}
      <ul className={`menu-list-comp`}>
        <li>
          <a className="link-menu" href="#about-me">
            About Enrique
          </a>
        </li>
        <li>
          <a className="link-menu" href="#experience">
            Experience
          </a>
        </li>
        {/* <li>
          <a className="link-menu" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="link-menu" href="#">
            Companies
          </a>
        </li>
        <li>
          <a className="link-menu" href="#">
            Follow Me
          </a>
        </li> */}
      </ul>
      {/* </div> */}
    </>
  );
}

export default MenuList;
