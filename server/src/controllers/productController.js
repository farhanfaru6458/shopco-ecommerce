const { Product, Review } = require("../models");

exports.getProducts = async (req, res) => {
  const products = await Product.findAll({
    include: [{ model: Review }]
  });
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id, {
    include: [{ model: Review }]
  });
  res.json(product);
};
