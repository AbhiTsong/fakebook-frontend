import { useState, useEffect } from "react";

function useCalcInnerWidth(initWidth) {
  const [width, setWidth] = useState(initWidth);
  useEffect(() => {
    function findWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", findWidth);
    return () => window.removeEventListener("resize", findWidth);
  }, []);

  return width;
}

export { useCalcInnerWidth };
