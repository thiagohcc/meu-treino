interface DatabaseConfig {
  [key: string]: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
  };
}

export default DatabaseConfig;