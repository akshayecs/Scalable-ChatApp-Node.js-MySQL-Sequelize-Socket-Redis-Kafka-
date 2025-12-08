const authService = require('../services/auth.service');
const { generateToken } = require('../utils/jwt');
const { hashPassword, comparePassword } = require('../utils/hash');

module.exports = {
  register: async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const hashed = await hashPassword(password);
      const user = await authService.createUser({ username, email, password: hashed });
      const token = generateToken({ id: user.id, email: user.email });
      res.status(201).json({ user, token });
    } catch (err) {
      next(err);
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await authService.getUserByEmail(email);
      if (!user) return res.status(401).json({ message: 'Invalid email or password' });
      const match = await comparePassword(password, user.password);
      if (!match) return res.status(401).json({ message: 'Invalid email or password' });
      const token = generateToken({ id: user.id, email: user.email });
      res.json({ user, token });
    } catch (err) {
      next(err);
    }
  }
};
