const { Router } = require('express');
const homeRouter = Router();

homeRouter.get('/', function(req, res, next) {

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/dashboard/index',
      title: 'Express Starter',
      heading: 'home'
    });

});

module.exports = homeRouter;