const messageService = require('../services/message.service');

module.exports = {
  sendMessage: async (req, res, next) => {
    try {
      const message = await messageService.sendMessage(req.user.id, req.body);
      res.status(201).json(message);
    } catch (err) {
      next(err);
    }
  },

  getChatMessages: async (req, res, next) => {
    try {
      const messages = await messageService.getChatMessages(req.params.chatId);
      res.json(messages);
    } catch (err) {
      next(err);
    }
  }
};
