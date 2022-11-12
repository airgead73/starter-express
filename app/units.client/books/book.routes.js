const { Router } = require('express');
const bookRouter = Router();

bookRouter.get('/', function(req, res, next) {

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/books/index',
      title: 'books',
      heading: 'books'
    });

});

bookRouter.get('/:id', function(req, res, next) {

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/books/detail',
      title: 'book detail',
      heading: `book: ${req.params.id}`
    });

});

module.exports = bookRouter;