require('dotenv').config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_DIALECT,
  DB_PORT,
  TOKEN_SECRET,
  BCRYPT_SECRET,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    logging: false,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    logging: false,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    logging: false,
  },
  jwt: {
    secret: TOKEN_SECRET,
    options: { expiresIn: '1h' },
  },
  bcryptSecret: BCRYPT_SECRET,
};
