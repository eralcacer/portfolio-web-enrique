import React, { useEffect, useRef, useState } from "react";

import "./style/experience-style.css";
import RecapComp from "./components/RecapComponent/RecapComp";
import useLazyLoader from "../../hooks/useLazyLoader/useLazyLoader";

function ExperienceMain() {
  const experienceCompRef = useRef<HTMLDivElement>(null);
  const [stateREady, setStateReady] = useState<boolean>(false);
  const lazyLoaderInView = useLazyLoader({
    componentRef: stateREady ? experienceCompRef.current : null,
    optionsMargin: { rootMargin: "-5%" },
  });

  useEffect(() => {
    if (experienceCompRef.current) {
      setStateReady(true);
    }
  }, [experienceCompRef]);

  return (
    <div ref={experienceCompRef} className="experience-comp">
      {lazyLoaderInView ? <RecapComp /> : null}
    </div>
  );
}

export default ExperienceMain;
