import { Options } from 'sequelize';

const databaseConfig: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'database',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  port: Number(process.env.DB_PORT) || 3306,
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = databaseConfig;

// import { Options } from 'sequelize';

// const databaseConfig: {[key: string]: Options} = {
//   development: {
//     username: process.env.DEV_DB_USER || 'root',
//     password: process.env.DEV_DB_PASSWORD || 'password',
//     database: process.env.DEV_DB_NAME || 'dev_database',
//     host: process.env.DEV_DB_HOST || 'localhost',
//     dialect: 'mysql',
//     port: Number(process.env.DEV_DB_PORT) || 3306,
//     dialectOptions: {
//         timezone: 'Z'
//     },
//     logging: false
// },
// test: {
//     username: process.env.TEST_DB_USER || 'root',
//     password: process.env.TEST_DB_PASSWORD || 'password',
//     database: process.env.TEST_DB_NAME || 'test_database',
//     host: process.env.TEST_DB_HOST || 'localhost',
//     dialect: 'mysql',
//     port: Number(process.env.TEST_DB_PORT) || 3306,
//     dialectOptions: {
//         timezone: 'Z'
//     },
//     logging: false
// },
// production: {
//     username: process.env.PROD_DB_USER || 'root',
//     password: process.env.PROD_DB_PASSWORD || 'password',
//     database: process.env.PROD_DB_NAME || 'prod_database',
//     host: process.env.PROD_DB_HOST || 'localhost',
//     dialect: 'mysql',
//     port: Number(process.env.PROD_DB_PORT) || 3306,
//     dialectOptions: {
//         timezone: 'Z'
//     },
//     logging: false
// }
// }

// module.exports = databaseConfig;