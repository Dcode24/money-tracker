import React from "react";
import {
  Chart as ChartJs, // Importing required components from Chart.js library
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2"; // Importing Line component from react-chartjs-2
import styled from "styled-components"; // Importing styled-components for styling
import { useGlobalContext } from "../../context/globalContext"; // Importing global context
import { dateFormat } from "../../utils/dateFormat"; // Importing date formatting utility function

//  Registering necessary Chart.js components
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
// Chart component
function Chart() {
  const { incomes, expenses } = useGlobalContext(); //Accessing incomes and expenses from global context

  // Creating data for the chart
  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date); // Formatting date for display
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount; // Extracting income amounts
          }),
        ],
        backgroundColor: "green", // Setting background color for income data
        tension: 0.2, // Setting tension for the line
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount; // Extracting expense amounts
          }),
        ],
        backgroundColor: "red", // Setting background color for expense data
        tension: 0.2, // Setting tension for the line
      },
    ],
  };

  return (
    // Styling for the chart container
    <ChartStyled>
      <Line data={data} /> {/* Rendering Line chart using react-chartjs-2 */}
    </ChartStyled>
  );
}

// Styled wrapper for the chart
const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;

export default Chart; // Exporting the Chart component
