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
    console.log("DATABASE_URL set:", Boolean(process.env.DATABASE_URL));
    if (process.env.DATABASE_URL) {
      console.log("DATABASE_URL value:", process.env.DATABASE_URL.replace(/:[^:@]+@/, ":****@"));
    }
    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log("DB_SSL:", process.env.DB_SSL);
    console.log("Resolved SSL config:", JSON.stringify(sequelize.options.dialectOptions?.ssl));
    
    try {
      await sequelize.authenticate();
    } catch (firstErr) {
      console.warn("Database connection failed on first attempt:", firstErr.message);
      
      const host = sequelize.config.host || "";
      let newHost = null;
      if (host.includes("-a.")) {
        newHost = host.replace("-a.", ".");
      } else if (host.endsWith("-a")) {
        newHost = host.slice(0, -2);
      }
      
      let connected = false;
      if (newHost) {
        console.log(`Detected internal Render host. Rewriting to external host: ${newHost} and retrying with SSL...`);
        sequelize.config.host = newHost;
        sequelize.options.host = newHost;
        if (sequelize.dialect && sequelize.dialect.connectionManager) {
          sequelize.dialect.connectionManager.config.host = newHost;
          sequelize.dialect.connectionManager.config.dialectOptions.ssl = {
            require: true,
            rejectUnauthorized: false
          };
          if (sequelize.dialect.connectionManager.pool) {
            await sequelize.dialect.connectionManager.pool.destroyAllNow();
          }
        }
        
        try {
          await sequelize.authenticate();
          console.log("Database connected successfully using external host!");
          connected = true;
        } catch (secondErr) {
          console.warn("Database connection failed on second attempt (external host):", secondErr.message);
        }
      }
      
      if (!connected) {
        console.log("Attempting SSL configuration toggle fallback...");
        const currentSSL = sequelize.dialect.connectionManager?.config?.dialectOptions?.ssl;
        if (sequelize.dialect && sequelize.dialect.connectionManager) {
          if (currentSSL) {
            sequelize.dialect.connectionManager.config.dialectOptions.ssl = false;
            console.log("Retrying WITHOUT SSL...");
          } else {
            sequelize.dialect.connectionManager.config.dialectOptions.ssl = {
              require: true,
              rejectUnauthorized: false
            };
            console.log("Retrying WITH SSL...");
          }
          if (sequelize.dialect.connectionManager.pool) {
            await sequelize.dialect.connectionManager.pool.destroyAllNow();
          }
        }
        await sequelize.authenticate();
        console.log("Database connected successfully on final fallback!");
      }
    }

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
