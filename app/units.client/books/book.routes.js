const { Router } = require('express');
const bookRouter = Router();

// controller
const { create, read, detail, update, remove, drop } = require('./book.controller');

bookRouter.get('/', read);

bookRouter.get('/add', create);

bookRouter.get('/drop', drop);

bookRouter.get('/:id', detail);

bookRouter.get('/:id/update', update);

bookRouter.get('/:id/delete', remove);

module.exports = bookRouter;