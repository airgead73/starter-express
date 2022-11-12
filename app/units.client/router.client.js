const { Router } = require('express');
const clientRouter = Router();

clientRouter.get('/', function(req, res, next) {

  res.status(200)
    .render('page', {
      success: true,
      title: 'Express Starter',
      heading: 'home'
    });

});

clientRouter.get('/authors', function(req, res, next) {

  res.status(200)
    .render('page', {
      success: true,
      title: 'authors',
      heading: 'authors'
    });

});

clientRouter.get('/authors/:id', function(req, res, next) {

  res.status(200)
    .render('page', {
      success: true,
      title: 'author detail',
      heading: `author: ${req.params.id}`
    });

});

clientRouter.get('/books', function(req, res, next) {

  res.status(200)
    .render('page', {
      success: true,
      title: 'books',
      heading: 'books'
    });

});

clientRouter.get('/books/:id', function(req, res, next) {

  res.status(200)
    .render('page', {
      success: true,
      title: 'book detail',
      heading: `book: ${req.params.id}`
    });

});

module.exports = clientRouter;