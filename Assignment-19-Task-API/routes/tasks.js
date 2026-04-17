const express = require("express");
const router = express.Router();

// In-memory data (temporary)
let tasks = [
    { id: 1, title: "Learn Node.js", status: "pending" },
    { id: 2, title: "Build API", status: "in-progress" }
];


// GET all tasks
router.get("/", (req, res) => {
    res.json(tasks);
});


// GET single task
router.get("/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
});


// CREATE task
router.post("/", (req, res) => {
    const { id, title, status } = req.body;

    if (!id || !title) {
        return res.status(400).json({ message: "ID and title are required" });
    }

    const newTask = { id, title, status: status || "pending" };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task created successfully",
        task: newTask
    });
});


// UPDATE task
router.put("/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    const { title, status } = req.body;

    if (title) task.title = title;
    if (status) task.status = status;

    res.json({
        message: "Task updated successfully",
        task
    });
});


// DELETE task
router.delete("/:id", (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id == req.params.id);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    res.json({
        message: "Task deleted successfully",
        task: deletedTask[0]
    });
});

module.exports = router;