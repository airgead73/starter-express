const { Router } = require('express');
const authorRouter = Router();

// controller
const { create, read, detail, update, remove, drop } = require('./author.controller');

// models
const Author = require('./author');

// middleware
const { checkID, handleQuery } = require('../../middleware');
authorRouter.use('/:id', checkID(Author));

// routers
authorRouter.route('/')
  .post(create)
  .get(handleQuery(Author),read)
  .delete(drop);

authorRouter.route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = authorRouter;