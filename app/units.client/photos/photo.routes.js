const { Router } = require('express');
const authorRouter = require('../authors');
const photoRouter = Router();

// controllers
const { create, read, detail, update, remove, drop } = require('./photo.controller');

// middleware
const { handleQuery } = require('../../middleware');

// routes
photoRouter.get('/', read);

photoRouter.get('/add', create);

photoRouter.get('/drop', drop);

photoRouter.get('/:id', detail);

photoRouter.get('/:id/update', update);

photoRouter.get('/:id/delete', remove);

module.exports = photoRouter;