const mongoose = require("mongoose");

// models
const { Author } = require('../units.api/authors');

const checkID = ($model, $populate) => async(req, res, next) => {

  try {

    // check if id is valid

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {

      const error = new Error('ID is not valid.');
      error.status = 400;

      return next(error);


    }

    // check if item exists

    const data = await $model.findById(id);

    if(!data) {

      const error = new Error('Item does not exist.');
      error.status = 401;

      return next(error);

    }

    next();

  } catch(err) {

    next(err);

  }

}

module.exports = checkID;