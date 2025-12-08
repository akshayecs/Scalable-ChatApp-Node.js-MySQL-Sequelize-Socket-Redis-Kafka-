const uploadService = require('../services/upload.service');

module.exports = {
  uploadFile: async (req, res, next) => {
    try {
      if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
      const uploaded = await uploadService.saveFile(req.user.id, req.file);
      res.status(201).json(uploaded);
    } catch (err) {
      next(err);
    }
  }
};
