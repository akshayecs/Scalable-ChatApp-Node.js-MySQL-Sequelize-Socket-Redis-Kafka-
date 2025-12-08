// src/models/User.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Message, { foreignKey: 'senderId', as: 'messages' });
    User.belongsToMany(models.Group, { through: models.GroupMember, foreignKey: 'userId', as: 'groups' });
  };

  return User;
};
