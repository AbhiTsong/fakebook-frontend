import { useState, useEffect } from "react";

function useCalcInnerHeight(innerHeight) {
  const [height, setHeight] = useState(innerHeight);

  useEffect(() => {
    function calcHeight() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", calcHeight);

    return window.removeEventListener("resize", calcHeight);
  }, []);

  return height;
}

export { useCalcInnerHeight };
