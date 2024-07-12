import { useRef } from "react";

import "./style/education-style.css";
import EducationRightComp from "./components/EducationRightComp";
import EducationLeftComp from "./components/EducationLeftComp";
import useLazyLoader from "../../hooks/useLazyLoader/useLazyLoader";

function EducationMain() {
  const educationCompRef = useRef<HTMLDivElement>(null);
  const lazyLoaderInView = useLazyLoader({
    componentRef: educationCompRef,
    optionsMargin: { rootMargin: "0px" },
  });

  return (
    <div ref={educationCompRef} className="education-comp" id="education">
      {lazyLoaderInView ? (
        <div className="education-comp-container">
          <EducationLeftComp />
          <EducationRightComp />
        </div>
      ) : null}
    </div>
  );
}

export default EducationMain;
