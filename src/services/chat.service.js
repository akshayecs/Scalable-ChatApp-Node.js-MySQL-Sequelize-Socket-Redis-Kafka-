const { Chat, User, Group, GroupMember } = require('../models');

module.exports = {
  createPrivateChat: async (userId, otherUserId) => {
    let chat = await Chat.findOne({
      where: { type: 'private' },
      include: [
        { model: User, as: 'participants', where: { id: [userId, otherUserId] } }
      ]
    });

    if (!chat) {
      chat = await Chat.create({ type: 'private' });
      await chat.addParticipants([userId, otherUserId]);
    }
    return chat;
  },

  createGroup: async (creatorId, name, members) => {
    const group = await Group.create({ name });
    await GroupMember.create({ userId: creatorId, groupId: group.id });
    for (const memberId of members) {
      await GroupMember.create({ userId: memberId, groupId: group.id });
    }
    return group;
  },

  getUserChats: async (userId) => {
    return Chat.findAll({
      include: [
        { model: User, as: 'participants', where: { id: userId } }
      ]
    });
  }
};
