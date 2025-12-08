const router = require('express').Router();
const uploadController = require('../controllers/upload.controller');
const multer = require('multer');
const { authMiddleware } = require('../middleware/auth.middleware');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', authMiddleware, upload.single('file'), uploadController.uploadFile);

module.exports = router;
