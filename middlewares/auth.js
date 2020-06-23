const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config.js');
const AutorizationError = require('../errors/autorizationError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AutorizationError('Необходима авторизация'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : JWT_KEY);
  } catch (err) {
    return next(new AutorizationError('Необходима авторизация'));
  }
  req.user = payload;
  return next();
};
