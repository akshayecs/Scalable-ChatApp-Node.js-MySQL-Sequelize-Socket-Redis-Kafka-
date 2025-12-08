// src/config/db.js
const config = require('./index');

module.exports = {
  development: {
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    host: config.db.host,
    dialect: 'mysql',
    pool: config.db.pool,
    logging: config.db.logging ? console.log : false,
    dialectOptions: {
      // Add TLS options if needed
    }
  },
  production: {
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    host: config.db.host,
    dialect: 'mysql',
    pool: config.db.pool,
    logging: false
  }
};
