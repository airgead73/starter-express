const { Router } = require('express');
const authorRouter = Router();

authorRouter.get('/', function(req, res, next) {

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/authors/index',
      title: 'authors',
      heading: 'authors'
    });

});

authorRouter.get('/:id', function(req, res, next) {

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/authors/detail',
      title: 'author detail',
      heading: `author: ${req.params.id}`
    });

});

module.exports = authorRouter;