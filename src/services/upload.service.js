const { FileUpload } = require('../models');
const path = require('path');
const fs = require('fs');
const config = require('../config');

module.exports = {
  saveFile: async (userId, file) => {
    const uploadDir = path.resolve(config.upload.uploadDir, file.mimetype.split('/')[0]);
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    const dest = path.join(uploadDir, file.originalname);
    fs.writeFileSync(dest, file.buffer);

    return FileUpload.create({
      filename: file.originalname,
      type: file.mimetype.split('/')[0],
      url: dest,
      uploaderId: userId
    });
  }
};
