import React from "react";

import "../style/navbar.css";

function MenuList() {
  return (
    <ul className="menu-list-comp mob-menu">
      <li>
        <a className="link-menu" href="#">
          About Enrique
        </a>
      </li>
      <li>
        <a className="link-menu" href="#">
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
  );
}

export default MenuList;
