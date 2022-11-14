const Author = require('./author');

/**
 * @desc Create author 
 * @route POST - /authors
 * @access Private
 * */

 exports.create = async(req,res,next) => {

  try {

    const { success, errors } = res.val_results;

    if(!success) {

      const { errors: responseErrors } = errors;

      return res.status(400)
        .json({
          success,
          message: 'Something went wrong: validation errors.',
          errors: responseErrors
        });

    }

    const author = new Author(req.body);
    await author.save();

    res.status(200)
    .json({
      success: true,
      message: `API new author created: ${author.fullname}.`,
      author
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

    const { success, count, data: authors } = res.results;

    res.status(200)
    .json({
      success,
      message: 'API list of authors.',
      count,
      authors
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

    res.status(200)
    .json({
      success: true,
      message: 'Author detail retrieved.',
      data: res.data
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

    const { _id } = res.data;

    const updatedAuthor = await Author.findByIdAndUpdate(_id, req.body, { new: true });
    const { fullname } = updatedAuthor;

    res.status(200)
    .json({
      success: true,
      message: `API author has been updated: $${fullname}`,
      data: updatedAuthor
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

    const author = res.data;
    const { fullname } = author;
    author.remove();

    res.status(200)
    .json({
      success: true,
      message: `API author has been removed: ${fullname}.`
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

    await Author.collection.drop();

    res.status(200)
    .json({
      success: true,
      message: 'API drop author collection'
    });

  } catch(err) {

    next(err);

  }   
  
}