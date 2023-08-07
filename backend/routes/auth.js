const { connectZoom, getAuth } = require("../controller/auth");

const router = require("express").Router();

router.get("/oauth" , connectZoom)
router.get("/auth" , getAuth)

module.exports = router;