const { Router } = require('express');
const authorRouter = Router();

// controllers
const { create, read, detail, update, remove, drop } = require('./author.controller');

authorRouter.get('/', read);

authorRouter.get('/add', create);

authorRouter.get('/drop', drop);

authorRouter.get('/:id', detail);

authorRouter.get('/:id/update', update);

authorRouter.get('/:id/delete', remove);

module.exports = authorRouter;