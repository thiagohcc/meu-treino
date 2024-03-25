import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";

const env = process.env.NODE_ENV || "development";
const config = databaseConfig[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql',
  }
);

export default sequelize;