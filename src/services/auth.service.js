const { User } = require('../models');

module.exports = {
  createUser: async (data) => {
    return User.create(data);
  },

  getUserByEmail: async (email) => {
    return User.findOne({ where: { email } });
  }
};
