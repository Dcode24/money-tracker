const mongoose = require("mongoose"); // Importing mongoose library

// Creating Income Schema using mongoose.Schema
const IncomeSchema = new mongoose.Schema(
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
      maxLength: 20, // Maximum length allowed  for the amount
      trim: true, // Trimming whitespace
    },
    type: {
      type: String,
      default: "income", // Default value for type as "income"
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
  { timestamps: true } // Adding timestamps for createdAt and UpdatedAt fields
);

module.exports = mongoose.model("Income", IncomeSchema); // Exporting Income model using the IncomeSchema
