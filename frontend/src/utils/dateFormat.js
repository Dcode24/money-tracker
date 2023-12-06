import moment from "moment"; // Import the moment library for date formatting

// Function to format the date
export const dateFormat = (date) => {
  return moment(date).format("DD-MM-YYYY"); // Format the date as DD-MM-YYYY using moment.js
};
