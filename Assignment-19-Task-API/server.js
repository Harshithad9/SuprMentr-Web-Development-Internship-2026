const express = require("express");
const app = express();

const taskRoutes = require("./routes/tasks");

app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Task API is running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});