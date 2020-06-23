const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { linkValidationMethod } = require('../middlewares/linkValidationMethod');
const { dateValidationMethod } = require('../middlewares/dateValidationMethod');

const {
  getArticles,
  createArticle,
  deleteArticleId,
} = require('../controllers/articles.js');

router.get('/', getArticles);

router.post('/', celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.required().custom(dateValidationMethod),
    source: Joi.string().required(),
    link: Joi.string().required().custom(linkValidationMethod),
    image: Joi.string().required().custom(linkValidationMethod),
  }),
}), createArticle);

router.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24),
  }),
}), deleteArticleId);

module.exports = router;
