const { Review, Product, sequelize } = require("../models");

exports.getHomeReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      limit: 6,
      order: sequelize.random(),
      include: [{
        model: Product,
        attributes: ['title']
      }]
    });
    res.json(reviews);
  } catch (error) {
    console.error("GET HOME REVIEWS ERROR:", error);
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};

exports.getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { ProductId: req.params.productId },
      order: [["createdAt", "DESC"]]
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product reviews" });
  }
};
