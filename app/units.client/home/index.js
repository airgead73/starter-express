const { Router } = require('express');
const homeRouter = Router();
const { Author } = require('../../units.api/authors');
const { Book } = require('../../units.api/books');

homeRouter.get('/', async function(req, res, next) {

  const authors = await Author.find().populate('books');
  console.log(authors);

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/dashboard/index',
      title: 'Express Starter',
      authors
    });

});

module.exports = homeRouter;