import React, { useEffect, useRef, useState } from "react";

import "./style/education-style.css";
import EducationRightComp from "./components/EducationRightComp";
import EducationLeftComp from "./components/EducationLeftComp";
import useLazyLoader from "../../hooks/useLazyLoader/useLazyLoader";

function EducationMain() {
  const educationCompRef = useRef<HTMLDivElement>(null);
  const [stateREady, setStateReady] = useState<boolean>(false);
  const lazyLoaderInView = useLazyLoader({
    componentRef: stateREady ? educationCompRef.current : null,
    optionsMargin: { rootMargin: "0%" },
  });

  useEffect(() => {
    if (educationCompRef.current) {
      setStateReady(true);
    }
  }, [educationCompRef]);

  return (
    <div ref={educationCompRef} className="education-comp">
      {lazyLoaderInView ? (
        <>
          <EducationLeftComp />
          <EducationRightComp />
        </>
      ) : null}
    </div>
  );
}

export default EducationMain;
