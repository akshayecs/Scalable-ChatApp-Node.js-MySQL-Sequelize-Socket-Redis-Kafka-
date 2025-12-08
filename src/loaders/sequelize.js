// src/loaders/sequelize.js
const { Sequelize } = require('sequelize');
const config = require('../config/index');

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: 'mysql',
    pool: config.db.pool,
    logging: config.db.logging ? (msg) => console.debug(msg) : false,
    define: {
      underscored: true,
      timestamps: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    }
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    // console.log('Sequelize: DB connection established.');
  } catch (err) {
    console.error('Sequelize connection error:', err);
    throw err;
  }
}

module.exports = { sequelize, testConnection, Sequelize };
