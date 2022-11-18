/**
 * @desc Create photo 
 * @route POST - /photo
 * @access Private
 * */

 exports.create = async(req, res, next) => {
  try {

    res.status(200)
      .json({
        success: true,
        message: 'API create photo'
      })

  } catch(err) {
    next();
  }
}

/**
 * @desc Read photos 
 * @route GET - /photo
 * @access Private
 * */

 exports.read = async(req, res, next) => {
  try {

    res.status(200)
      .json({
        success: true,
        message: 'API read photos'
      })

  } catch(err) {
    next();
  }
}

/**
 * @desc Read photo detail 
 * @route GET - /photo/:id
 * @access Private
 * */

 exports.detail = async(req, res, next) => {
  try {

    const { id } = req.params;

    res.status(200)
      .json({
        success: true,
        message: `API photo detail: ${id}.`
      })

  } catch(err) {
    next();
  }
}

/**
 * @desc Update photo
 * @route PATCH - /photo/:id
 * @access Private
 * */

 exports.update = async(req, res, next) => {
  try {

    const { id } = req.params;

    res.status(200)
      .json({
        success: true,
        message: `API photo update: ${id}.`
      })

  } catch(err) {
    next();
  }
}

/**
 * @desc Delete photo
 * @route DELETE - /photo/:id
 * @access Private
 * */

 exports.remove = async(req, res, next) => {
  try {

    const { id } = req.params;

    res.status(200)
      .json({
        success: true,
        message: `API photo delete: ${id}.`
      })

  } catch(err) {
    next();
  }
}

/**
 * @desc Drop photo collection
 * @route DELETE - /photo
 * @access Private
 * */

 exports.drop = async(req, res, next) => {
  try {

    res.status(200)
      .json({
        success: true,
        message: 'Drop photo collection.'
      })

  } catch(err) {
    next();
  }
}