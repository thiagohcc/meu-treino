import { Options } from 'sequelize';

const databaseConfig: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'dev_database',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  port: Number(process.env.DB_PORT) || 3306,
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = databaseConfig;