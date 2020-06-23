const router = require('express').Router();

const {
  getUserId,
} = require('../controllers/users.js');

router.get('/me', getUserId);

module.exports = router;
