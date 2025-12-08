const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
router.use('/users', require('./user.routes'));
router.use('/chats', require('./chat.routes'));
router.use('/messages', require('./message.routes'));
router.use('/upload', require('./upload.routes'));

module.exports = router;
