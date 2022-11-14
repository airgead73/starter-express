const { Author } = require('../../units.api/authors');
/**
 * @desc Dashboard view
 * @route GET - /
 * @access Private
 * */

exports.read = async(req, res, next) => {

  const authors = await Author.find();

  res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/dashboard/index',
      title: 'Express Starter',
      authors
    });

}