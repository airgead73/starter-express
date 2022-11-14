const { Author } = require('../../units.api/authors');
/**
 * @desc Dashboard view
 * @route GET - /
 * @access Private
 * */

exports.read = async(req, res, next) => {

  const { success, count, data: authors } = res.results;

  res.status(200)
    .render('template', {
      success,
      pagePath: './pages/dashboard/index',
      title: 'Express Starter',
      count,
      authors
    });

}