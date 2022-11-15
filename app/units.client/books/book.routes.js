const { Router } = require('express');
const bookRouter = Router();

// controller
const { create, read, detail, update, remove, drop } = require('./book.controller');

// middleware
const { checkID } = require('../../middleware');

// model
const { Author } = require('../../units.api/authors');

bookRouter.get('/', read);

bookRouter.get('/add', create);

bookRouter.get('/drop', drop);

bookRouter.get('/:id', checkID(Author, 'author'), detail);

bookRouter.get('/:id/update', update);

bookRouter.get('/:id/delete', remove);

module.exports = bookRouter;