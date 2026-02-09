const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DressStyle = sequelize.define("DressStyle", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
  }
});

module.exports = DressStyle;
