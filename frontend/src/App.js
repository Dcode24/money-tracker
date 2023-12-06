import React, { useState, useMemo } from "react"; // Importing necessary modules and components
import styled from "styled-components"; // Styling library
import bg from "./img/bg.png"; // Background image
import { MainLayout } from "./styles/Layouts"; // Importing the main layout component
import Orb from "./Components/Orb/Orb"; // Orb component
import Navigation from "./Components/Navigation/Navigation"; // Navigation component
import Dashboard from "./Components/Dashboard/Dashboard"; // Dashboard component
import Income from "./Components/Income/Income"; // Income component
import Expenses from "./Components/Expenses/Expenses"; // Expenses component
import { useGlobalContext } from "./context/globalContext"; // Accessing global context

function App() {
  // Main App component
  // State to manage the active component
  const [active, setActive] = useState(1); // Initialize active state with a default value of 1

  // Accessing global context
  const global = useGlobalContext(); // Using context to access global data
  console.log(global); // Logging global data

  // Function to display the selected component based on 'active' state
  const displayData = () => {
    switch (active) {
      case 1: // When active is 1, render Dashboard component
        return <Dashboard />;
      case 2: // When active is 2, render Dashboard component (potentially change this to a different component)
        return <Dashboard />;
      case 3: // When active is 3, render Income component
        return <Income />;
      case 4: // When active is 4, render Expenses component
        return <Expenses />;
      default: // Default case, render Dashboard component
        return <Dashboard />;
    }
  };

  // Memoization of the <Orb /> component to optimize performance
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  return (
    <AppStyled bg={bg} className="App">
      {" "}
      {/* Styled component for the main app container */}
      {orbMemo} {/* Render the Orb component */}
      <MainLayout>
        {" "}
        {/* Render the MainLayout component */}
        {/* Navigation component for switching between sections */}
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>{" "}
        {/* Render the selected component based on active state */}
      </MainLayout>
    </AppStyled>
  );
}

// Styled component for the main app container
const AppStyled = styled.div`
  // Styling for the main app container
  height: 100vh; // Full height of the viewport
  background-image: url(${(props) => props.bg}); // Set background image
  position: relative; // Relative positioning
  main {
    // Styling for the main content area
    flex: 1; // Expand to fill available space
    background: rgba(252, 246, 249, 0.78); // Background color with transparency
    border: 3px solid #ffffff; // White border with 3px width
    backdrop-filter: blur(4.5px); // Apply blur effect to the backdrop
    border-radius: 32px; // Rounded corners
    overflow-x: hidden; // Hide horizontal overflow
    &::-webkit-scrollbar {
      // Styling for webkit scrollbar (if visible)
      width: 0; // Hide scrollbar
    }
  }
`;

export default App; // Export the App component as the default
