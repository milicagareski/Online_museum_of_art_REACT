import { useState, useEffect } from "react";

export function useSlider<T>(data: T[]) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === data.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  return currentIndex;
}
