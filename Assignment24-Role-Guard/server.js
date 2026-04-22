const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

app.get("/", (req, res) => {
    res.send("Role Guard API Running");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});