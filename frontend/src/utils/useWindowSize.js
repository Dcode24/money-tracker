import { useEffect, useState } from "react";

// Custom hook to track window size changes
export const useWindowSize = () => {
  // Initialize state with window width and height
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    // Function to update size state with current window dimensions
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    // Add event listener to track window resize and call updateSize function
    window.addEventListener("resize", updateSize);

    // Clean-up: Remove event listener on unmount to prevent memory leaks
    return () => window.removeEventListener("resize", updateSize);
  }, []); // Empty dependency array ensures effect runs only once after initial render

  // Return an object with width and height properties representing the window size
  return {
    width: size[0],
    height: size[1],
  };
};
