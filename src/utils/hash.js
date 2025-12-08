const bcrypt = require('bcryptjs');

/**
 * Hash a plain text password
 * @param {String} password
 * @param {Number} saltRounds
 * @returns {String} hashed password
 */
const hashPassword = (password, saltRounds = 10) => {
  return bcrypt.hashSync(password, saltRounds);
};

/**
 * Compare plain password with hashed password
 * @param {String} password
 * @param {String} hashedPassword
 * @returns {Boolean} true if match
 */
const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

module.exports = { hashPassword, comparePassword };
