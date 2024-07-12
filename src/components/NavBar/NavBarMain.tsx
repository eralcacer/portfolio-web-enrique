import React, { useState } from "react";

import "./style/navbar.css";
import LogoComp from "./components/LogoComp";
import MenuList from "./components/MenuList";
import MobMenuList from "./components/MobMenuList";

function NavBarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isComponentMounted, setIsComponentMounted] = useState<boolean>(false);

  const handleMenuButton = (componentId: string): void => {
    const elementBody = document.body;
    if (!isComponentMounted) {
      setIsComponentMounted(!isComponentMounted);
    }
    if (!isMenuOpen === true) {
      elementBody.style["overflow"] = "hidden";
    } else if (!isMenuOpen === false) {
      elementBody.style["overflow"] = "scroll";
    }
    if (componentId.trim() !== "") {
      scrollToView(componentId);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToView = (componentId: string): void => {
    const scrollingView = document.getElementById(
      componentId
    ) as HTMLElement | null;

    scrollingView?.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <>
      <nav className="nav-bar-comp">
        <div className="menu-comp-top">
          <LogoComp />
          <div
            className={`menu-icon ${
              isMenuOpen ? "open" : isComponentMounted ? "close" : ""
            }`}
            onClick={(): void => handleMenuButton("")}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            )}
          </div>
          <MenuList scrollToView={scrollToView} />
        </div>
        <MobMenuList
          isMenuOpen={isMenuOpen}
          handleMenuButton={handleMenuButton}
        />
      </nav>
    </>
  );
}

export default NavBarMain;
