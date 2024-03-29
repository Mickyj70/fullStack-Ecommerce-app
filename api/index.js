require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const credentials = require("./middleware/credentials");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/DBconnection");
const corsOptions = require("./config/corsoption");

//!connected port
const port = process.env.PORT || 3500;

//!connect to mongodb
connectDB();

//? Handle options credentials check - before CORS!
// ?and fetch cookies credentials requirement
app.use(credentials);
//? Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//*routes
// app.use("/api/register", require("./routes/register"));
// app.use("/api/login", require("./routes/auth"));
// app.use("/api/users", require("./routes/user"));

mongoose.connection.once("open", () => {
  console.log("DB connected");

  app.listen(port, () => console.log(`Server running on port ${port}`));
});
