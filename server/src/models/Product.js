const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: false,
  },
  productType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "T-shirts",
  },
  colors: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: ["Black"],
  },
  sizes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: ["S", "M", "L", "XL"],
  },
});

module.exports = Product;
