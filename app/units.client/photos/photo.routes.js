const { Router } = require('express');
const authorRouter = require('../authors');
const photoRouter = Router();

// controllers
const { create } = require('./photo.controller');

photoRouter.get('/add', create);

module.exports = photoRouter;