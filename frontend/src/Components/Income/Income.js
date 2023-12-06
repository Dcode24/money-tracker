// Import necessary dependencies and components
import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

// Define Income component
function Income() {
  // Access required functions and state from global context
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();

  // Fetch incomes on initial component render using useEffect
  useEffect(() => {
    getIncomes();
  }, []);

  // Return JSX for Income component
  return (
    // Root styled component for income section
    <IncomeStyled>
      {/* Layout component for inner content */}
      <InnerLayout>
        {/* Heading for income section */}
        <h1>Incomes</h1>
        {/* Display total income */}
        <h2 className="total-income">
          Total Income: <span>£{totalIncome()}</span>
        </h2>
        {/* Container for income-related content */}
        <div className="income-content">
          {/* Container for the form to add income */}
          <div className="form-container">
            <Form />
          </div>
          {/* Container for displaying the list of incomes */}
          <div className="incomes">
            {/* Map through incomes array to display individual income items */}
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

// Styled component for Income styling
const IncomeStyled = styled.div`
  display: flex; /* Set display as flex */
  overflow: auto; /* Enable horizontal overflow scrolling */
  .total-income {
    display: flex; /* Set display as flex */
    justify-content: center; /* Center align content */
    align-items: center; /* Center align items */
    background: #fcf6f9; /* Set background color */
    border: 2px solid #ffffff; /* Set border */
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.6); /* Apply box-shadow */
    border-radius: 20px; /* Apply border-radius */
    padding: 1rem; /* Apply padding */
    margin: 1rem 0; /* Apply margin */
    font-size: 2rem; /* Set font size */
    gap: 0.5rem; /* Set gap between elements */
    span {
      font-szie: 2.5rem; /* Set font size */
      font-weight: 800; /* Set font weight */
      color: VAR(--color-green); /* Set text color */
    }
  }
  .income-content {
    display: flex; /* Set display as flex */
    gap: 2rem; /* Set gap between child elements */
    .incomes {
      flex: 1; /* Take remaining space */
    }
  }
`;
export default Income; /* Take remaining space */
