// Import necessary modules and icons from utilities
import React from "react";
import styled from "styled-components";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  pound,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/Icons";
import Button from "../Button/Button";
import { dateFormat } from "../../utils/dateFormat";

// Functional component for displaying individual income items
function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  // Function to determine the appropriate category icon for income
  const categoryIcon = () => {
    // Switch statement mapping category to respective icons
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      // Default return is an empty string
      default:
        return "";
    }
  };

  // Function to determine the appropriate category icon for expenses
  const expenseCatIcon = () => {
    // Switch statement mapping category to respective icons
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      // Default return is an empty string
      default:
        return "";
    }
  };

  // Log the type for debugging purposes
  console.log("type", type);

  // Render the Income Item component
  return (
    <IncomeItemStyled indicator={indicatorColor}>
      {/* Displaying the category icon based on the type */}
      <div className="icon">
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </div>
      {/* Displaying income item details */}
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            {/* Displaying specific income item details */}
            <p>
              {pound} {amount}
            </p>
            <p>
              {calender} {dateFormat(date)}
            </p>
            <p>
              {comment}
              {description}
            </p>
          </div>
          {/* Button to delete the income item */}
          <div className="btn-con">
            <Button
              icon={trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--primary-color"}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"var(--color-green)"}
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </IncomeItemStyled>
  );
}

// Styled component for Income Item
const IncomeItemStyled = styled.div`
  // Styling for Income Item container
  background: #fcf6f9; // Background color
  border: 2px solid #ffffff; // Border style and color
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06); // Shadow for a raised effect
  border-radius: 20px; // Rounded corners
  padding: 1rem; // Padding inside the container
  margin-bottom: 1rem; // Margin at the bottom
  display: flex; // Display as flex container
  align-items: center; // Align items along the cross-axis (vertically)
  gap: 1rem; // Spacing between child elements
  width: 100%; // Full width
  color: #222260; // Text color

  // Styling for the category icon container
  .icon {
    width: 80px; // Width of the icon container
    height: 80px; // Height of the icon container
    border-radius: 20px; // Rounded corners for the icon container
    background: #f5f5f5; // Background color for the icon container
    display: flex; // Display as flex container
    align-items: center; // Align items along the cross-axis (vertically)
    justify-content: center; // Center content along the main axis (horizontally)
    border: 2px solid #ffffff; // Border style and color for the icon container
    i {
      font-size: 2.6rem; // Font size for the icon
    }
  }

  // Styling for the content area of the Income Item
  .content {
    flex: 1; // Flex grow to occupy available space
    display: flex; // Display as flex container
    flex-direction: column; // Column-wise arrangement
    gap: 0.2rem; // Spacing between child elements
  }
  // Styling for the title of the Income Item
  h5 {
    font-size: 1.3rem; // Font size for the title
    padding-left: 2rem; // Left padding for the title
    position: relative; // Positioning context for pseudo-element
    &::before {
      content: ""; // Empty content for the pseudo-element
      position: absolute; // Positioned absolutely
      left: 0; // Positioning from the left
      top: 50%; // Positioning from the top
      transform: translateY(-50%); // Center vertically using translate
      width: 0.8rem; // Width of the indicator
      height: 0.8rem; // Height of the indicator
      border-radius: 50%; // Border radius for a circle
      background: ${(props) =>
        props.indicator}; // Indicator color based on prop value
    }
  }
  // Styling for inner content of the Income Item
  .inner-content {
    display: flex; // Display as flex container
    justify-content: space-between; // Space between child elements
    align-items: center; // Align items along the cross-axis (vertically)
    .text {
      display: flex; // Display as flex container
      align-items: center; // Align items along the cross-axis (vertically)
      gap: 1.5rem; // Spacing between child elements

      // Styling for paragraph elements inside the text
      p {
        display: flex; // Display as flex container
        align-items: center; // Align items along the cross-axis (vertically)
        gap: 0.5rem; // Spacing between child elements
        color: var(--primary-color); // Text color based on a variable
        opacity: 0.8; // Opacity level for the text
      }
    }
  }
`;
export default IncomeItem; // Exporting the Income Item styled component
