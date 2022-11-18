const { Router } = require('express');
const clientRouter = Router();
const homeRouter = require('./home');
const authorRouter = require('./authors');
const bookRouter = require('./books');
const photoRouter = require('./photos');

clientRouter.use('/', homeRouter);
clientRouter.use('/authors', authorRouter);
clientRouter.use('/books', bookRouter);
clientRouter.use('/photos', photoRouter);

module.exports = clientRouter;