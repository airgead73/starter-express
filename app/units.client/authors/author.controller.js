const { Author } = require('../../units.api/authors');
/**
 * @desc author create view
 * @route GET - /authors/add
 * @access Private
 * */

exports.create = (req,res,next) => {

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/authors/add',
    title: 'add author',
    heading: 'add author'
  });
  
}

/**
 * @desc authors read view
 * @route GET - /authors
 * @access Private
 * */

exports.read = (req,res,next) => {

  try {

    const { success, count, data: authors } = res.results;

    res.status(200)
    .render('template', {
      success,
      pagePath: './pages/authors/index',
      title: 'authors',
      heading: 'authors',
      count,
      authors
    });    

  } catch(err) {

    next(err)

  }

}

/**
 * @desc author detail view
 * @route GET - /authors/:id
 * @access Private
 * */

exports.detail = async(req,res,next) => {

  try {

    const { id } = req.params;
    const author = await Author.findById(id).populate('books');
    const { books } = author

    res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/authors/detail',
      title: 'author detail',
      author,
      books
    });
    

  } catch(err) {

    next(err);

  }


}

/**
 * @desc author update view
 * @route GET - /authors/:id/update
 * @access Private
 * */

exports.update = async(req,res,next) => {

  try {

    const { id } = req.params;
    const author = await Author.findById(id);

    res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/authors/update',
      title: `update ${author.lname}`,
      heading: `Update ${author.fullname}` 
    }); 

  } catch(err) {

    next(err);

  } 
  
}

/**
 * @desc author remove view
 * @route GET - /authors/:id/delete
 * @access Private
 * */

exports.remove = (req,res,next) => {

  const { id: authorID } = req.params;

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/authors/remove',
    title: authorID,
    heading: `author remove: ${authorID}` 
  }); 
  
}

/**
 * @desc author drop view
 * @route GET - /authors/drop
 * @access Private
 * */

exports.drop = (req,res,next) => {

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/authors/drop',
    title: 'drop authors',
    heading: 'drop author collection'
  });   
  
}