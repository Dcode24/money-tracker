import React from "react"; // Importing React library
import ReactDOM from "react-dom/client"; // Importing ReactDOM for rendering
import App from "./App"; // Importing the main App component
import { GlobalStyle } from "./styles/GlobalStyle"; // Importing global styles
import { GlobalProvider } from "./context/globalContext"; // Importing Global Provider for context

const root = ReactDOM.createRoot(document.getElementById("root")); // Creating a root to render React content
root.render(
  // Rendering the React application into the root element
  <React.StrictMode>
    {" "}
    {/* Strict mode to highlight potential problems */}
    <GlobalStyle /> {/* Global styles applied to the entire app */}
    <GlobalProvider>
      {" "}
      {/* Context provider wrapping the entire app */}
      <App /> {/* Main App component */}
    </GlobalProvider>
  </React.StrictMode>
);
