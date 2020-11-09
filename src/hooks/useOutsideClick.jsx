import { useRef, useState, useEffect } from "react";

function useOusideClick(init) {
  let ref = useRef(null);
  let [visible, setVisible] = useState(false);

  function handleOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) setVisible(false);
  }

  useEffect(() => {
    document.addEventListener("click", handleOutside, true);
    return () => {
      document.removeEventListener("click", handleOutside, true);
    };
  }, [ref]);

  return { visible, setVisible, ref };
}

export { useOusideClick };
