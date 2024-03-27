// import IDatabaseConfig from '../interfaces/IDatabaseConfig';

// interface IDatabaseConfig {
//   [key: string]: {
//     username: string;
//     password: string;
//     database: string;
//     host: string;
//     dialect: string;
//     dialectOptions: object;
//     logging: boolean;
//   };
// }

// const databaseConfig: Options = {
//   development: {
//     username: 'dev_user',
//     password: 'dev_pass',
//     database: 'dev_database',
//     host: 'localhost',
//     dialect: 'mysql',
//     dialectOptions: {
//       timezone: 'Z',
//     },
//     logging: false,
//   },
//   test: {
//     username: 'test_user',
//     password: 'test_pass',
//     database: 'test_database',
//     host: 'localhost',
//     dialect: 'mysql',
//     dialectOptions: {
//       timezone: 'Z',
//     },
//     logging: false,
//   },
//   production: {
//     username: 'root',
//     password: '123456',
//     database: 'meu-treino-database',
//     host: 'localhost',
//     dialect: 'mysql',
//     dialectOptions: {
//       timezone: 'Z',
//     },
//     logging: false,
//   },
// };

import { Options } from 'sequelize';

const databaseConfig: Options = {
  username: process.env.DB_USER || 'dev_user',
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