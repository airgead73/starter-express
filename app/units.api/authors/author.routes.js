const { Router } = require('express');
const authorRouter = Router();

// controller
const { create, read, detail, update, remove, drop } = require('./author.controller');

// models
const Author = require('./author');

// populate
const populateBooks = {
  path: 'books',
  options: {
    sort: {
      'title': 1
    }
  }
}

// middleware
const { handleQuery, validationRules, validate  } = require('../../middleware');

// routes
authorRouter.route('/')
  .post(validationRules('createAuthor'), validate, create)
  .get(handleQuery(Author, populateBooks),read)
  .delete(drop);

authorRouter.route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = authorRouter;