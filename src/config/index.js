// src/config/index.js
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

module.exports = {
  env,
  port: Number(process.env.PORT || 3000),

  db: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'chatapp_db',
    pool: {
      max: Number(process.env.DB_POOL_MAX || 20),
      min: Number(process.env.DB_POOL_MIN || 2),
      idle: Number(process.env.DB_POOL_IDLE || 30000),
      acquire: Number(process.env.DB_POOL_ACQUIRE || 60000)
    },
    logging: env === 'development'
  },

  redis: {
    url: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
    password: process.env.REDIS_PASSWORD || undefined
  },

  kafka: {
    brokers: (process.env.KAFKA_BROKERS || '127.0.0.1:9092').split(','),
    clientId: process.env.KAFKA_CLIENT_ID || 'chat-app',
    groupId: process.env.KAFKA_GROUP_ID || 'chat-consumer-group'
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'change_this_secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  },

  upload: {
    provider: process.env.UPLOAD_PROVIDER || 'local',
    uploadDir: process.env.UPLOAD_DIR || './src/uploads'
  }
};
