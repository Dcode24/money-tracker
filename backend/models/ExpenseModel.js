const mongoose = require("mongoose"); // Importing Mongoose Library

// Creating Expense Schema using mongoose.Schema
const ExpenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title is required
      trim: true, // Trimming whitespace
      maxLength: 50, // Maximum length allowed for the title
    },
    amount: {
      type: Number,
      required: true, // Amount is required
      maxLength: 20, // Maximum length allowed for the amount
      trim: true, // Trimming whitespace
    },
    type: {
      type: String,
      default: "expense", // Default value for type as "expense"
    },
    date: {
      type: Date,
      required: true, // Date is required
      trim: true, // Trimming whitespace
    },
    category: {
      type: String,
      required: true, // Category is required
      trim: true, // Trimming whitespace
    },
    description: {
      type: String,
      required: true, // Description is required
      maxLength: 20, // Maximum length allowed for the description
      trim: true, // Trimming whitespace
    },
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt fields
);

module.exports = mongoose.model("Expense", ExpenseSchema); // Exporting Expense model using ExpenseSchema
