let tasks = require("../models/taskModel");

// GET all tasks
exports.getAllTasks = (req, res) => {
    res.json(tasks);
};

// GET single task
exports.getTaskById = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
};

// CREATE task
exports.createTask = (req, res) => {
    const { id, title, status } = req.body;

    if (!id || !title) {
        return res.status(400).json({ message: "ID and title required" });
    }

    const newTask = { id, title, status: status || "pending" };
    tasks.push(newTask);

    res.status(201).json({
        message: "Task created",
        task: newTask
    });
};

// UPDATE task
exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    const { title, status } = req.body;

    if (title) task.title = title;
    if (status) task.status = status;

    res.json({
        message: "Task updated",
        task
    });
};

// DELETE task
exports.deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    const deleted = tasks.splice(index, 1);

    res.json({
        message: "Task deleted",
        task: deleted[0]
    });
};