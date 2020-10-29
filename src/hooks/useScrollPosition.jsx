import { useState, useEffect } from "react";

function useScrollPosition(state, pos) {
  let [scrollPos, setScrollPosition] = useState(state);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let topPos = window.pageYOffset <= pos;
      if (topPos === false) {
        setScrollPosition(false);
      } else {
        setScrollPosition(true);
      }
    });
    console.log("scrollPos scrollPos ----",window.pageYOffset)
    return () => {
      // window.removeEventListener("scroll");
    };
  }, [pos, scrollPos]);


  return [scrollPos];
}

export default useScrollPosition;
