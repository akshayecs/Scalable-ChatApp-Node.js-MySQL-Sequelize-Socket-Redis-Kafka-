// src/models/GroupMember.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const GroupMember = sequelize.define('GroupMember', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    groupId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    timestamps: true
  });

  return GroupMember;
};
