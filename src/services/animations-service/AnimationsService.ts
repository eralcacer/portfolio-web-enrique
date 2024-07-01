const DURATION = 200;
const DELAY = 100;

export const scaleUpAnimate = (key: number): string => {
  return `scaleUp ${DURATION}ms forwards ${DELAY * key}ms`;
};
