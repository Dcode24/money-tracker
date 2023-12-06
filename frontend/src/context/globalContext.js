import React, { useContext, useState } from "react"; // Importing necessary dependencies
import axios from "axios"; // Importing axios for HTTP requests

const BASE_URL = "http://localhost:5001/api/v1/"; // Base URL for API requests
const GlobalContext = React.createContext(); // Creating a context for global state

export const GlobalProvider = ({ children }) => {
  // Creating a global provider component
  const [incomes, setIncomes] = useState([]); // State for incomes
  const [expenses, setExpenses] = useState([]); // State for expenses
  const [error, setError] = useState(null); // State for handling errors

  // // Function to add income
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message); // Catching and setting error if any
      });
    getIncomes(); // Fetching updated incomes after adding
  };

  // Function to fetch incomes
  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`); // Fetching incomes from the API
    setIncomes(response.data); // Setting fetched incomes in state
    console.log(response.data); // Logging fetched incomes to the console
  };

  // Function to delete income
  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`); // Deleting income by ID
    getIncomes(); // Fetching updated incomes after deletion
  };

  // Function to calculate total income
  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount; // Calculating total income
    });

    return totalIncome; // Returning the total income
  };

  // Function to add expense
  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message); // Catching and setting error if any
      });
    getExpenses(); // Fetching updated expenses after adding
  };

  // Function to fetch expenses
  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`); // Fetching expenses from the API
    setExpenses(response.data); // Setting fetched expenses in state
    console.log(response.data); // Logging fetched expenses to the console
  };

  // Function to delete expense
  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`); // Deleting expense by ID
    getExpenses(); // Fetching updated expenses after deletion
  };

  // Function to calculate total expenses
  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount; // Calculating total expenses
    });

    return totalIncome; // Returning the total expenses
  };

  // Function to calculate total balance
  const totalBalance = () => {
    return totalIncome() - totalExpenses(); // Calculating total balance
  };

  // Function to fetch transaction history
  const transactionHistory = () => {
    const history = [...incomes, ...expenses]; // Combining incomes and expenses
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt); // Sorting by creation date
    });

    return history.slice(0, 3); // Returning the latest 3 transactions
  };

  // Providing state and functions to the context
  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children} {/* Rendering child components */}
    </GlobalContext.Provider>
  );
};

// Custom hook to access the global context
export const useGlobalContext = () => {
  return useContext(GlobalContext); // Using the useContext hook to access the context
};
