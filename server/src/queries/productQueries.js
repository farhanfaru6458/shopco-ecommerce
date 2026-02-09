const { Product } = require("../models/Product");

exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};


exports.getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.json(product);
};
