const express = require("express");
const router = express.Router();

let authors = [
    { id: 1, name: "James Clear" },
    { id: 2, name: "Robert Kiyosaki" }
];

// GET all authors
router.get("/", (req, res) => {
    res.json(authors);
});

// ADD author
router.post("/", (req, res) => {
    const newAuthor = req.body;
    authors.push(newAuthor);
    res.json({ message: "Author added", author: newAuthor });
});

module.exports = router;