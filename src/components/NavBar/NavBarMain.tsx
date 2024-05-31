import React from "react";

import "./style/navbar.css";
import LogoComp from "./components/LogoComp";
import MenuList from "./components/MenuList";

function NavBarMain() {
  return (
    <nav className="nav-bar-comp">
      <LogoComp />
      <MenuList />
    </nav>
  );
}

export default NavBarMain;
