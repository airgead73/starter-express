const { Author } = require('../../units.api/authors');
const { Book } = require('../../units.api/books');
/**
 * @desc Dashboard view
 * @route GET - /
 * @access Private
 * */

exports.read = async(req, res, next) => {

  try {

    const authors = await Author.find().sort('lname').populate('books');
    const books = await Book.find().sort('title').populate('author');

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/dashboard/index',
      title: 'Express Starter',
      authors,
      books
    });    

  } catch(err) {

    next(err);

  }

}