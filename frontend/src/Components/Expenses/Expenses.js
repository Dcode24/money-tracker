// Import necessary dependencies and components
import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form"; // Import Form component
import IncomeItem from "../IncomeItem/IncomeItem"; // Import IncomeItem component
import ExpenseForm from "./ExpenseForm"; // Import ExpenseForm component

// Define Expenses component
function Expenses() {
  // Access required functions and state from global context
  const { addIncome, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  // Fetch expenses on component mount
  useEffect(() => {
    getExpenses();
  }, []);

  // Return JSX for Expenses component
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        {/* Display total expenses */}
        <h2 className="total-expense">
          Total Expense: <span>£{totalExpenses()}</span>
        </h2>
        <div className="expense-content">
          {/* Container for ExpenseForm */}
          <div className="form-container">
            <ExpenseForm />
          </div>
          {/* Display list of expenses */}
          <div className="expenses">
            {/* Map through expenses and render each as an IncomeItem */}
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              console.log(income);

              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  type={type}
                  date={date}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

// Styled components for Expenses component
const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  /* Styling for total expense section */
  .total-expense {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    /* Styling for the total amount */
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  /* Styling for expense content layout */
  .expense-content {
    display: flex;
    gap: 2rem;
    /* Styling for the form and expenses container */
    .expenses {
      flex: 1;
    }
  }
`;
export default Expenses; // Export Expenses component
