import React from "react";

import "../style/navbar.css";

interface MenuListProps {
  scrollToView: (componentId: string) => void;
}

function MenuList({ scrollToView }: MenuListProps) {
  return (
    <>
      <ul className={`menu-list-comp`}>
        <li>
          <div className="link-menu" onClick={() => scrollToView("about-me")}>
            About Enrique
          </div>
        </li>
        <li>
          <div className="link-menu" onClick={() => scrollToView("experience")}>
            Experience
          </div>
        </li>
        <li>
          <div className="link-menu" onClick={() => scrollToView("education")}>
            Education
          </div>
        </li>
        <li>
          <div className="link-menu" onClick={() => scrollToView("portfolio")}>
            My Portfolio
          </div>
        </li>
      </ul>
    </>
  );
}

export default MenuList;
