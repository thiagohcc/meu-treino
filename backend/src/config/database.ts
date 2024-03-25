import { Sequelize } from 'sequelize';
import DatabaseConfig from '../interfaces/DatabaseConfig';

const databaseConfig: DatabaseConfig = {
  development: {
    username: 'dev_user',
    password: 'dev_pass',
    database: 'dev_database',
    host: 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: 'test_user',
    password: 'test_pass',
    database: 'test_database',
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: '123456',
    database: 'meu-treino-database',
    host: 'localhost',
    dialect: 'mysql',
  },
};

export default databaseConfig;