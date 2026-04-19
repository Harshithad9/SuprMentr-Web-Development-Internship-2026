const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("CRUD Lab API Running");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});