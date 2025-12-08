const { User } = require('../models');

module.exports = {
  /**
   * Get a user by their ID
   * @param {string} id
   * @returns {Promise<User>}
   */
  getUserById: async (id) => {
    return User.findByPk(id, {
      attributes: ['id', 'username', 'email', 'avatar', 'createdAt', 'updatedAt']
    });
  },

  /**
   * Get all users
   * @returns {Promise<User[]>}
   */
  getAllUsers: async () => {
    return User.findAll({
      attributes: ['id', 'username', 'email', 'avatar']
    });
  },

  /**
   * Update a user's profile
   * @param {string} id
   * @param {Object} data
   * @returns {Promise<User>}
   */
  updateUser: async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    return user.update(data);
  },

  /**
   * Delete a user by ID
   * @param {string} id
   * @returns {Promise<void>}
   */
  deleteUser: async (id) => {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    await user.destroy();
  }
};
