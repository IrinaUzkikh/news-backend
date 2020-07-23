const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const User = require('../models/user.js');
const NotFoundError = require('../errors/notFoundError.js');
const AutorizationError = require('../errors/autorizationError');
const EmailAlreadyExistError = require('../errors/emailAlreadyExistError');
const ValidationOrCastError = require('../errors/validationOrCastError');

const { JWT_KEY } = require('../config.js');

module.exports.createUser = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create(
      {
        email, password: hash, name,
      },
    ))
    .then((user) => res.send({
      email: user.email, name: user.name,
    }))
    .catch((err) => {
      if (err.message.includes('Error, expected `email` to be unique')) {
        next(new EmailAlreadyExistError('Пользователь с таким email уже есть'));
      } else {
        next(new ValidationOrCastError(err.message));
      }
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;


  return User.findUserByCredentials(email, password)
    .then((user) => {
    /*  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); */
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : JWT_KEY, { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(() => {
      next(new AutorizationError('Неправильные почта или пароль'));
    });
};

module.exports.getUserId = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => new NotFoundError('Пользователь не найден'))
    .then((user) => res.send({
      email: user.email, name: user.name,
    }))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationOrCastError('Передан некорректный ID'));
      } else {
        next(err);
      }
    });
};
