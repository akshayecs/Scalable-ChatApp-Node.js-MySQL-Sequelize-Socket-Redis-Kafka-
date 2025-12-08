const router = require('express').Router();
const userController = require('../controllers/user.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

router.get('/me', authMiddleware, userController.getProfile);
router.get('/', authMiddleware, userController.listUsers);

module.exports = router;
