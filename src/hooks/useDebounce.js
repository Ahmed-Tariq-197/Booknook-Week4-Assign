import { useState, useEffect } from "react";

// waits until the value stops changing for `delay` ms before updating
// used this for the search box so we're not re-filtering the book list
// on literally every keystroke
function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup: if value changes again before the timer finishes, cancel it
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
