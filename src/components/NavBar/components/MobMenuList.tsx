import React from "react";
import SocialMediaComponent from "../../AboutMe/components/SocialMediaComponent";

interface MobMenuListProps {
  isMenuOpen: boolean;
  isComponentMounted: boolean;
  handleMenuButton: () => void;
}

function MobMenuList({
  isMenuOpen,
  isComponentMounted,
  handleMenuButton,
}: MobMenuListProps) {
  return (
    <ul className={`mob-menu ${isMenuOpen ? "menu-open" : "menu-close"}`}>
      <li>
        <a
          className="link-menu"
          href="#about-me"
          onClick={(): void => handleMenuButton()}>
          About Enrique
        </a>
      </li>
      <li>
        <a
          className="link-menu"
          href="#experience"
          onClick={(): void => handleMenuButton()}>
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
      <li>
        <SocialMediaComponent />
      </li>
    </ul>
  );
}

export default MobMenuList;
