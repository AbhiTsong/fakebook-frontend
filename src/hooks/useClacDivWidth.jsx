import { useState, useEffect } from "react";

function useCalcDivWidth(width) {
  let onLoadWidth = () => width.current.offsetWidth;

  const [container, setContainer] = useState(0);

  useEffect(() => {
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
