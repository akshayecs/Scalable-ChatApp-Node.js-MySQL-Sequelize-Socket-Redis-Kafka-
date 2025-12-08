const router = require('express').Router();
const chatController = require('../controllers/chat.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

router.post('/private', authMiddleware, chatController.createPrivateChat);
router.post('/group', authMiddleware, chatController.createGroup);
router.get('/', authMiddleware, chatController.listUserChats);

module.exports = router;
