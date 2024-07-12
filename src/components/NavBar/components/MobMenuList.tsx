import React from "react";
import SocialMediaComponent from "../../AboutMe/components/SocialMediaComponent";

interface MobMenuListProps {
  isMenuOpen: boolean;
  handleMenuButton: (componentId: string) => void;
}

function MobMenuList({ isMenuOpen, handleMenuButton }: MobMenuListProps) {
  return (
    <ul className={`mob-menu ${isMenuOpen ? "menu-open" : "menu-close"}`}>
      <li>
        <div
          className="link-menu"
          onClick={(): void => handleMenuButton("about-me")}
        >
          About Enrique
        </div>
      </li>
      <li>
        <div
          className="link-menu"
          onClick={(): void => handleMenuButton("experience")}
        >
          Experience
        </div>
      </li>
      <li>
        <div
          className="link-menu"
          onClick={(): void => handleMenuButton("education")}
        >
          Education
        </div>
      </li>
      <li>
        <div
          className="link-menu"
          onClick={(): void => handleMenuButton("portfolio")}
        >
          My Portfolio
        </div>
      </li>
      <li>
        <SocialMediaComponent />
      </li>
    </ul>
  );
}

export default MobMenuList;
