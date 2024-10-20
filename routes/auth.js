const express = require("express");
const router = express.Router();
const { register, login, updateUser } = require("../controllers/auth");
const authenticateUser = require("../middleware/authentication");
const demoUser = require("../middleware/demoUser");

router.post("/register", register);
router.post("/login", login);
router.patch("/updateUser", authenticateUser, demoUser, updateUser);

module.exports = router;
