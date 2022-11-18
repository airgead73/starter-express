/**
 * @desc photo create view
 * @route GET - /photos/add
 * @access Private
 * */

exports.create = async(req, res, next) => {

  try {

    res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/photos/add',
        title: 'add photo',
        heading: 'add photo'
      })

  } catch(err) {

    next(err);

  }

}