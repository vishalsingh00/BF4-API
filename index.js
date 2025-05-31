const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

// Connect to database
connectDB();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Welcome route
app.get("/", (req, res) => {
    res.send("Welcome to QuriousBit API - Battlefield 4 Server Info");
});

// Routes
app.use("/api/server", require("./routes/serverRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/server-config", require("./routes/serverConfigRoutes"));
app.use("/api/server-stats", require("./routes/serverStatsRoutes"));

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
