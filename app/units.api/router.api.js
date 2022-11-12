const { Router } = require('express');
const apiRouter = Router();

apiRouter.get('/', function(req, res, next) {

  res.status(200)
    .json({
      success: true,
      message: 'API home page.'
    });

});

apiRouter.get('/authors', function(req, res, next) {

  res.status(200)
  .json({
    success: true,
    message: 'API authors.'
  });

});

apiRouter.get('/authors/:id', function(req, res, next) {

  res.status(200)
  .json({
    success: true,
    message: `API author detail ${req.params.id}.`
  });

});

apiRouter.get('/books', function(req, res, next) {

  res.status(200)
  .json({
    success: true,
    message: 'API books.'
  });

});

apiRouter.get('/books/:id', function(req, res, next) {

  res.status(200)
  .json({
    success: true,
    message: `API book detail ${req.params.id}.`
  });

});

module.exports = apiRouter;