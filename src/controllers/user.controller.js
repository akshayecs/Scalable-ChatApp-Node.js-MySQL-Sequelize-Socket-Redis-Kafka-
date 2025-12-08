const userService = require('../services/user.service');

module.exports = {
  getProfile: async (req, res, next) => {
    try {
      const user = await userService.getUserById(req.user.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },

  listUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }
};
