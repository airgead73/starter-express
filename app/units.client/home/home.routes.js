const { Router } = require('express');
const homeRouter = Router();

// controllers 
const { read } = require('./home.controller');

// middleware
const { handleQuery } = require('../../middleware');

// models
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

// routes
homeRouter.get('/', handleQuery(Author, populateBooks), read);

module.exports = homeRouter;