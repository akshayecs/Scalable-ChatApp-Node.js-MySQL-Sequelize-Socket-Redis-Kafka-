const jwt = require('jsonwebtoken');
const config = require('../config');

/**
 * Generate JWT token
 * @param {Object} payload - data to encode in the token
 * @param {String} expiresIn - token expiration (default: 1d)
 * @returns {String} JWT token
 */
const generateToken = (payload, expiresIn = '1d') => {
  return jwt.sign(payload, config.JWT_SECRET, { expiresIn });
};

/**
 * Verify JWT token
 * @param {String} token
 * @returns {Object} decoded payload
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, config.JWT_SECRET);
  } catch (error) {
    console.log(error);
    
    return null;
  }
};

module.exports = { generateToken, verifyToken };
