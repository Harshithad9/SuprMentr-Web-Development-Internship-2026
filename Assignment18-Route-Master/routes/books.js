const express = require("express");
const router = express.Router();

let books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
];

// GET all books
router.get("/", (req, res) => {
    res.json(books);
});

// GET single book
router.get("/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    res.json(book || { message: "Book not found" });
});

// ADD book
router.post("/", (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.json({ message: "Book added", book: newBook });
});

// DELETE book
router.delete("/:id", (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.json({ message: "Book deleted" });
});

module.exports = router;