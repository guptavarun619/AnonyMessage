import { useEffect } from "react";

function useClickOutsideDetector(ref, setState) {
  useEffect(() => {
    function handleClickOutside(event) {
      console.log(event.target);
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default useClickOutsideDetector;
