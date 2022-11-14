const { Router } = require('express');
const authorRouter = Router();

// controllers
const { create, read, detail, update, remove, drop } = require('./author.controller');

// model
const { Author } = require('../../units.api/authors');

// middleware
const { checkID } = require('../../middleware');

authorRouter.get('/', read);

authorRouter.get('/add', create);

authorRouter.get('/drop', drop);

authorRouter.get('/:id', checkID(Author, 'author'), detail);

authorRouter.get('/:id/update', update);

authorRouter.get('/:id/delete', remove);

module.exports = authorRouter;