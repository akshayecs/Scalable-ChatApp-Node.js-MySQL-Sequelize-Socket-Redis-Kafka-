const router = require('express').Router();
const messageController = require('../controllers/message.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

router.post('/', authMiddleware, messageController.sendMessage);
router.get('/:chatId', authMiddleware, messageController.getChatMessages);

module.exports = router;
