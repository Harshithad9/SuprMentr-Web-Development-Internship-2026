const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("MVC Task API Running");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});