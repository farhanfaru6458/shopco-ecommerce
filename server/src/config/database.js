const { Sequelize } = require("sequelize");

const useSSL = process.env.NODE_ENV === "production" || process.env.DB_SSL === "true";
const sequelizeOptions = {
  dialect: "postgres",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
    evict: 10000,
  },
  dialectOptions: {
    keepAlive: true,
    ...(useSSL
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {}),
  },
};

const databaseUrl = process.env.DATABASE_URL?.trim();
const sequelize = databaseUrl
  ? new Sequelize(databaseUrl, sequelizeOptions)
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