const sequelize = require("../config/database");

const User = require("./User");
const Product = require("./Product");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const DressStyle = require("./DressStyle");
const Review = require("./Review");

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
  sequelize,
  User,
  Product,
  Order,
  OrderItem,
  DressStyle,
  Review
};
