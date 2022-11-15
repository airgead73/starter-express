const { Router } = require('express');
const bookRouter = Router();

// controller
const { create, read, detail, update, remove, drop } = require('./book.controller');

// models
const Book = require('./book');

// middleware
const { handleQuery, validationRules, validate } = require('../../middleware');

// routers
bookRouter.route('/')
  .post(validationRules('createBook'), validate, create)
  .get(handleQuery(Book, 'author'), read)
  .delete(drop);

bookRouter.route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = bookRouter;