const { Book } = require('../../units.api/books');

/**
 * @desc Create book 
 * @route POST - /books
 * @access Private
 * */

 exports.create = async(req,res,next) => {

  try {

    res.status(200)
    .json({
      success: true,
      message: 'API add book'
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

    res.status(200)
    .json({
      success: true,
      message: 'API read books'
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

    const { id } = req.params;

    const book = await Book.findById(id).populate('author');

    res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/books/detail',
      title: 'Express Starter',
      book
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

    const { id } = req.params;

    const book = await Book.findById(id).populate('author');

    res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/books/update',
      title: 'Express Starter',
      book
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

    const { id } = req.params;

    const book = await Book.findById(id).populate('author');

    res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/books/remove',
      title: 'Express Starter',
      book
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

    res.status(200)
    .json({
      success: true,
      message: 'API drop book collection'
    });

  } catch(err) {

    next(err);

  }   
  
}