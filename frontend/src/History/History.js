import React from "react"; // Importing React library
import styled from "styled-components"; // Importing styled-components for styling
import { useGlobalContext } from "../context/globalContext"; // Importing custom hook to access global context

function History() {
  const { transactionHistory } = useGlobalContext(); // Accessing transactionHistory from global context

  const [...history] = transactionHistory(); // Destructuring transactionHistory to history array

  // Rendering recent transaction history
  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      {/* Mapping over history array to display transaction items */}
      {history.map((item) => {
        const { _id, title, amount, type } = item; // Destructuring item properties
        return (
          <div key={_id} className="history-item">
            {/* Displaying transaction title */}
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {title}
            </p>

            {/* Displaying transaction amount with proper sign */}
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)", // Conditional text color based on transaction type
              }}
            >
              {/* Displaying expense amount with '-' sign */}
              {/* Displaying income amount with '+' sign */}
              {type === "expense"
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
}

// Styling for the History component using styled-components
const HistoryStyled = styled.div`
  display: flex; /* Set the display property to flex */
  flex-direction: column; /* Set the flex-direction to column */
  gap: 1rem; /* Set the gap between child elements to 1rem  */

  /* Styling for elements with class "history-item" inside HistoryStyled */
  .history-item {
    background: #fcf6f9; /* Set the background color to #fcf6f9 */
    border: 2px solid #ffffff; /* Set a border with 2px solid white color */
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06); /* Apply a box shadow */
    padding: 1rem; /* Set padding to 1rem */
    border-radius: 20px; /* Set border radius to 20px */
    display: flex; /* Set the display property to flex */
    justify-content: space-between; /* Align items along the main axis with space-between */
    align-items: center; /* Align items along the cross axis to the center */
  }
`;

export default History; // Exporting the History component as default
