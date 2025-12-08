const { createSocketServer } = require('../loaders/socket');
const { Message } = require('../models');
const { connectProducer } = require('../loaders/kafkaProducer');

let ioInstance;

const initChatSockets = (httpServer) => {
  ioInstance = createSocketServer(httpServer);

  ioInstance.on('connection', async (socket) => {
    console.log('Socket connected:', socket.id);

    // Join a chat room
    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
      console.log(`${socket.id} joined room ${roomId}`);
    });

    // Leave a chat room
    socket.on('leaveRoom', (roomId) => {
      socket.leave(roomId);
      console.log(`${socket.id} left room ${roomId}`);
    });

    // Handle sending messages
    socket.on('chatMessage', async (data) => {
      // Save message to DB
      const msg = await Message.create({
        chatId: data.chatId,
        senderId: data.senderId,
        content: data.content,
        type: data.type || 'text',
        fileUrl: data.fileUrl || null
      });

      // Emit message to room
      ioInstance.to(data.chatId).emit('chatMessage', msg);

      // Produce message to Kafka for async processing
      const producer = await connectProducer();
      await producer.send({
        topic: 'chat_messages',
        messages: [
          { key: msg.id, value: JSON.stringify(msg) }
        ]
      });
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
    });
  });

  return ioInstance;
};

module.exports = { initChatSockets, ioInstance };
