const { Router } = require('express');
const clientRouter = Router();

clientRouter.get('/', function(req, res, next) {

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/dashboard/index',
      title: 'Express Starter',
      heading: 'home'
    });

});

clientRouter.get('/authors', function(req, res, next) {

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/authors/index',
      title: 'authors',
      heading: 'authors'
    });

});

clientRouter.get('/authors/:id', function(req, res, next) {

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/authors/detail',
      title: 'author detail',
      heading: `author: ${req.params.id}`
    });

});

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
