const express = require("express"); // Importing Express.js
const cors = require("cors"); // Importing CORS for handling cross-origin requests
const { db } = require("./db/db"); // Importing database connection function
const { readdirSync } = require("fs"); // Importing filesystem module to read directories
const app = express(); // Creating an Express application

require("dotenv").config(); // Loading environment variables from .env file

const PORT = process.env.PORT; // Setting up the port from the server

// Middlewares
app.use(express.json()); //Parsing JSON requests
app.use(cors()); // Handling CORS

// Routes setup dynamically by reading files in the 'routes' directory
readdirSync("./routes").map(
  (route) => app.use("/api/v1", require("./routes/" + route)) // Mounting routes prefixed with '/api/v1'
);

// Function to start the server
const server = () => {
  db(); // Connecting to the database
  app.listen(PORT, () => {
    console.log("listening to port:", PORT); //Logging that the server is listening on the specified port
  });
};

server(); // Starting the server
