const handleError = (err,req,res,next) => {
  let status;
  if(err.status) {
    status = err.status;
  } else {
    status = 500;
  }
  res.status(status).json({
    success: false,
    status: status,
    name: err.name,
    message: err.message,
    path: req.path,
    stack: err.stack
  });
}

module.exports = handleError;