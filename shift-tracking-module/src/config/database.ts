// src/config/database.ts

import { Sequelize } from "sequelize";
require("dotenv").config();

// Initialize Sequelize instance
const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export default sequelize;
