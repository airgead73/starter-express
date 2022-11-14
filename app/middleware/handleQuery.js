const handleQuery = ($model, $populate) => async (req, res, next) => {

  let query;

  const reqQuery = {...req.query}; 

  const removeFields = ['select', 'sort']

  removeFields.forEach(param => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);

  query = $model.find(JSON.parse(queryStr));

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields)
  }

  // sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    console.log(sortBy)
    query = query.sort(sortBy)
  } else {
    query = query.sort('lname')
  }

  // populate
  if($populate) {
    query = query.populate($populate);
  }

  const results = await query;

  res.results = {
    success: true,
    count: results.length,
    data: results
  };

  next();

}

module.exports = handleQuery;