const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Accessible by any logged-in user
router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "User profile accessed",
        user: req.user
    });
});

// Only admin can access
router.get(
    "/admin",
    authMiddleware,
    roleMiddleware("admin"),
    (req, res) => {
        res.json({ message: "Welcome Admin" });
    }
);

module.exports = router;