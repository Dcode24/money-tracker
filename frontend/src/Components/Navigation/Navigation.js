// Importing necessary dependencies and resources
import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png"; // Importing user avatar image
import { menuItems } from "../../utils/menuItems"; // Importing menu items data
import { signout } from "../../utils/Icons"; // Importing signout icon

// Navigation component function taking active state and setActive function as props
function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      {/* User information section */}
      <div className="user-con">
        <img src={avatar} alt="" /> {/* Displaying user avatar */}
        <div className="text">
          <h2>Daniel</h2> {/* User's name */}
          <p>Money Tracker</p> {/* User-related information */}
        </div>
      </div>
      {/* Menu items section */}
      <ul className="menu-items">
        {/* Mapping through menuItems to display individual menu items */}
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)} // Set active item on click
              className={active === item.id ? "active" : ""} // Applying active class based on current active state
            >
              {item.icon} {/* Displaying menu item icon */}
              <span>{item.title}</span> {/* Displaying menu item title */}
            </li>
          );
        })}
      </ul>
      {/* Bottom navigation section */}
      <div className="bottom-nav">
        <li>{signout} Sign Out</li> {/* Displaying signout icon and text */}
      </div>
    </NavStyled>
  );
}

// Styling for the Navigation component using styled-components
const NavStyled = styled.nav`
// Navigation container styles
  padding: 2rem 1.5rem; /* Padding for the navigation container */
  width: 374px; /* Width of the navigation container */
  height: 100%; /* Full height of the navigation container */
  background: rgba(252, 246, 249, 0.78); /* Background color with opacity */
  border: 3px solid #ffffff; /* Border style and color */
  backdrop-filter: blur(4.5px); /* Blur effect for background */
  border-radius: 32px; /* Border radius for rounded corners */
  display: flex; /* Display as flex container */
  flex-direction: column; /* Arrangement as a column */
  justify-content: space-between; /* Spacing between items */
  gap: 2rem; /* Spacing between sections */

  // User information section styles
  .user-con {
    height: 100px; /* Height of the user section */
    display: flex; /* Display as flex container */
    align-items: center; /* Align items along the cross-axis */
    gap: 1rem; /* Spacing between items */
    img {
      /* User avatar image styles */
      width: 80px; /* Width of the avatar */
      height: 80px; /* Height of the avatar */
      border-radius: 50%; /* Rounded avatar */
      object-fit: cover; /* Cover the avatar */
      background: #fcf6f9;  /* Background color */
      border: 2px solid #ffffff; /* Border style and color */
      padding: 0.2rem; /* Padding around the avatar */
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06); /* Shadow effect */
    }
    h2 {
      /* Styling for the user's name */
      color: rgba(149, 34, 96, 1); /* Color for the user's name */
    }
    p {
      /* Styling for user-related information */
      color: rgba(34, 34, 96, 0.6); /* Color for the user-related information */
    }
  }

  // Menu items section styles
  .menu-items {
    flex: 1; /* Flexible to occupy available space */
    display: flex; /* Display as flex container */
    flex-direction: column; /* Arrangement as a column */
    li {
      /* Styling for individual menu items */
      display: grid;  /* Display as grid */
      grid-template-columns: 40px auto; /* Columns in the grid */
      align-items: center; /* Align items along the cross-axis */
      margin: 0.6rem 0;   /* Margin around each item */
      font-weight: 500;  /* Font weight */
      cursor: pointer;  /* Cursor type */
      transition: all 0.4s ease-in-out;  /* Transition effect */
      color: rgba(34, 34, 96, .6); /* Color for the menu items */
      padding-left: 1rem; /* Left padding */
      position: relative; /* Positioning context */
      i{
        /* Styling for the icon within menu items */
        color: rgba(34, 34, 96, 0.6);  /* Color for the icon */
        font-size: 1.4rem; /* Font size for the icon */
        transition: all .4s ease-in-out; /* Transition effect */
      }
    }
    // Active menu item styles
    .active{
        color: rgba(149, 34, 96, 1) !important; /* Color for the active menu item */
        i{
            color: rgba(149, 34, 96, 1) !important;  /* Color for the icon of active menu item */
        }
        &::before{
          /* Indicator before the active menu item */
            content: ""; /* Empty content */
            position: absolute; /* Positioned absolutely */
            left: 0; /* Positioning from the left */
            top: 0; /* Positioning from the top */
            width: 4px;  /* Width of the indicator */
            height: 100%; /* Full height of the indicator */
            background: #952260; /* Color for the indicator */
            border-radius: 0 10px 10px 0; /* Border radius for the indicator */
        }
    }

`;

export default Navigation; // Exporting the Navigation component
