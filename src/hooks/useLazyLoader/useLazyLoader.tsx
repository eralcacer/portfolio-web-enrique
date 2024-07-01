import { RefObject, useEffect, useState } from "react";

interface useLazyLoaderProps {
  componentRef: RefObject<HTMLDivElement>;
  optionsMargin: IntersectionObserverInit | undefined;
}

function useLazyLoader({
  componentRef,
  optionsMargin,
}: useLazyLoaderProps): boolean {
  const [inView, setInView] = useState<boolean>(false);
  useEffect(() => {
    const onChange = (entries: any[], observer: IntersectionObserver) => {
      const elem = entries[0];
      if (elem.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onChange, optionsMargin);
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
  }, [componentRef, optionsMargin]);
  return inView;
}

export default useLazyLoader;
