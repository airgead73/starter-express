const checkID = require('./checkID');
const handleQuery = require('./handleQuery');
const handleCloudinary = require('./handleCloudinary');
const handleError = require('./handleError');
const { validationRules, validate }= require('./handleValidation');
const checkAuthClient = require('./handleAuth');

module.exports = {
  checkID,
  checkAuthClient,
  handleCloudinary,
  handleError,
  handleQuery,
  validationRules,
  validate
}
