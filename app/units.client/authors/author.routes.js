const { Router } = require('express');
const authorRouter = Router();

// controllers
const { create, read, detail, update, remove, drop } = require('./author.controller');

// model
const { Author } = require('../../units.api/authors');

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
const { handleQuery } = require('../../middleware');

authorRouter.get('/', handleQuery(Author, populateBooks), read);

authorRouter.get('/add', create);

authorRouter.get('/drop', drop);

authorRouter.get('/:id', detail);

authorRouter.get('/:id/update', update);

authorRouter.get('/:id/delete', remove);

module.exports = authorRouter;