// src/models/Chat.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Chat = sequelize.define('Chat', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('private', 'group'),
      defaultValue: 'private'
    }
  });

  Chat.associate = (models) => {
    Chat.hasMany(models.Message, { foreignKey: 'chatId', as: 'messages' });
    Chat.belongsToMany(models.User, { through: 'ChatUsers', foreignKey: 'chatId', as: 'participants' });
  };

  return Chat;
};
