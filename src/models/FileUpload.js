// src/models/FileUpload.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const FileUpload = sequelize.define('FileUpload', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('image', 'video', 'file'),
      defaultValue: 'file'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uploaderId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  });

  FileUpload.associate = (models) => {
    FileUpload.belongsTo(models.User, { foreignKey: 'uploaderId', as: 'uploader' });
  };

  return FileUpload;
};
