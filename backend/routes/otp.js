const { sendOtp } = require("../controller/otp");

const router = require("express").Router();

router.post("/send-otp", sendOtp);

module.exports = router;