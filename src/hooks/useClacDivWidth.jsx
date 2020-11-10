import { useState, useEffect } from "react";

function useCalcDivWidth(width) {
  
  const [container, setContainer] = useState(0);
  
  useEffect(() => {
    let onLoadWidth = () => width.current.offsetWidth;
    function handleDivWidth() {
      setContainer(onLoadWidth());
    }

    if (width.current) {
      setContainer(onLoadWidth());
    }

    window.addEventListener("resize", handleDivWidth);

    return () => window.removeEventListener("resize", handleDivWidth);
  }, [width]);

  return container;
}

export { useCalcDivWidth };
