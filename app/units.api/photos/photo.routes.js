const { Router } = require('express');
const photoRouter = Router();

// controller
const { create } = require('./photo.controller');

// middleware
const { handleQuery, validationRules, validate } = require('../../middleware');

// routes
photoRouter.route('/')
  .post(create);


module.exports = photoRouter;