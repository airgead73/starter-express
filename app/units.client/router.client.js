const { Router } = require('express');
const clientRouter = Router();
const homeRouter = require('./home');
const authorRouter = require('./authors');
const bookRouter = require('./books');

clientRouter.use('/', homeRouter);
clientRouter.use('/authors', authorRouter);
clientRouter.use('/books', bookRouter);

module.exports = clientRouter;