const validator = require('validator');
const ValidationOrCastError = require('../errors/validationOrCastError');

const dateValidationMethod = (value) => {
  if (!validator.isDate(value)) {
    throw new ValidationOrCastError('Неправильный формат даты при вводе: введите дату в формате YYYY-MM-DD');
  }
  return value;
};

module.exports = {
  dateValidationMethod,
};
