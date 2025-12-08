// src/loaders/express.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes');
const { errorHandler } = require('../middleware/error.middleware');

function createExpressApp() {
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(helmet());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // Routes
  app.use('/api', routes);

  // Health Check
  app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
  });

  // Error handler
  app.use(errorHandler);

  return app;
}

module.exports = { createExpressApp };
