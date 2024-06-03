import React from "react";
import MenuList from "../../NavBar/components/MenuList";
import SocialMediaComponent from "../../AboutMe/components/SocialMediaComponent";

function RightSectionMenu() {
  return (
    <div className="menu-footer">
      <MenuList />
      <SocialMediaComponent />
    </div>
  );
}

export default RightSectionMenu;
