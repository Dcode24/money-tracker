const mongoose = require("mongoose"); // Importing mongoose library

// Function that establishes a connection to the MongoDB database using Mongoose
const db = async () => {
  try {
    mongoose.set("strictQuery", false); // Setting mongoose option to allow for flexibility in querying
    await mongoose.connect(process.env.MONGO_URL); //Connecting to the MongoDB using the provided URL from environment variables
    console.log("Db Connected"); //Logging successful database connection
  } catch (error) {
    console.log("DB Connection Error"); // Logging if there's an error connecting to the database
  }
};

module.exports = { db }; // Exporting the 'db' function to be used elsewhere
