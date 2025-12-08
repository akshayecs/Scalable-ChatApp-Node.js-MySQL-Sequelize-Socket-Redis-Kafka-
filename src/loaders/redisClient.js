// src/loaders/redisClient.js
const IORedis = require('ioredis');
const { url, password } = require('../config/redis');

let redis;
function createRedis() {
  if (redis) return redis;
  const opts = {};
  if (password) opts.password = password;
  // let ioredis parse the url or fallback to host:port
  redis = new IORedis(url, opts);
  redis.on('connect', () => {});
  redis.on('error', (e) => console.error('Redis error', e));
  return redis;
}

module.exports = { createRedis };
