const express = require("express");
const router = express.Router();

router.use("/api/producers", require("./producers"));

module.exports = router;