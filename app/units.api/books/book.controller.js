const Book = require('./book');
/**
 * @desc Create book 
 * @route POST - /books
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

    const book = new Book(req.body);
    await book.save();

    res.status(200)
    .json({
      success: true,
      message: `API author created: ${book.title}.`,
      book
    });


  } catch(err) {

    next(err);

  }
  
}

/**
 * @desc Read books
 * @route GET - /books
 * @access Private
 * */

exports.read = async(req,res,next) => {

  try {

    const { success, count, data: books } = res.results;

    res.status(200)
    .json({
      success,
      message: 'API list of books.',
      count,
      books
    });

  } catch(err) {

    next(err);

  }

}

/**
 * @desc Read book detail
 * @route GET - /books/:id
 * @access Private
 * */

exports.detail = async(req,res,next) => {

  try {

    res.status(200)
    .json({
      success: true,
      message: 'API book detail retrieved',
      data: res.data
    });

  } catch(err) {

    next(err);

  }
 
}

/**
 * @desc Update book
 * @route PATCH - /books/:id
 * @access Private
 * */

exports.update = async(req,res,next) => {

  try {

    const { _id } = res.data;
    const updatedBook = await Book.findByIdAndUpdate(_id, req.body, { new: true });
    const { title } = updatedBook;

    res.status(200)
    .json({
      success: true,
      message: `API book update: ${title}`,
      data: updatedBook
    });

  } catch(err) {

    next(err);

  } 
  
}

/**
 * @desc Delete book
 * @route DELETE - /books/:id
 * @access Private
 * */

exports.remove = async(req,res,next) => {

  try {

    const book = res.data;
    const { title } = book;
    book.remove();

    res.status(200)
    .json({
      success: true,
      message: `API book remove: ${title}`
    });

  } catch(err) {

    next(err);

  } 
  
}

/**
 * @desc Drop book collection 
 * @route DELETE - /books
 * @access Private
 * */

exports.drop = async(req,res,next) => {

  try {

    await Book.collection.drop();

    res.status(200)
    .json({
      success: true,
      message: 'API drop book collection'
    });

  } catch(err) {

    next(err);

  }   
  
}