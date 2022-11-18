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

/**
 * @desc photo read view
 * @route GET - /photos
 * @access Private
 * */

 exports.read = async(req, res, next) => {

  try {

    res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/photos/index',
        title: 'photos',
        heading: 'photos'
      })

  } catch(err) {

    next(err);

  }

}

/**
 * @desc photo detail view
 * @route GET - /photos/:id
 * @access Private
 * */

 exports.detail = async(req, res, next) => {

  try {

    const { id } = req.params;

    res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/photos/detail',
        title: 'photo detail',
        heading: `photo detail: ${id}`
      })

  } catch(err) {

    next(err);

  }

}

/**
 * @desc photo update view
 * @route GET - /photos/:id
 * @access Private
 * */

 exports.update = async(req, res, next) => {

  try {

    const { id } = req.params;

    res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/photos/update',
        title: 'photo update',
        heading: `photo update: ${id}`
      })

  } catch(err) {

    next(err);

  }

}

/**
 * @desc photo delete view
 * @route GET - /photos/:id
 * @access Private
 * */

 exports.remove = async(req, res, next) => {

  try {

    const { id } = req.params;

    res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/photos/remove',
        title: 'photo delete',
        heading: `photo delete: ${id}`
      })

  } catch(err) {

    next(err);

  }

}

/**
 * @desc photo drop view
 * @route GET - /photos/drop
 * @access Private
 * */

 exports.drop = async(req, res, next) => {

  try {

    res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/photos/drop',
        title: 'photo drop collection',
        heading: 'photo drop collection'
      })

  } catch(err) {

    next(err);

  }

}