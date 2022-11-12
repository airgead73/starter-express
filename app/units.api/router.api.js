const { Router } = require('express');
const apiRouter = Router();

apiRouter.get('/', function(req, res, next) {

  res.send('API home page');

});

apiRouter.get('/authors', function(req, res, next) {

  res.send('API author page');

});

apiRouter.get('/authors/:id', function(req, res, next) {

  res.send(`API author detail page ${req.params.id}.`);

});

module.exports = apiRouter;