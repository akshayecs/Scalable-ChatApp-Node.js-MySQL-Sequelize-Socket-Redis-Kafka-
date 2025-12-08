const { Message } = require('../models');

module.exports = {
  sendMessage: async (senderId, { chatId, content, type, fileUrl }) => {
    return Message.create({ senderId, chatId, content, type, fileUrl });
  },

  getChatMessages: async (chatId) => {
    return Message.findAll({ where: { chatId }, order: [['createdAt', 'ASC']] });
  }
};
