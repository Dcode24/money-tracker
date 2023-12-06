// Importing necessary dependencies and utilities
import React from "react";
import styled, { keyframes } from "styled-components"; // Importing styled-components and keyframes utility
import { useWindowSize } from "../../utils/useWindowSize"; // Importing the useWindowSize utility function

// Functional component 'Orb'
const Orb = () => {
  // Destructuring width and height from the useWindowSize hook
  const { width, height } = useWindowSize();

  console.log(width, height); // Logging the width and height to the console

  // Defining the 'moveOrb' keyframes for the animation
  const moveOrb = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width}px,${height / 2}px);
        }
        100%{
            transform: translate(0,0);
        }
    `;

  // Styling for the Orb component using styled-components
  const OrbStyled = styled.div`
    width: 70vh; /* Width of the orb */
    height: 70vh; /* Height of the orb */
    position: absolute; /* Absolute positioning */
    border-radius: 50%; /* Rounded shape */
    margin-left: -37vh; /* Adjusting margin for centering horizontally */
    margin-top: -37vh; /* Adjusting margin for centering vertically */
    background: linear-gradient(
      180deg,
      #e0b8d3 0%,
      #f2994a 100%
    ); /* Gradient background */
    filter: blur(400px); /* Applying blur effect */
    animation: ${moveOrb} 15s alternate linear infinite; /* Applying the moveOrb animation */
  `;
  // Returning the styled Orb component
  return <OrbStyled></OrbStyled>;
};

export default Orb; // Exporting the Orb component
