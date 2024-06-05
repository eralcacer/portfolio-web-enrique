import React, { useEffect, useRef } from "react";

import "./style/counter-num.css";

interface CounterNumbersProps {
  numberCounter: number;
}

function CounterNumbers({ numberCounter }: CounterNumbersProps) {
  const counterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, 600);

    return () => clearTimeout(timer);
  });

  const startAnimation = (): any => {
    let initialValue = 0;
    const interval = setInterval(() => {
      updateCounter(interval, initialValue);
      if (initialValue >= numberCounter) {
        clearInterval(interval);
        return;
      }
      if (numberCounter > 99) {
        initialValue += 10;
      } else if (numberCounter > 20) {
        initialValue += 5;
      } else if (numberCounter > 10) {
        initialValue += 2;
      } else {
        initialValue++;
      }
    }, 100);

    return () => clearInterval(interval);
  };

  const updateCounter = (interval: NodeJS.Timeout, value: number) => {
    if (counterRef.current) {
      const symbolExtra = value === numberCounter ? "+" : "";
      counterRef.current.innerText = String(value + symbolExtra);
    }
    if (value >= numberCounter) {
      clearInterval(interval);
    }
  };

  return (
    <div className="counter-comp">
      <h1 ref={counterRef} className="counter gradient-txt-red-yellow">
        0
      </h1>
    </div>
  );
}

export default CounterNumbers;
