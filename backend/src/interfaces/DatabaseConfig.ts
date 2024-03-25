interface DatabaseConfig {
  [key: string]: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
    dialectOptions: {
      timezone: string;
    };
    logging: boolean;
  };
}

export default DatabaseConfig;