const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let categorySchema = Schema(
  {
    name: {
      type: String,
      minlength: [4],
      maxLength: [20],
      required: [true],
    },
  },
  { timestamps: true }
);

module.exports = model('Category', categorySchema);