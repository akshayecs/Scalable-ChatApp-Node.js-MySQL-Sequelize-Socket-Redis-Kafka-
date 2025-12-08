const { startServer } = require('./app');

// Start the entire application
startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
