const router = require('express').Router();
// const { celebrate, Joi } = require('celebrate');
// const { linkValidationMethod } = require('../middlewares/linkValidationMethod.js');

const {
  getUserId,
} = require('../controllers/users.js');

// router.get('/', getUsers);

router.get('/me', getUserId);

module.exports = router;
