const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema({
  tittle: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  numberPages: {
    type: Number,
    required: false
  },
  publisher: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Book', bookSchema);