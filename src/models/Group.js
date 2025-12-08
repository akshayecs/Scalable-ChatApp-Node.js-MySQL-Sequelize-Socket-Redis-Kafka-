// src/models/Group.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Group = sequelize.define('Group', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  });

  Group.associate = (models) => {
    Group.belongsToMany(models.User, { through: models.GroupMember, foreignKey: 'groupId', as: 'members' });
    Group.hasMany(models.Message, { foreignKey: 'groupId', as: 'messages' });
  };

  return Group;
};
