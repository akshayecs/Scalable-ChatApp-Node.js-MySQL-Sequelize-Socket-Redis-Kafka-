// src/config/redis.js
const config = require('./index');

module.exports = {
  url: config.redis.url,
  password: config.redis.password,
  // Additional connection options can be added here
};
