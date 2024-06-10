import React, { useState } from "react";

import "../style/navbar.css";

function MenuList() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="menu-icon"
        onClick={(): void => setIsMenuOpen(!isMenuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      {/* <div className={`${isMenuOpen ? "mob-menu" : ""}`}> */}
      <ul className={`menu-list-comp ${isMenuOpen ? "mob-menu" : ""}`}>
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
        <li>
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
        </li>
      </ul>
      {/* </div> */}
    </>
  );
}

export default MenuList;
