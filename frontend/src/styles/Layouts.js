// Importing styled-components and assigning the default export to the variable 'styled'
const { default: styled } = require("styled-components");

// Styling for the main layout
export const MainLayout = styled.div`
  padding: 2rem; // Adding padding of 2rem
  height: 100%; // Setting height to 100%
  display: flex; // Using flexbox for layout
  gap: 2rem; // Adding a gap between elements of 2rem
`;

// Styling for the inner layout
export const InnerLayout = styled.div`
  padding: 2rem 1.5rem; // Adding padding of 2rem (top and bottom) and 1.5rem (left and right)
  width: 100%; // Setting width to 100%
`;
