const Task = require("../models/Task");

// CREATE
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// READ ALL
exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

// READ ONE
exports.getTaskById = async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
};

// UPDATE
exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
};

// DELETE
exports.deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
};