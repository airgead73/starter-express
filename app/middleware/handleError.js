const handleError = (err,req,res,next) => {
  res.status(err.status).json({
    success: false,
    status: err.status,
    name: err.name,
    message: err.message,
    path: req.path,
    stack: err.stack
  });
}

module.exports = handleError;