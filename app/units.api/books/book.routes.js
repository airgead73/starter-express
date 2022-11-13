const { Router } = require('express');
const bookRouter = Router();

// controller
const { create, read, detail, update, remove, drop } = require('./book.controller');

// routers
bookRouter.route('/')
  .post(create)
  .get(read)
  .delete(drop);

bookRouter.route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = bookRouter;