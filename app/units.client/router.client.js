const { Router } = require('express');
const clientRouter = Router();
const homeRouter = require('./home');
const authorRouter = require('./authors');

clientRouter.use('/', homeRouter);
clientRouter.use('/authors', authorRouter);

clientRouter.get('/books', function(req, res, next) {

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/books/index',
      title: 'books',
      heading: 'books'
    });

});

clientRouter.get('/books/:id', function(req, res, next) {

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/books/detail',
      title: 'book detail',
      heading: `book: ${req.params.id}`
    });

});

module.exports = clientRouter;
