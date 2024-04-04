import { Sequelize } from "sequelize";
import * as databaseConfig from '../config/database';

const sequelize = new Sequelize(databaseConfig);

export default sequelize;

// import { Sequelize } from "sequelize";
// const databaseConfig = require('../config/database');

// const environment = process.env.NODE_ENV || 'development';
// const config = databaseConfig[environment];

// const sequelize = new Sequelize(config);

// export default sequelize;