// Importing icons from "../utils/Icons"
import { dashboard, expenses, transactions, trend } from "../utils/Icons";

// Array containing menu items for the app
export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard, // Dashboard icon
    link: "/dashboard", // Link to dashboard
  },
  {
    id: 2,
    title: "View Transactions",
    icon: transactions, // Transactions icon
    link: "/dashboard", // Link to view transactions
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend, // Incomes icon
    link: "/dashboard", // Link to incomes
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses, // Expenses icon
    link: "/dashboard", // Link to expenses
  },
];
