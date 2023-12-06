import React from "react";
import styled from "styled-components";

// Button component receiving props for customization
function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
  return (
    // Styling the button with received props
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}

// Styled button using styled-components
const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
`;

export default Button; // Exporting the Button component
