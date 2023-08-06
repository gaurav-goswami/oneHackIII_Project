const { signUp, login, logout } = require("../controller/auth");
const { isAuthenticated } = require("../middleware/auth");

const router = require("express").Router();

router.post("/signup" , signUp);
router.post("/login" , login);
router.get("/logout", isAuthenticated, logout);

module.exports = router;