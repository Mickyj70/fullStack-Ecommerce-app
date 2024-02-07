require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/DBconnection");

//!connected port
const port = process.env.PORT || 3500;

//!connect to mongodb
connectDB();

//*middleware
app.use(credentials);
// Cross Origin Resource Sharing
app.use(cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//?routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connection.once("open", () => {
  console.log("DB connected");

  app.listen(PORT, () => console.log(`Server running on port ${port}`));
});
