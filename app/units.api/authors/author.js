const mongoose = require('mongoose');
const format = require('date-fns/format');
const slugify = require('slugify');

const authorSchema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, 'Add first name.'],
    maxlength: 50,
    lowercase: true,
    trim: true
  },
  lname: {
    type: String,
    required: [true, 'Add last name.'],
    maxlength: 50,
    lowercase: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive']
  },
  slug: {
    type: String
  },
}, {
  timestamps: true
});

authorSchema.set('toObject', { virtuals: true });
authorSchema.set('toJSON', { virtuals: true });

authorSchema.pre("save", function(next) {

  const nameStr = `${this.lname} ${this.fname}`;

  this.slug = slugify(nameStr, {
    replacement: '-',
    lower: true,
    trim: true
  });

  next();

});

authorSchema.virtual('dates_formatted').get(function() {

  return {
    createdAt: format(this.createdAt, 'MMMM d, yyyy'),
    updatedAt: format(this.updatedAt, 'MMMM d, yyyy')
  }  

});

authorSchema.virtual('fullname').get(function() {
  const firstName = (this.fname).charAt(0).toUpperCase() + (this.fname).slice(1);
  const lastName = (this.lname).charAt(0).toUpperCase() + (this.lname).slice(1);
  return `${firstName} ${lastName}`;
});

authorSchema.virtual('listname').get(function() {
  const firstName = (this.fname).charAt(0).toUpperCase() + (this.fname).slice(1);
  const lastName = (this.lname).charAt(0).toUpperCase() + (this.lname).slice(1);
  return `${lastName}, ${firstName}`;
});

module.exports = mongoose.model('Author', authorSchema);