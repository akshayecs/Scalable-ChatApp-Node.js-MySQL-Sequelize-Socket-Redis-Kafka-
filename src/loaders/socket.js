// src/loaders/socket.js
const { Server } = require('socket.io');
const { createRedis } = require('./redisClient');
const { createAdapter } = require('@socket.io/redis-adapter');

function createSocketServer(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    },
    maxHttpBufferSize: 1e8, // 100MB file limit
  });

  const redis = createRedis();
  io.adapter(createAdapter(redis, redis.duplicate()));

  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    // Join user room
    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
    });

    // Leave user room
    socket.on('leaveRoom', (roomId) => {
      socket.leave(roomId);
    });

    // Listen to chat messages
    socket.on('chatMessage', (data) => {
      io.to(data.roomId).emit('chatMessage', data);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
    });
  });

  return io;
}

module.exports = { createSocketServer };
