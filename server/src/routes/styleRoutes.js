const express = require("express");
const router = express.Router();
const { getDressStyles } = require("../controllers/styleController");

router.get("/", getDressStyles);

module.exports = router;
