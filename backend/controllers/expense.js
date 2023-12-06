const ExpenseSchema = require("../models/ExpenseModel"); //Importing Expense Schema Model

// Controller to add an expense
exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body; //Destructuring expense details from request body

  // Creating a new expense instance using the Expense Schema
  const income = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // validating required fields
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Validating amount as a positive number
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }
    await income.save(); //Saving the expense to the database
    res.status(200).json({ message: "Expense Added" }); //Sending success response
  } catch (err) {
    res.status(500).json({ message: "Server Error" }); //Handling server errors
  }

  console.log(income); //Logging the created expense
};

// Controller to get all expenses
exports.getExpense = async (req, res) => {
  try {
    const incomes = await ExpenseSchema.find().sort({ createdAt: -1 }); //Fetching all expenses, sorted by creation date
    res.status(200).json(incomes); //Sending fetched expenses as a response
  } catch (err) {
    res.status(500).json({ message: "Server Error" }); //Handling server errors
  }
};

// Controller to delete an expense by ID
exports.deleteExpense = async (req, res) => {
  const { id } = req.params; //Extracting expense ID from request parameters

  // Finding and deleting expense by ID
  ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Expense Deleted" }); // Sending sucess response upon sucessful deletion
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" }); // Handling server errors
    });
};
