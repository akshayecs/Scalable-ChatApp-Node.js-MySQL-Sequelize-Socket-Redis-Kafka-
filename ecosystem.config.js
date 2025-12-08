module.exports = {
  apps: [
    {
      name: 'scalable-chat-app',
      script: 'src/server.js',
      instances: 'max',          // Automatically use all CPU cores
      exec_mode: 'cluster',      // Cluster mode for horizontal scaling
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};


// # How to run this pm2 command on production to run our service
// pm2 start ecosystem.config.js
// pm2 logs scalable-chat-app
// pm2 save
// pm2 startup
