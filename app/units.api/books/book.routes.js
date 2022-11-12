const { Router } = require('express');
const bookRouter = Router();

bookRouter.get('/', function(req, res, next) {

  res.status(200)
  .json({
    success: true,
    message: 'API books.'
  });

});

bookRouter.get('/:id', function(req, res, next) {

  res.status(200)
  .json({
    success: true,
    message: `API book detail ${req.params.id}.`
  });

});

module.exports = bookRouter;