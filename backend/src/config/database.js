"use strict";

exports.__esModule = true;

var databaseConfig = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'database',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false
};

module.exports = databaseConfig;

// "use strict";

// exports.__esModule = true;

// var databaseConfig = {
//     development: {
//         username: process.env.DB_USER || 'root',
//         password: process.env.DB_PASSWORD || 'password',
//         database: process.env.DB_NAME || 'dev_database',
//         host: process.env.DB_HOST || 'localhost',
//         port: Number(process.env.DB_PORT) || 3306,
//         dialect: 'mysql',
//         dialectOptions: {
//             timezone: 'Z'
//         },
//         logging: false
//     },
//     test: {
//         username: process.env.DB_USER || 'root',
//         password: process.env.DB_PASSWORD || 'password',
//         database: process.env.DB_NAME || 'test_database',
//         host: process.env.DB_HOST || 'localhost',
//         port: Number(process.env.DB_PORT) || 3306,
//         dialect: 'mysql',
//         dialectOptions: {
//             timezone: 'Z'
//         },
//         logging: false
//     },
//     // production: {
//     //     username: process.env.DB_USER,
//     //     password: process.env.DB_PASSWORD,
//     //     database: process.env.DB_NAME,
//     //     host: process.env.DB_HOST,
//     //     port: Number(process.env.DB_PORT),
//     //     dialect: 'mysql',
//     //     dialectOptions: {
//     //         timezone: 'Z'
//     //     },
//     // }
// };

// module.exports = databaseConfig;