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

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/authors/index',
    title: 'authors',
    heading: 'authors'
  });

}

/**
 * @desc author detail view
 * @route GET - /authors/:id
 * @access Private
 * */

exports.detail = (req,res,next) => {

  const { id: authorID } = req.params;

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/authors/detail',
    title: authorID,
    heading: `author detail: ${authorID}` 
  });
  
}

/**
 * @desc author update view
 * @route GET - /authors/:id/update
 * @access Private
 * */

exports.update = (req,res,next) => {

  const { id: authorID } = req.params;

  res.status(200)
  .render('template', {
    success: true,
    pagePath: './pages/authors/update',
    title: authorID,
    heading: `author update: ${authorID}` 
  });  
  
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