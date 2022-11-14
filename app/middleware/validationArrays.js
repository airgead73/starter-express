const { body } = require('express-validator');

const authorArray = [
  body('fname')
    .not().isEmpty()
    .withMessage('Provide a first name.')
    .isLength({ max: 50 })
    .trim()
    .escape(),
  body('lname')
    .not().isEmpty()
    .withMessage('Provide a last name.')
    .isLength({ max: 50 })    
    .trim()
    .escape()
];

const bookArray = [
  body('title')
    .not().isEmpty()
    .withMessage('Provide a title.')
    .isLength({ max: 100 })
    .trim()
    .escape(),
  body('author')
    .not().isEmpty()
    .withMessage('Provide an author.')
    .isLength({ max: 200 })    
    .trim()
    .escape(),
];

module.exports = {
  authorArray,
  bookArray
}