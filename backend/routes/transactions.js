const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expense"); // Importing expense controllers
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income"); // Importing income controllers

const router = require("express").Router(); // Using Express Router to handle routes

// Definiting routes for handling income and expense operations
router
  .post("/add-income", addIncome) // Route to add an income
  .get("/get-incomes", getIncomes) // Route to get all incomes
  .delete("/delete-income/:id", deleteIncome) // Route to delete an income by ID
  .post("/add-expense", addExpense) // Route to add an expense
  .get("/get-expenses", getExpense) // Route to get all expenses
  .delete("/delete-expense/:id", deleteExpense); // Route to delete an expense by ID

module.exports = router; // Exporting the configured router
