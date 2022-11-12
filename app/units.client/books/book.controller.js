/**
 * @desc book create view
 * @route GET - /books/add
 * @access Private
 * */

 exports.create = (req,res,next) => {

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/books/add',
    title: 'add book',
    heading: 'add book'
  });
  
}

/**
 * @desc books read view
 * @route GET - /books
 * @access Private
 * */

exports.read = (req,res,next) => {

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/books/index',
    title: 'books',
    heading: 'books'
  });

}

/**
 * @desc book detail view
 * @route GET - /books/:id
 * @access Private
 * */

exports.detail = (req,res,next) => {

  const { id: bookID } = req.params;

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/books/detail',
    title: bookID,
    heading: `book detail: ${bookID}` 
  });
  
}

/**
 * @desc book update view
 * @route GET - /books/:id/update
 * @access Private
 * */

exports.update = (req,res,next) => {

  const { id: bookID } = req.params;

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/books/update',
    title: bookID,
    heading: `book update: ${bookID}` 
  });  
  
}

/**
 * @desc book remove view
 * @route GET - /books/:id/delete
 * @access Private
 * */

exports.remove = (req,res,next) => {

  const { id: bookID } = req.params;

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/books/remove',
    title: bookID,
    heading: `book remove: ${bookID}` 
  }); 
  
}

/**
 * @desc book drop view
 * @route GET - /books/drop
 * @access Private
 * */

exports.drop = (req,res,next) => {

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/books/drop',
    title: 'drop books',
    heading: 'drop book collection'
  });   
  
}