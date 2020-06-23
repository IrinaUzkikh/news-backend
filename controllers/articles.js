const Article = require('../models/article.js');
const NotFoundError = require('../errors/notFoundError.js');
const NoRightsToDeleteError = require('../errors/noRightsToDeleteError');
const ValidationOrCastError = require('../errors/validationOrCastError');

module.exports.getArticles = (req, res, next) => {
  Article.find({})
    .then((articles) => res.send({ data: articles }))
    .catch((err) => next(err));
};

module.exports.createArticle = (req, res, next) => {
  const { keyword, title, text, date, source, link, image } = req.body;
  const owner = req.user._id;
  Article.create({ keyword, title, text, date, source, link, image, owner })
    .then((article) => res.send({ data: article }))
    .catch((err) => {
      next(err);
    });
};

module.exports.deleteArticleId = (req, res, next) => {
  Article.findById(req.params.id)
    .orFail(() => new NotFoundError('Статья не найдена'))
    .then((article) => {
      if (JSON.stringify(article.owner) !== JSON.stringify(req.user._id)) {
        throw new NoRightsToDeleteError('У Вас нет прав на удаление статьи');
      } else { article.deleteOne(article).then(() => res.send({ message: 'Статья удалена' })); }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationOrCastError('Передан некорректный ID'));
      } else {
        next(err);
      }
    });
};

