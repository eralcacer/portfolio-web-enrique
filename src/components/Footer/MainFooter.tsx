import React from "react";

import "./style/footer.css";
import LeftSection from "./components/LeftSection";
import RightSectionMenu from "./components/RightSectionMenu";

function MainFooter() {
  return (
    <div className="footer-comp">
      <LeftSection />
      <RightSectionMenu />
    </div>
  );
}

export default MainFooter;
