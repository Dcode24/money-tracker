// Import necessary dependencies and components
import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

// Define Form component
function Form() {
  // Access required functions and state from global context
  const { addIncome, getIncomes, error, setError } = useGlobalContext();
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
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };
  // Return JSX for Form component
  return (
    <FormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      {/* Input field for salary title */}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary Title"
          onChange={handleInput("title")}
        />
      </div>
      {/* Input field for salary amount */}
      <div className="input-control">
        <input
          value={amount}
          type="text"
          name={"amount"}
          id={"amount"}
          placeholder={"Salary Amount"}
          onChange={handleInput("amount")}
        />
      </div>
      {/* Date picker for selecting date */}
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
        {/* Dropdown for selecting category */}
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
      </div>
      {/* Text area for adding reference */}
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </div>
      {/* Submit button */}
      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
}

// Styled components for Form component
const FormStyled = styled.form`
  display: flex; /* Set display as flex */
  flex-direction: column; /* Arrange items in column */
  gap: 2rem; /* Spacing between child elements */

  /* Styling for input, textarea, and select */
  input,
  textarea,
  select {
    font-family: inherit; /* Inherit font family */
    font-size: inherit; /* Inherit font size */
    outline: none; /* Remove outline */
    border: none; /* Remove border */
    padding: 0.5rem 1rem; /* Set padding */
    border-radius: 5px; /* Apply border-radius */
    border: 2px solid #fff; /* Set border with white color */
    background: transparent; /* Transparent background */
    resize: none; /* Disable resizing */
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9); /* Apply box-shadow */
    &::placeholder {
      color: rgba(34, 34, 96, 0.4); /* Placeholder color */
    }
  }
  /* Styling for input-control class */
  .input-control {
    input {
      width: 100%; /* Set input width to 100% */
    }
  }
  /* Styling for selects class */
  .selects {
    display: flex; /* Set display as flex */
    justify-content: flex-end; /* Align items to the end */
    select {
      color: rgba(34, 34, 96, 0.4); /* Text color for select */
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1); /* Change color on focus or active state */
      }
    }
  }
  /* Styling for submit-btn class */
  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06); /* Apply box-shadow */
      &:hover {
        background: var(
          --color-green
        ) !important; /* Change background color on hover */
      }
    }
  }
`;

export default Form; // Export FormStyled component
