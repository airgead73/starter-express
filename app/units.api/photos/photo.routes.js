const { Router } = require('express');
const photoRouter = Router();

// controller
const { create, read, detail, update, remove, drop } = require('./photo.controller');

// middleware
const { handleQuery, validationRules, validate } = require('../../middleware');

// routes
photoRouter.route('/')
  .post(create)
  .get(read)
  .delete(drop);

photoRouter.route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);


module.exports = photoRouter;