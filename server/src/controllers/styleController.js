const { DressStyle } = require("../models");

exports.getDressStyles = async (req, res) => {
  try {
    const styles = await DressStyle.findAll();
    res.json(styles);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch styles" });
  }
};
