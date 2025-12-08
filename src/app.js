const { createExpressApp } = require('./loaders/express');
const { testConnection } = require('./loaders/sequelize');
const { initChatSockets } = require('./sockets/chat.socket');
const { initConsumer } = require('./kafka/message.consumer');
const config = require('./config');
const http = require('http');

async function createApp() {
  // Test database connection
  await testConnection();

  // Initialize Express app
  const app = createExpressApp();

  return app;
}

/**
 * Initialize server with HTTP + Socket.io + Kafka consumer
 */
async function startServer() {
  const app = await createApp();
  const server = http.createServer(app);

  // Start Socket.io
  initChatSockets(server);

  // Start Kafka consumer
  await initConsumer();

  // Start HTTP server
  server.listen(config.port, () => {
    console.log(`Server running in ${config.env} mode on port ${config.port}`);
  });
}

module.exports = { createApp, startServer };
