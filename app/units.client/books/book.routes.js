const { Router } = require('express');
const bookRouter = Router();

// controller
const { create, read, detail, update, remove, drop } = require('./book.controller');

// middleware
const { checkID, handleQuery } = require('../../middleware');

// model
const { Author } = require('../../units.api/authors');
const { Book } = require('../../units.api/books');

bookRouter.get('/', handleQuery(Book, 'author'), read);

bookRouter.get('/add', create);

bookRouter.get('/drop', drop);

bookRouter.get('/:id', detail);

bookRouter.get('/:id/update', update);

bookRouter.get('/:id/delete', remove);

module.exports = bookRouter;