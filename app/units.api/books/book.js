const mongoose = require('mongoose');
const format = require('date-fns/format');
const slugify = require('slugify');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Add a title'],
    maxlength: 200,
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'    
  },
  slug: {
    type: String
  },
}, {
  timestamps: true
});

bookSchema.set('toObject', { virtuals: true });
bookSchema.set('toJSON', { virtuals: true });

bookSchema.pre("save", function() {
  this.slug = slugify(this.title, {
    replacement: '-',
    lower: true,
    trim: true
  });
});

bookSchema.virtual('dates_formatted').get(function() {

  return {
    createdAt: format(this.createdAt, 'MMMM d, yyyy'),
    updatedAt: format(this.updatedAt, 'MMMM d, yyyy')
  }  

});

module.exports = mongoose.model('Book', bookSchema);