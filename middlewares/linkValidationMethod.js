const validator = require('validator');
const ValidationOrCastError = require('../errors/validationOrCastError');

const linkValidationMethod = (value) => {
  if (!validator.isURL(value)) {
    throw new ValidationOrCastError('Неправильный формат ссылки при вводе');
  }
  return value;
};

module.exports = {
  linkValidationMethod,
};
