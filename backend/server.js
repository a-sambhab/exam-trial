const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");
const cors = require("cors"); // Import the CORS middleware
require("dotenv").config();

const app = express();
const PORT = 3001;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.use(cors()); // Use CORS middleware to allow requests from the frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes); // All the routes defined in auth.js will be prefixed with /api/auth

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});