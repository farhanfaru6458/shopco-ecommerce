const { Sequelize } = require("sequelize");

const useSSL = process.env.NODE_ENV === "production" || process.env.DB_SSL === "true";
const sequelizeOptions = {
  dialect: "postgres",
  logging: false,
  ...(useSSL
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {}),
};

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, sequelizeOptions)
  : new Sequelize(
      process.env.DB_NAME || "shopco",
      process.env.DB_USER || "postgres",
      process.env.DB_PASSWORD || "",
      {
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT || 5432),
        ...sequelizeOptions,
      }
    );

module.exports = sequelize;