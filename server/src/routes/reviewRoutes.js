const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.get("/home", reviewController.getHomeReviews);
router.get("/product/:productId", reviewController.getReviewsByProduct);

module.exports = router;
