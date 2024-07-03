import React from "react";
import MenuList from "../../NavBar/components/MenuList";
import SocialMediaComponent from "../../AboutMe/components/SocialMediaComponent";

function RightSectionMenu() {
  const scrollToView = (componentId: string): void => {
    const scrollingView = document.getElementById(
      componentId
    ) as HTMLElement | null;

    scrollingView?.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <div className="menu-footer">
      <MenuList scrollToView={scrollToView} />
      <SocialMediaComponent />
    </div>
  );
}

export default RightSectionMenu;
