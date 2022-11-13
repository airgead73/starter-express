const mongoose = require("mongoose");

const checkID = ($model) => async(req, res, next) => {

  const { id } = req.params;

  console.log(id);

  // check if id is valid

  if(!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('Id is not valid.');
    error.status = 400;
    return next(error);
  }

  // check if item exists

  const data = await $model.findById(id);

  if(!data) {
    const error = new Error('Item is not found.');
    error.status = 401;
    return next(error); 
  }

  res.data = data;

  next();

}

module.exports = checkID;