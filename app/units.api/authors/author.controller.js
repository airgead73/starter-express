/**
 * @desc Create author 
 * @route POST - /authors
 * @access Private
 * */

 exports.create = async(req,res,next) => {

  try {

    res.status(200)
    .json({
      success: true,
      message: 'API add author'
    });


  } catch(err) {

    next(err);

  }
  
}

/**
 * @desc Read authors
 * @route GET - /authors
 * @access Private
 * */

exports.read = async(req,res,next) => {

  try {

    res.status(200)
    .json({
      success: true,
      message: 'API read authors'
    });

  } catch(err) {

    next(err);

  }

}

/**
 * @desc Read author detail
 * @route GET - /authors/:id
 * @access Private
 * */

exports.detail = async(req,res,next) => {

  try {

    const { id: authorID } = req.params;

    res.status(200)
    .json({
      success: true,
      message: `API author detail: ${authorID}`
    });

  } catch(err) {

    next(err);

  }
 
}

/**
 * @desc Update author
 * @route PATCH - /authors/:id
 * @access Private
 * */

exports.update = async(req,res,next) => {

  try {

    const { id: authorID } = req.params;

    res.status(200)
    .json({
      success: true,
      message: `API author update: ${authorID}`
    });

  } catch(err) {

    next(err);

  } 
  
}

/**
 * @desc Delete author
 * @route DELETE - /authors/:id
 * @access Private
 * */

exports.remove = async(req,res,next) => {

  try {

    const { id: authorID } = req.params;

    res.status(200)
    .json({
      success: true,
      message: `API author remove: ${authorID}`
    });

  } catch(err) {

    next(err);

  } 
  
}

/**
 * @desc Drop author collection 
 * @route DELETE - /authors
 * @access Private
 * */

exports.drop = async(req,res,next) => {

  try {

    res.status(200)
    .json({
      success: true,
      message: 'API drop author collection'
    });

  } catch(err) {

    next(err);

  }   
  
}