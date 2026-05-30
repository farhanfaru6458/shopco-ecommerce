require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const styleRoutes = require("./routes/styleRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const seedProducts = require("./seeders/seedProducts");
const seedDressStyles = require("./seeders/seedDressStyle");
const seedReviews = require("./seeders/seedReviews");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/styles", styleRoutes);
app.use("/reviews", reviewRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    // Seed only if products are empty
    const { Product, DressStyle, Review } = require("./models");
    const productCount = await Product.count();
    if (productCount === 0) {
      // await seedProducts();
      // await seedDressStyles();
      console.log("Basic data seeded");
    }

    const reviewCount = await Review.count();
    if (reviewCount === 0) {
      // await seedReviews();
      console.log(" Reviews seeded");
    }

    console.log("Database connected and synced");

    app.listen(process.env.PORT || 5000, () =>
      console.log("Server running on port", process.env.PORT || 5000)
    );
  } catch (err) {
    console.error("Database initialization failed:", err);
    process.exit(1);
  }
})();
