const IncomeSchema = require("../models/IncomeModel"); // Importing Income Schema model

// Controller to add an income
exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body; //Destructing income details from request body

  // Creating a new income instance using the Income Schema
  const income = IncomeSchema({
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
    await income.save(); // Saving the income to the database
    res.status(200).json({ message: "Income Added" }); // Sending success response
  } catch (err) {
    res.status(500).json({ message: "Server Error" }); // Handling server errors
  }

  console.log(income); //Logging the created income
};

//Controller to get all incomes
exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 }); //Fetching all incomes, sorted by creation date
    res.status(200).json(incomes); //Sending fetched incomes as a response
  } catch (err) {
    res.status(500).json({ message: "Server Error" }); //Handling server errors
  }
};
// Controller to delete an income by ID
exports.deleteIncome = async (req, res) => {
  const { id } = req.params; //Extracting income ID from request parameters

  // Finding and deleting income by ID
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income Deleted" }); //Sending success response upon sucessful deletion
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" }); //Handling server errors
    });
};
