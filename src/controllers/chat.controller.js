const chatService = require('../services/chat.service');

module.exports = {
  createPrivateChat: async (req, res, next) => {
    try {
      const chat = await chatService.createPrivateChat(req.user.id, req.body.userId);
      res.status(201).json(chat);
    } catch (err) {
      next(err);
    }
  },

  createGroup: async (req, res, next) => {
    try {
      const group = await chatService.createGroup(req.user.id, req.body.name, req.body.members);
      res.status(201).json(group);
    } catch (err) {
      next(err);
    }
  },

  listUserChats: async (req, res, next) => {
    try {
      const chats = await chatService.getUserChats(req.user.id);
      res.json(chats);
    } catch (err) {
      next(err);
    }
  }
};
