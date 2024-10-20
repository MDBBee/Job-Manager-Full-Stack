const express = require("express");
const router = express.Router();
const { register, login, updateUser } = require("../controllers/auth");
const authenticateUser = require("../middleware/authentication");
const demoUser = require("../middleware/demoUser");
const limiter = require("express-rate-limit");

const rateLimiter = limiter({
  windowMs: 2 * 60 * 10000,
  max: 2,
  message: {
    msg: "Too many hits from this IP, Please try again in the next 2minutes!",
  },
});

router.post("/register", rateLimiter, register);
router.post("/login", rateLimiter, login);
router.patch("/updateUser", authenticateUser, demoUser, updateUser);

module.exports = router;
