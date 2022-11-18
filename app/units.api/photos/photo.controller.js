/**
 * @desc Create author 
 * @route POST - /authors
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