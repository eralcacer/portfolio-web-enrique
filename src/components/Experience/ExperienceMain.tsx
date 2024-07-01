import { useRef } from "react";

import "./style/experience-style.css";
import RecapComp from "./components/RecapComponent/RecapComp";
import useLazyLoader from "../../hooks/useLazyLoader/useLazyLoader";

function ExperienceMain() {
  const experienceCompRef = useRef<HTMLDivElement>(null);
  const lazyLoaderInView = useLazyLoader({
    componentRef: experienceCompRef,
    optionsMargin: { rootMargin: "0px" },
  });

  return (
    <div ref={experienceCompRef} className="experience-comp" id="experience">
      {lazyLoaderInView ? <RecapComp /> : null}
    </div>
  );
}

export default ExperienceMain;
