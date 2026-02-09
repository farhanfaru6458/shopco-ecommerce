const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

const { Op } = require("sequelize");

// GET all products OR by category with filters
router.get("/", async (req, res) => {
  const { category, productType, minPrice, maxPrice, color, size, search } = req.query;

  const where = {};
  if (category) where.category = category;
  if (productType) where.productType = productType;
  
  if (search) {
    where.title = { [Op.iLike]: `%${search}%` };
  }

  if (minPrice || maxPrice) {
    where.price = {};
    if (minPrice) where.price[Op.gte] = Number(minPrice);
    if (maxPrice) where.price[Op.lte] = Number(maxPrice);
  }

  if (color) {
    where.colors = { [Op.contains]: [color] };
  }

  if (size) {
    where.sizes = { [Op.contains]: [size] };
  }

  const products = await Product.findAll({ where });
  res.json(products);
});


router.get("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.json(product);
});

module.exports = router;
