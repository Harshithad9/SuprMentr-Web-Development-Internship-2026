const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const bookRoutes = require("./routes/authors");
const authorRoutes = require("./routes/books");

// Use routes
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.get("/", (req, res) => {
    res.send("Bookstore API Running");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});