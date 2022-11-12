const { Router } = require('express');
const authorRouter = Router();

authorRouter.get('/', function(req, res, next) {

  res.status(200)
  .json({
    success: true,
    message: 'API authors.'
  });

});

authorRouter.get('/:id', function(req, res, next) {

  res.status(200)
  .json({
    success: true,
    message: `API author detail ${req.params.id}.`
  });

});

module.exports = authorRouter;