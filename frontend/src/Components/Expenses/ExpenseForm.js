// Importing necessary dependencies and components
import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

// Define ExpenseForm component
function ExpenseForm() {
  // Access required functions and state from global context
  const { addExpense, error, setError } = useGlobalContext();

  // Manage form state using useState hook
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  // Destructure form state variables
  const { title, amount, date, category, description } = inputState;

  // Function to handle input changes
  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };
  // Return JSX for ExpenseForm component
  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
      {/* Display error message if error exists */}
      {error && <p className="error">{error}</p>}

      {/* Input fields for expense form */}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Expense Title"
          onChange={handleInput("title")}
        />
      </div>

      {/* Define form inputs for the expense form */}
      <div className="input-control">
        {/* Input field for expense amount */}
        <input
          value={amount}
          type="text"
          name={"amount"}
          id={"amount"}
          placeholder={"Expense Amount"}
          onChange={handleInput("amount")} // Update 'amount' state on input change
        />
      </div>
      <div className="input-control">
        {/* Date picker for selecting the date */}
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date }); // Update 'date' state on date selection
          }}
        />
      </div>
      <div className="selects input-control">
        {/* Dropdown/select for expense category */}
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")} // Update 'category' state on select change
        >
          <option value="" disabled>
            Select Option
          </option>
          {/* Various options for expense categories */}
          <option value="education">education</option>
          <option value="freelancing">Freelancing</option>
          <option value="groceries">Groceries</option>
          <option value="health">Health</option>
          <option value="subscriptions">Subscriptions</option>
          <option value="takeaways">Takeaways</option>
          <option value="clothing">Clothing</option>
          <option value="travelling">Travelling</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        {/* Textarea for adding a reference/description */}
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")} // Update 'description' state on textarea change
        ></textarea>
      </div>
      <div className="submit-btn">
        {/* Submit button to add the expense */}
        <Button
          name={"Add Expense"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent)"} // Background color for the button
          color={"#fff"} // Text color for the button
        />
      </div>
    </ExpenseFormStyled>
  );
}

// Styling for the ExpenseForm component
const ExpenseFormStyled = styled.form`
  /* Styles for the form layout and input fields */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    /* Styling for input, textarea, select */
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    /* Styling for input controls */
    input {
      width: 100%;
    }
  }
  .selects {
    /* Styling for select dropdown */
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .submit-btn {
    /* Styling for submit button */
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;

export default ExpenseForm; // Exporting the ExpenseForm component
