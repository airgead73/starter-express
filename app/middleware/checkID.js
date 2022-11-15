const mongoose = require("mongoose");

const checkID = ($model, $populate) => async(req, res, next) => {

  const { id } = req.params;

  // check if id is valid

  if(!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('Id is not valid.');
    error.status = 400;
    return next(error);
  }

  let query;

  query = $model.findById(id);

  if($populate) query = query.populate($populate);

  const data = await query;

  if(!data) {
    const error = new Error('Item is not found.');
    error.status = 401;
    return next(error); 
  }

  res.data = data;  

  next();

}

module.exports = checkID;