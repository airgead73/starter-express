const checkID = require('./checkID');
const handleQuery = require('./handleQuery');
const handleCloudinary = require('./handleCloudinary');
const { validationRules, validate }= require('./handleValidation');
const checkAuthClient = require('./handleAuth');

module.exports = {
  checkID,
  checkAuthClient,
  handleCloudinary,
  handleQuery,
  validationRules,
  validate
}
